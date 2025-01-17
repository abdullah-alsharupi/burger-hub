import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  hiddenContainer: {
    backgroundColor: "white",
    alignItems: "flex-end",
    justifyContent: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
  },
  paypalContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  paypalPlaceholder: {
    fontSize: 24,
    marginRight: 10,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  type: {
    fontSize: 18,
    fontWeight: "600",
  },
  lastFour: {
    fontSize: 16,
    color: "#888",
  },
  deleteIcon: {
    backgroundColor: "transparent",
    padding: 20,
  },
  icon: {
    height: 40,
    width: 70,
  },
});

export default styles;
