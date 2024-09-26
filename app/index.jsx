import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { theme } from "../theme";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { useState } from "react";

const initialState = [];

export default function App() {
  const [ShoppingList, setShoppingList] = useState(initialState);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value) {
      setShoppingList((prev) => [
        ...prev,
        { id: new Date().toString(), name: value },
      ]);
      setValue("");
    }
  };
  return (
    <FlatList
      ListHeaderComponent={
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={setValue}
          placeholder="E.g Coffee"
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
        />
      }
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text>Your Shoping list is empty.</Text>
        </View>
      }
      data={ShoppingList}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
      renderItem={({ item }) => (
        <ShoppingListItem name={item.name} key={item.id} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    paddingTop: 12,
  },

  contentContainer: {
    paddingBottom: 24,
  },

  textInput: {
    borderColor: theme.colorLightGray,
    borderWidth: 2,
    padding: 12,
    fontSize: 18,
    borderRadius: 50,
    marginHorizontal: 12,
    marginBottom: 12,
    backgroundColor: theme.colorWhite,
  },
  listEmptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
  },
});
