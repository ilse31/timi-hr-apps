import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacityProps,
  GestureResponderEvent,
} from "react-native";
// import { IconType } from "react-icons";
// import { ImSpinner2 } from "react-icons/im"; // Replace with an equivalent icon for React Native

const ButtonVariant = [
  "primary",
  "secondary",
  "danger",
  "outline",
  "ghost",
  "warning",
  "sky",
  "rose",
  "pink",
  "purple",
  "violet",
  "indigo",
  "cyan",
] as const;

const ButtonSize = ["sm", "base", "lg"] as const;

type ButtonProps = {
  isLoading?: boolean;
  variant?: (typeof ButtonVariant)[number];
  size?: (typeof ButtonSize)[number];
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & TouchableOpacityProps;

const Button = React.forwardRef<TouchableOpacity, ButtonProps>(
  (
    {
      children,
      isLoading,
      variant = "primary",
      size = "base",
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      leftIconClassName,
      rightIconClassName,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || rest.disabled;

    return (
      <TouchableOpacity
        className='py-3 text-sm font-semibold'
        ref={ref as React.RefObject<TouchableOpacity>}
        disabled={disabled}
        style={[
          styles.button,
          styles[size],
          variantStyles[variant],
          disabled && styles.disabled,
          isLoading && styles.loading,
        ]}
        {...rest}
      >
        {isLoading && (
          <View style={styles.loadingIndicator}>
            <ActivityIndicator
              size='small'
              color={
                variant === "outline" || variant === "ghost"
                  ? "primary"
                  : "white"
              }
            />
          </View>
        )}
        {LeftIcon && (
          <View style={styles.iconWrapper}>
            {/* <LeftIcon style={[styles.icon, leftIconClassName]} /> */}
            {LeftIcon}
          </View>
        )}
        <Text className='font-semibold text-sm' style={styles.text}>
          {children}
        </Text>
        {RightIcon && (
          <View style={styles.iconWrapper}>
            {/* <RightIcon style={[styles.icon, rightIconClassName]} /> */}
            {RightIcon}
          </View>
        )}
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  sm: {
    minHeight: 28,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  base: {
    minHeight: 36,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  lg: {
    minHeight: 44,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  disabled: {
    backgroundColor: "#e0e0e0",
    borderColor: "#e0e0e0",
  },
  loading: {
    position: "relative",
  },
  loadingIndicator: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -10,
    marginLeft: -10,
  },
  iconWrapper: {
    marginRight: 8,
  },
  icon: {
    fontSize: 16,
  },
  text: {
    color: "#fff",
    textTransform: "capitalize",
  },
});

const variantStyles = StyleSheet.create({
  primary: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
  secondary: {
    backgroundColor: "#6c757d",
    borderColor: "#6c757d",
  },
  danger: {
    backgroundColor: "#dc3545",
    borderColor: "#dc3545",
  },
  warning: {
    backgroundColor: "#ffc107",
    borderColor: "#ffc107",
  },
  outline: {
    backgroundColor: "transparent",
    borderColor: "#6c757d",
  },
  ghost: {
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  sky: {
    backgroundColor: "#0dcaf0",
    borderColor: "#0dcaf0",
  },
  rose: {
    backgroundColor: "#e83e8c",
    borderColor: "#e83e8c",
  },
  pink: {
    backgroundColor: "#d63384",
    borderColor: "#d63384",
  },
  purple: {
    backgroundColor: "#6f42c1",
    borderColor: "#6f42c1",
  },
  violet: {
    backgroundColor: "#6610f2",
    borderColor: "#6610f2",
  },
  indigo: {
    backgroundColor: "#6610f2",
    borderColor: "#6610f2",
  },
  cyan: {
    backgroundColor: "#17a2b8",
    borderColor: "#17a2b8",
  },
});

export default Button;
