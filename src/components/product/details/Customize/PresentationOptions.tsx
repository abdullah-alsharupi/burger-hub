import React, { useState } from "react";
import ModifierList from "./ModifierList";
import ConnectedCustumize from "./ConnectedCustumize";
import { useCartStore } from "@/src/store/cart/cartStore";
import { PresentationCustomizeProps } from "@/src/types/product/props/PresentationCustomizeProps";
import { ModifierOption, Option } from "@/src/types/product/Customize";


const PresentationCustomize = ({ handlePress, isPressed, data }: PresentationCustomizeProps) => {
  const { addOption } = useCartStore(state => state);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const handleCheckboxPress = (option: ModifierOption, modifierId: string, modifierName: string) => {
    setSelectedOptions(prev => {
      const existingModifier = prev.find(selected => selected.modifireId === modifierId);
      const updatedOptions = existingModifier 
        ? existingModifier.modifireOptions.some((opt) => opt.modifierOptionId === option.modifierOptionId)
          ? existingModifier.modifireOptions.filter(opt => opt.modifierOptionId !== option.modifierOptionId)
          : [...existingModifier.modifireOptions, option]
        : [option];

      return existingModifier 
        ? prev.map(selected => 
            selected.modifireId === modifierId 
              ? { ...existingModifier, modifireOptions: updatedOptions } 
              : selected
          )
        : [...prev, { modifireId: modifierId, modifierName, modifireOptions: updatedOptions }];
    });
  };

  const handleSaveButton = async () => {
    const options = selectedOptions.map(selected => ({
      modifireId: selected.modifireId,
      modifierName: selected.modifierName,
      modifireOptions: selected.modifireOptions,
    }));

    addOption({
      id: data.products.id,
      imageurl: data.products.imageurl as any,
      name: data.products.name,
      price: data.products.price,
      quantity: 0,
      options,
      note: null
    });
    
    handlePress();
  };

  return (
    <ConnectedCustumize isPressed={isPressed} handlePress={handlePress} handleOnClickSave={handleSaveButton}>
      {data?.options?.map((modifier: Option) => (
        <ModifierList
          key={modifier.modifireId}
          modifierName={modifier.modifierName}
          options={modifier.modifireOptions}
          modifierId={modifier.modifireId}
          products={data.products}
          onClick={handleCheckboxPress}
          selectedOptions={selectedOptions}  
        />
      )) || null}
    </ConnectedCustumize>
  );
};

export default PresentationCustomize;