import * as React from "react";
import { Text } from "react-native";
import clsx from "clsx";
import { NativeWindStyleSheet } from "nativewind";

const TypographyVariant = [
  "j1",
  "j2",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "s1",
  "s2",
  "s3",
  "s4",
  "b1",
  "b2",
  "b3",
  "c1",
  "c2",
  "l1",
  "l2",
  "label",
  "subText",
  "titleHeader",
] as const;

const TypographyColor = [
  "primary",
  "secondary",
  "tertiary",
  "danger",
  "white",
] as const;

type TypographyProps<T extends React.ElementType> = {
  as?: T;
  classNames?: string;
  color?: (typeof TypographyColor)[number];
  variant?: (typeof TypographyVariant)[number];
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

type TypographyComponent = <T extends React.ElementType = "p">(
  props: TypographyProps<T>
) => React.ReactElement | null;

type TypographyStyles = {
  [key in (typeof TypographyVariant)[number]]: any;
};

type ColorStyles = {
  [key in (typeof TypographyColor)[number]]: any;
};

const styles: TypographyStyles & ColorStyles = {
  subText: {
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "Poppins_400Regular",
    lineHeight: 28,
  },
  titleHeader: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Poppins_600SemiBold",
  },
  j1: { fontSize: 36, fontWeight: "700", fontFamily: "Poppins_700Bold" },
  j2: { fontSize: 30, fontWeight: "700", fontFamily: "Poppins_700Bold" },
  h1: { fontSize: 24, fontWeight: "600", fontFamily: "Poppins_600SemiBold" },
  h2: { fontSize: 20, fontWeight: "600", fontFamily: "Poppins_600SemiBold" },
  h3: { fontSize: 18, fontWeight: "600", fontFamily: "Poppins_600SemiBold" },
  h4: { fontSize: 16, fontWeight: "700", fontFamily: "Poppins_700Bold" },
  h5: { fontSize: 16, fontWeight: "600", fontFamily: "Poppins_600SemiBold" },
  h6: { fontSize: 14, fontWeight: "600", fontFamily: "Poppins_600SemiBold" },
  s1: { fontSize: 18, fontWeight: "500", fontFamily: "Poppins_500Medium" },
  s2: { fontSize: 16, fontWeight: "500", fontFamily: "Poppins_500Medium" },
  s3: { fontSize: 14, fontWeight: "500", fontFamily: "Poppins_500Medium" },
  s4: { fontSize: 12, fontWeight: "500", fontFamily: "Poppins_500Medium" },
  b1: { fontSize: 18, fontWeight: "400", fontFamily: "Poppins_400Regular" },
  b2: { fontSize: 16, fontWeight: "400", fontFamily: "Poppins_400Regular" },
  b3: { fontSize: 14, fontWeight: "400", fontFamily: "Poppins_400Regular" },
  c1: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Poppins_400Regular",
    fontWeight: "400",
  },
  c2: {
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 14,
    fontFamily: "Poppins_400Regular",
  },
  primary: { color: "black" },
  l1: { fontSize: 16, fontWeight: "600" },
  l2: { fontSize: 14, fontWeight: "600" },
  secondary: { color: "gray-700" },
  tertiary: { color: "gray-500" },
  danger: { color: "red-500" },
  white: { color: "white" },
  label: {
    fontSize: 12, // Equivalent to text-xs
    fontWeight: "600", // Equivalent to font-semibold
    lineHeight: 14.4, // Equivalent to leading-[14.40px]
  },
};

const Typography: TypographyComponent = ({
  as,
  children,
  classNames,
  color = "secondary",
  variant = "b2",
  ...rest
}: TypographyProps<any>) => {
  return (
    <Text
      {...rest}
      className={clsx(classNames)}
      style={[styles[variant], styles[color]]}
    >
      {children}
    </Text>
  );
};

export default Typography;
