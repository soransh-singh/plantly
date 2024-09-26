import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../theme";
import { AntDesign, Entypo } from "@expo/vector-icons";

export function ShoppingListItem({ name, isCompleted }) {
  const handleDelete = () => {
    Alert.alert(
      "Are you sure you want to delete this?",
      "It will be gone for good.",
      [
        {
          text: "yes",
          onPress: () => console.log("ok, deleting"),
          style: "destructive",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );
  };
  return (
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <TouchableOpacity
        onPress={() => {
          handleDelete();
        }}
        style={[
          styles.button,
          isCompleted ? styles.completedButton : undefined,
        ]}
        activeOpacity={0.8}
      >
        <AntDesign
          name="closecircle"
          size={24}
          color={isCompleted ? theme.colorGray : theme.colorRed}
        />
      </TouchableOpacity>
      <View style={[styles.row]}>
        <Entypo
          name={isCompleted ? "check" : "circle"}
          size={24}
          color={isCompleted ? theme.colorGray : theme.colorCerulean}
        />
        <Text
          style={[
            styles.itemText,
            isCompleted ? styles.completedText : undefined,
          ]}
        >
          {name}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderBottomColor: theme.colorCerulean,
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row-reverse",
  },

  itemText: { fontSize: 18, fontWeight: "200", marginLeft: 8, flex: 1 },

  completedContainer: {
    backgroundColor: theme.colorLightGray,
    borderBottomColor: theme.colorLightGray,
  },

  completedText: {
    color: theme.colorGray,
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGray,
  },
});
