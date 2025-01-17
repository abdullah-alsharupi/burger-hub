import { Linking, Platform } from "react-native";
import { Row } from "../services/supabase/table.types";
import { addresses } from "../types/schema/address";


/**
 * Formats an address object into a string.
 * @param {Address} addressObj - The address object to format.
 * @returns {string} - The formatted address string.
 */
export function formatAddress(addressObj:addresses): string {
  const { city, state, zip_code, country,street = "US" } = addressObj;

  const addressParts = [,city, state, zip_code, country,street]
    .map((part) => part?.trim()) // Remove leading/trailing whitespace
    .filter(Boolean); // Remove empty strings

  return addressParts.join(", ") || "Address not provided";
}

/**
 * Opens the default mapping application with directions to the specified address.
 * @param {string} address - The address to get directions for.
 * @returns {Promise<void>}
 */
export const getDirections = async (address: string): Promise<void> => {
  if (!address) {
    console.warn("Address cannot be empty.");
    return;
  }

  const encodedAddress = encodeURIComponent(address); // Encode for URL
  const url = Platform.select({
    ios: `maps:0,0?q=${encodedAddress}`,
    android: `geo:0,0?q=${encodedAddress}`,
  });

  if (url) {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error("Failed to open the URL:", error);
    }
  } else {
    console.warn("No valid URL generated for the address.");
  }
};