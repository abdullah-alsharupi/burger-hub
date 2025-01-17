import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import NoOrder from "./NoOrder";
import { useGetOrderById } from "@/src/queries/order/useGetOrderById";
import { useSessionStore } from "@/src/store/useSessionStore";
import Badge from "../ui/Badge";
import { formatAddress } from "@/src/util/addressFormat";
import { formatDate, formatDateTime } from "@/src/util/DateFormat";
import { formatStatus } from "@/src/util/FormatStatus";
import { useFocusEffect, useLocalSearchParams } from "expo-router";

const { width } = Dimensions.get("screen");

export default function OrderDetails() {
  const { id } = useLocalSearchParams();
  const {
    data: order,
    error,
    isLoading,
    refetch,
  } = useGetOrderById(id as unknown as number);
  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [refetch])
  );

  if (isLoading) {
    return (
      <ActivityIndicator
        size={"large"}
        color={"#AF042C"}
        style={styles.loadingIndicator}
      />
    );
  }

  if (error) {
    return (
      <Text style={styles.errorText}>
        Error loading orders: {error.message}
      </Text>
    );
  }

  const getBadgeVariant = (status: any) => {
    switch (status) {
      case "pending":
        return "warning";
      case "confirmed":
        return "primary";
      case "preparing":
        return "secondary";
      case "out for delivery":
        return "OutToDelivery";
      case "received":
        return "success";
      case "reject":
        return "destructive";
      default:
        return "none";
    }
  };
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
    >
      {order?.map((order) => (
        <View key={order.id} style={styles.card}>
          <View style={styles.container}>
            <View style={styles.badgeContainer}>
              {order.status !== null ? (
                <Badge variant={getBadgeVariant(order.status)}>
                  <Text>{formatStatus(order.status) || "Unknown Status"}</Text>
                </Badge>
              ) : (
                <Badge variant="none">
                  <Text>Unknown Status</Text>
                </Badge>
              )}
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={styles.orderText}>
                  ${order.totalamount ?? "Not found: totalAmount"}
                </Text>
                <Text style={styles.orderText}>
                  {order
                    ? formatDate(new Date(order.created_at ||""))
                    : "Delivery date not available"}
                </Text>
              </View>
              <View>
                <Text style={styles.orderText}>
                  {order.totalquantity ?? "Not found: totalQuantity"} items
                </Text>
                {order.Products?.length > 0 ? (
                  order.Products.map((product, index) => (
                    <Text key={product.id} style={styles.productText}>
                      {`${index + 1}.${product.name} (${product.quantity})`}
                    </Text>
                  ))
                ) : (
                  <Text>No products found</Text>
                )}
              </View>
            </View>
          </View>
          <View style={styles.orderDetails}>
            {order.order_type === "delivery" ? (
              <>
                <Text style={styles.orderText}>Delivered to</Text>
                <Text style={styles.address}>
                  {formatAddress({ ...order.Addresses })}
                </Text>
              </>
            ) : (
              <>
                <Text style={styles.orderText}>
                  {order.created_at
                    ? formatDate(new Date(order.created_at))
                    : "Pickup date not available"}
                </Text>
                <Text style={styles.orderText}>Pick up at</Text>
                <Text style={styles.address}>
                  {formatDateTime(new Date(order.created_at ||""))}
                </Text>
              </>
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    textAlign: "center",
    color: "red",
    margin: 20,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 20,
  },
  card: {
    width: width * 0.9,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 15,
  },
  container: {
    // flexDirection: "column",
    // justifyContent: "flex-start",
    marginBottom: 10,
  },
  badgeContainer: {
    marginBottom: 10,
  },
  address: {
    opacity: 0.7,
    color: "#333",
    fontWeight: "400",
    fontSize: 14,
  },
  orderDetails: {
    flexDirection: "column",
    marginTop: 10,
  },
  orderText: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 5,
  },
  productText: {
    fontSize: 14,
    color: "#555",
  },
});
