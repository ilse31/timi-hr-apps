const tintColorLight = "#3587FE";
const tintColorDark = "#fff";

const palette = {
  purple: "#5A31F4",
  green: "#0ECD9D",
  red: "#CD0E61",
  black: "#0B0B0B",
  white: "#F0F2F3",
};

export const themes = {
  colors: {
    primary: palette.purple,
    secondary: palette.green,
    error: palette.red,
    black: palette.black,
    white: palette.white,
  },
  paddingBase: 16,
};

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};
