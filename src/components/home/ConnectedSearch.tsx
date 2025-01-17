import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { usePathname, router } from "expo-router";
import { useCustomToast } from "@/src/hooks/useCustomToast";
import { useForm } from "react-hook-form";
import { SearchSchema } from "@/src/types/validations/SearchType";
import { zodResolver } from "@hookform/resolvers/zod";

const ConnectedSearch: React.FC<{
  color?: string;
  backgroundColor?: string;
}> = ({ color = "#333", backgroundColor = "white" }) => {
  const [query, setQuery] = useState<string>("");
  const pathname = usePathname();
  const { control, handleSubmit, setError } = useForm({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      searchText: "",
    },
  });

  const showToast = useCustomToast();
  const handleSearchPress = () => {
    if (query === "") {
      showToast("Please input something to search results across.", {
        type: "danger",
      });
      return;
    }

    if (pathname.startsWith("/search")) {
      router.setParams({ query });
    } else {
      // router.push(`/search/${query}`);
    }

    setQuery("");
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TouchableOpacity onPress={handleSearchPress}>
        <Icon name="search" size={20} color={color} />
      </TouchableOpacity>
      <TextInput
        style={[styles.input, { color }]}
        placeholder="Search.."
        placeholderTextColor="#999"
        value={query}
        onChangeText={setQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
    height: 64,
    paddingHorizontal: 16,
    borderRadius: 70,
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginTop: 2,
    margin: 15,
    marginBottom: 5,
  },
  icon: {
    marginRight: 10,
  },
});

export default ConnectedSearch;
