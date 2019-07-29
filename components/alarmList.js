import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
class AlarmList extends React.Component {
  state = {
    data: [
      { id: "00", name: "remedio A", time: "12:00" },
      { id: "01", name: "remedio B", time: "14:00" },
      { id: "02", name: "remedio C", time: "17:00" },
      { id: "03", name: "remedio D", time: "20:00" }
    ]
  };
  render() {
    return (
        <FlatList
            data={this.state.data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.text}>{item.time}</Text>
              </View>
            );
            }}
        />
    );
  }
}
const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    backgroundColor: "#add8e6",
    flexGrow: 1,
    margin: 4,
    padding: 20
  },
  text: {
    color: "#333333"
  }
});
export default AlarmList;
