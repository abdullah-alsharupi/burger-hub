import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import NoOrder from "./NoOrder";
import { useGetAllOrders } from "@/src/queries/order/useGetAllOrders";
import { useSessionStore } from "@/src/store/useSessionStore";
import Card from "../ui/card/Card";
import { formatAddress } from "@/src/util/addressFormat";
import { formatDate, formatDateTime } from "@/src/util/DateFormat";
import { OrderWithAddress } from "@/src/queries/order/useGetAllOrders";
import Header from "../ui/Header";
import { useFocusEffect } from "expo-router";
import { useOrderStore } from "@/src/store/oder/useOrderStore";
import OrderCard from "../ui/OrderCard";
const { height, width } = Dimensions.get("screen");

export default function OrderHistoryScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const { session } = useSessionStore();
  const userId = session?.id;
  const { error, isLoading, refetch } = useGetAllOrders(userId as string);
  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [refetch])
  );
  const order = useOrderStore().globalOrders;
  if (isLoading) {
    return (
      <ActivityIndicator
        size={"large"}
        color={"#AF042C"}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      ></ActivityIndicator>
    );
  }

  if (error) {
    return <Text>Error loading orders</Text>;
  }

  if (!order || order.length === 0) {
    return <NoOrder />;
  }
  const OnRefreshing = () => {
    setRefreshing(true);
    setTimeout(() => {
      refetch();
    }, 3000);
    setRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={OnRefreshing} />
      }
    >
      <View style={{ width: width, flex: 1, alignItems: "center" }}>
        {order.map((order) => (
          <OrderCard key={order.id} height={147} width={331} id={order.id}>
            <View style={styles.container}>
              <View>
                <Text style={styles.orderText}>
                  $ {order.totalamount ?? "No totalAmount"}
                </Text>
                <Text style={styles.orderText}>
                  {order.totalquantity ?? "No totalQuantity"} items
                </Text>
              </View>

              <View>
                {order.order_type == "delivery" ? (
                  <View style={styles.orderDetails}>
                    <Text style={styles.orderText}>
                      {" "}
                      {order.created_at
                        ? formatDate(new Date(order.created_at))
                        : "Delivery date not available"}{" "}
                    </Text>
                    <Text style={styles.orderText}>Delivered to</Text>
                    <Text style={styles.address}>
                      {formatAddress({ ...order.Addresses })}
                    </Text>
                  </View>
                ) : (
                  <View style={styles.orderDetails}>
                    <Text style={styles.orderText}>
                      {" "}
                      {order.created_at
                        ? formatDate(new Date(order.created_at))
                        : "no date"}{" "}
                    </Text>
                    <Text style={styles.orderText}>Pick up at</Text>
                    <Text style={styles.address}>
                      {formatDateTime(new Date(order.created_at||""))}
                    </Text>
                  </View>
                )}
              </View>
            </View>
            <View>
              <Text></Text>
            </View>
          </OrderCard>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    display: "flex",
    justifyContent: "space-around",
    padding: 10,
  },
  address: {
    opacity: 0.5,
    lineHeight: 19,
    color: "#000000",
    fontWeight: "400",
    fontSize: 15,
    width: 281,
  },
  orderDetails: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  orderItem: {
    marginBottom: 10,
  },
  orderText: {
    fontSize: 18,
    fontWeight: "600",
  },
});
