import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { theme } from "../../theme";
import { format } from "date-fns";
import { getFromStorage } from "../../utils/storage";
import { countdownStorageKey } from ".";

const fullDateFormat = `LLL d yyyy, h:mm aaa`;

export default function HistoryScreen() {
  const [countdownState, setCountdownState] = useState();

  useEffect(() => {
    const load = async () => {
      const data = await getFromStorage(countdownStorageKey);
      setCountdownState(data);
    };
    load();
  }, []);

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
      data={countdownState?.completedAtTimestamps}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <Text>{format(item, fullDateFormat)}</Text>
        </View>
      )}
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text>Your shopping list item is empty</Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },

  contentContainer: {
    marginTop: 8,
  },

  listEmptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
  },

  listItem: {
    marginHorizontal: 8,
    marginBottom: 8,
    alignItems: "center",
    backgroundColor: theme.colorLightGray,
    padding: 12,
    borderRadius: 6,
  },

  ListItemText: {
    fontSize: 18,
  },
});
