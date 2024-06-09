import clsx from "clsx";
import * as React from "react";
// import { IconType } from "react-icons";

import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  Text,
  ViewStyle,
} from "react-native";
import Typography from "./Typography";
import { colorStyles, variantStyles } from "./StyleForm";

export type InputProps = {
  /** Input label */
  label: string | null;
  /**
   * id to be initialized with React Hook Form,
   * must be the same with the pre-defined types.
   */
  id: string;
  /** Input placeholder */
  placeholder?: string;
  /** Small text below input, useful for additional information */
  helperText?: string;
  /**
   * Input type
   * @example text, email, password
   */
  type?: React.HTMLInputTypeAttribute;
  color?:
    | "sky"
    | "pink"
    | "green"
    | "yellow"
    | "red"
    | "purple"
    | "blue"
    | "indigo"
    | "cyan"
    | "emerald"
    | "gray";

  readOnly?: boolean;
  /** Disable error style (not disabling error validation) */
  hideError?: boolean;
  /** Manual validation using RHF, it is encouraged to use yup resolver instead */
  leftIcon?: React.ReactNode | string;
  rightNode?: React.ReactNode;
  containerClassName?: string;
  errorMessage?: string;
  variant?: "outline" | "solid" | "underlined";
  disabled?: boolean; // Add the 'disabled' property
} & TextInputProps;

export default function Input({
  label,
  placeholder = "",
  helperText,
  id,
  type = "text",
  disabled,
  readOnly = false,
  hideError = false,
  leftIcon: LeftIcon,
  rightNode,
  containerClassName,
  errorMessage,
  color = "sky",
  variant = "outline",
  ...rest
}: InputProps) {
  const withLabel = label !== null;

  const getVariantStyles = () => {
    return variantStyles[variant];
  };

  const getColorStyles = () => {
    return colorStyles[variant][color];
  };

  return (
    <View className={containerClassName}>
      {withLabel && (
        <Typography as='label' variant='s3' className='block' htmlFor={id}>
          {label}
        </Typography>
      )}
      <View
        className='mt-2 w-full relative'
        style={[
          styles.inputContainer,
          getVariantStyles(),
          getColorStyles(),
          readOnly ? (styles.iconPaddingLeft as ViewStyle) : undefined,
          LeftIcon ? (styles.iconPaddingLeft as ViewStyle) : undefined,
          rightNode ? (styles.rightNodePaddingRight as ViewStyle) : undefined,
        ]}
      >
        {LeftIcon && (
          <View style={styles.leftIcon}>
            {typeof LeftIcon === "string" ? (
              <Text style={styles.leftIcon}>{LeftIcon}</Text>
            ) : (
              LeftIcon
            )}
          </View>
        )}
        <TextInput
          {...rest}
          secureTextEntry={type === "password"}
          style={[styles.input, disabled && styles.disabled]}
          readOnly={readOnly}
          placeholder={placeholder}
          placeholderTextColor='#6b7280'
        />
        {rightNode && <View style={styles.rightNode}>{rightNode}</View>}
      </View>
      {helperText && (
        <Typography variant='c1' color='secondary' className='mt-1'>
          {helperText}
        </Typography>
      )}
      {!hideError && errorMessage && (
        <Typography variant='c1' color='danger' className='mt-1'>
          {errorMessage}
        </Typography>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4b5563",
  },
  inputContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 1,
  },
  input: {
    height: 40,
    flex: 1,
    minHeight: 40,
    fontSize: 14,
    color: "#111827",
  },
  disabled: {
    backgroundColor: "#f3f4f6",
    color: "#9ca3af",
  },
  readOnly: {
    backgroundColor: "#f9fafb",
  },
  iconPaddingLeft: {
    paddingLeft: 36,
  },
  rightNodePaddingRight: {
    paddingRight: 40,
  },
  leftIcon: {
    position: "absolute",
    left: 8,
  },
  leftIconText: {
    fontSize: 16,
    color: "#6b7280",
  },
  rightNode: {
    position: "absolute",
    right: 8,
  },
  helperText: {
    marginTop: 4,
    fontSize: 12,
    color: "#6b7280",
  },
  errorText: {
    marginTop: 4,
    fontSize: 12,
    color: "#dc2626",
  },
});
