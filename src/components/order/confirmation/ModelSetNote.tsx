import React, { useEffect, useState } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Button from "../../ui/Button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NoteType } from "@/src/types/validations/NoteType";
import FormInput from "../../ui/FormInput";
import { useCartStore } from "@/src/store/cart/cartStore";

type Props = {
  productId: string;
};

const NoteSchema = z.object({
  note: z.string().optional(),
});

const ModelSetNote = ({ productId }: Props) => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const closeDialog = () => {
    setDialogVisible(false);
  };
  const { setNote, getNote } = useCartStore((state) => state);
  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(NoteSchema),
    values: {
      note: "",
    },
  });

  useEffect(() => {
    if (dialogVisible) {
      const existingNote = getNote(productId) || "";
      reset({ note: existingNote });
    }
  }, [dialogVisible, productId, getNote, reset]);

  const onSubmit = (data: NoteType) => {
    setNote(productId, data.note);
    console.log("I'm note in onSubmit", data);
    closeDialog();
  };

  return (
    <>
      <TouchableOpacity onPress={() => setDialogVisible(true)}>
        <Text style={styles.note}>Note</Text>
      </TouchableOpacity>

      <Modal
        transparent={dialogVisible}
        animationType="slide"
        visible={dialogVisible}
        onRequestClose={closeDialog}
      >
        <View style={styles.modalBackground}>
          <View style={styles.dialog}>
            <View style={{ width: "100%", marginBottom: 20 }}>
              <FormInput
                secureTextEntry={false}
                control={control}
                name="note"
                placeholder="Enter your note"
                label="Note"
              />
            </View>
            <TouchableOpacity style={styles.proceedButton} onPress={() => {}}>
            
              <Button
                title="Add"
                color="red"
                size="small"
                onClick={handleSubmit(onSubmit)}
              />
               <Button
                title="back"
                color="red"
                size="small"
                onClick={()=>setDialogVisible(false)}
              />
       
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  dialog: {
    width: 300,
    padding: 20,
    borderRadius: 30,
    backgroundColor: "#fff",
    alignItems: "flex-start",
  },
  proceedButton: {
    display:"flex",
    flexDirection:"row-reverse",
    gap:5,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    height: 60,
    width: 280,
  },
  note: {
    color: "#AF042C",
    textDecorationLine: "underline",
    fontSize: 16,
   },
});

export default ModelSetNote;
