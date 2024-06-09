import { StyleSheet } from "react-native";

const baseStyles = {
  input: {
    flex: 1,
    minHeight: 40, // min-h-[2.25rem]
    paddingVertical: 0, // py-0
    borderRadius: 8, // rounded-lg
    shadowOpacity: 0.2, // shadow-sm
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 1 },
  },
  disabled: {
    backgroundColor: "#f9fafb", // bg-gray-50
  },
  readOnly: {
    backgroundColor: "#f3f4f6", // bg-gray-200
  },
  iconPaddingLeft: {
    paddingLeft: 36, // pl-9
  },
  rightNodePaddingRight: {
    paddingRight: 40, // pr-10
  },
};

const variantStyles = {
  outline: {
    borderWidth: 1,
    borderColor: "#d1d5db", // border-gray-300
  },
  solid: {
    borderWidth: 1,
    borderColor: "transparent",
  },
  underlined: {
    borderBottomWidth: 2,
    borderColor: "#d1d5db", // border-gray-300
  },
};

const colorStyles = {
  outline: {
    emerald: { borderColor: "#d1fae5", shadowColor: "#d1fae5" },
    sky: { borderColor: "#0284c7", shadowColor: "#0284c7" },
    pink: { borderColor: "#ec4899", shadowColor: "#ec4899" },
    green: { borderColor: "#10b981", shadowColor: "#10b981" },
    yellow: { borderColor: "#f59e0b", shadowColor: "#f59e0b" },
    red: { borderColor: "#ef4444", shadowColor: "#ef4444" },
    purple: { borderColor: "#8b5cf6", shadowColor: "#8b5cf6" },
    blue: { borderColor: "#3b82f6", shadowColor: "#3b82f6" },
    indigo: { borderColor: "#6366f1", shadowColor: "#6366f1" },
    gray: { borderColor: "#9ca3af", shadowColor: "#9ca3af" },
    cyan: { borderColor: "#cffafe", shadowColor: "#cffafe" },
  },
  solid: {
    sky: { backgroundColor: "#e0f2fe" },
    pink: { backgroundColor: "#fce7f3" },
    green: { backgroundColor: "#d1fae5" },
    yellow: { backgroundColor: "#fef3c7" },
    red: { backgroundColor: "#fee2e2" },
    purple: { backgroundColor: "#ede9fe" },
    blue: { backgroundColor: "#dbeafe" },
    indigo: { backgroundColor: "#e0e7ff" },
    cyan: { backgroundColor: "#cffafe" },
    emerald: { backgroundColor: "#d1fae5" },
    gray: { backgroundColor: "#f9fafb" },
  },
  underlined: {
    emerald: { backgroundColor: "#d1fae5" },
    sky: { borderBottomColor: "#0284c7" },
    pink: { borderBottomColor: "#ec4899" },
    green: { borderBottomColor: "#10b981" },
    yellow: { borderBottomColor: "#f59e0b" },
    red: { borderBottomColor: "#ef4444" },
    purple: { borderBottomColor: "#8b5cf6" },
    blue: { borderBottomColor: "#3b82f6" },
    indigo: { borderBottomColor: "#6366f1" },
    gray: { borderBottomColor: "#9ca3af" },
    cyan: { borderBottomColor: "#06b6d4" },
  },
};

export { baseStyles, variantStyles, colorStyles };
