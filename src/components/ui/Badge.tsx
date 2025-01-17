
import colors from "@/src/styles/colors";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import sv, { VariantProps } from "style-variants";

// Define badge variants using style-variants
const badgeVariants = sv({
  base: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: colors.light.secondary,
      },
      secondary: {
        backgroundColor: colors.light.neutral,
      },
      destructive: {
        backgroundColor: colors.light.error[300],
      },
      success: {
        backgroundColor: colors.dark.success[900],
      },
      warning: {
        backgroundColor: colors.light.warning[300],
      },
      OutToDelivery:{
        backgroundColor: colors.dark.success[300],
      }
      ,none:{}
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});


const textVariants = sv({
  base: {
    fontWeight: "500",
    textAlign: "center",
  },
  variants: {
    variant: {
      primary: {
        color: colors.dark.black,
      },
      secondary: {
        color: colors.light.black,
      },
      destructive: {
        color: colors.light.black[900],
      },
      success: {
        color: colors.light.secondary,
      },
      warning: {
        color: colors.light.black[900],
      },
      OutToDelivery:{
        color: colors.dark.black,
      },none:{}
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

// Define prop types
type BadgeVariantProps = VariantProps<typeof badgeVariants>;
type BadgeProps = BadgeVariantProps & 
  React.ComponentProps<typeof View> & {
    textStyle?: TextStyle;
    children: React.ReactNode | string;
    icon?: boolean;
    iconSize?: number; 
    style?: ViewStyle;
  };

// Badge component
const Badge = ({
  children,
  variant,
  textStyle,
  icon,
  iconSize = 12, // Default size for the icon
  style,
}: BadgeProps) => {
  const badgeStyle = badgeVariants({ variant, style });
  const textStyleVariant = textVariants({ variant, style: textStyle });

  return (
    <View style={[badgeStyle, style]}>
      {icon && (
        <FontAwesome
          name="circle"
          size={iconSize}
          //@ts-ignore
          color={textStyleVariant?.color}
          style={styles.icon}
        />
      )}
      <Text style={textStyleVariant}>
        {children}
      </Text>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  icon: {
    marginRight: 4, // Space between icon and text
  },
});

export default Badge;
