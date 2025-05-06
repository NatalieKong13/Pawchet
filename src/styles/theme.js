import { DefaultTheme } from "react-native-paper";

// Color palette
export const colors = {
  // Primary colors
  primary: "#4392F1", // Main brand color - blue
  primaryDark: "#2E6FC1", // Darker shade for pressed states
  primaryLight: "#80B5F7", // Lighter shade for backgrounds

  // Secondary colors
  secondary: "#B15CE3", // Secondary brand color - purple
  secondaryDark: "#8937BC", // Darker shade for pressed states
  secondaryLight: "#CF8FF0", // Lighter shade for backgrounds

  // Accent (call to action)
  accent: "#F13B6F", // Accent color - pink
  accentDark: "#CE2854", // Darker shade for pressed states
  accentLight: "#F77296", // Lighter shade for backgrounds

  // Semantic colors
  success: "#4CAF50", // Success/confirmation
  warning: "#FFC107", // Warning/caution
  error: "#F44336", // Error/danger
  info: "#2196F3", // Information

  // Neutrals
  black: "#000000",
  darkGrey: "#333333",
  grey: "#757575",
  lightGrey: "#E0E0E0",
  background: "#FFFFFF",
  surface: "#F9F9F9",

  // Text colors
  textPrimary: "#212121",
  textSecondary: "#757575",
  textDisabled: "#9E9E9E",
  textInverted: "#FFFFFF",

  // Utility
  divider: "#EEEEEE",
  disabled: "#BDBDBD",
  placeholder: "#9E9E9E",
  backdrop: "rgba(0, 0, 0, 0.5)",
  shadow: "rgba(0, 0, 0, 0.1)",
  overlay: "rgba(0, 0, 0, 0.2)",
};

// Spacing system
export const spacing = {
  xs: 4, // Extra small spacing
  sm: 8, // Small spacing
  md: 16, // Medium spacing (base)
  lg: 24, // Large spacing
  xl: 32, // Extra large spacing
  xxl: 48, // Double extra large spacing
};

// Typography
export const typography = {
  // Font families - update these with your chosen fonts
  fontFamily: {
    regular: "System",
    medium: "System",
    bold: "System",
    // When you add custom fonts, update these values
    // regular: 'Montserrat-Regular',
    // medium: 'Montserrat-Medium',
    // bold: 'Montserrat-Bold',
  },

  // Font sizes
  fontSize: {
    caption: 12, // Smallest text
    body: 14, // Regular text
    subheading: 16, // Subheadings
    title: 20, // Screen titles
    heading: 24, // Major section headings
    display: 34, // Large display text
  },

  // Font weights
  fontWeight: {
    regular: "400",
    medium: "500",
    bold: "700",
  },

  // Line heights
  lineHeight: {
    tight: 1.2, // Headings
    normal: 1.5, // Body text
    loose: 1.8, // Readable paragraphs
  },
};

// Border radius
export const borderRadius = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  circle: 9999,
};

// Shadows
export const shadows = {
  small: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  medium: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  large: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
};

// Animation timing
export const animation = {
  short: 150,
  medium: 300,
  long: 450,
};

// Export the theme object for React Native Paper
export const theme = {
  ...DefaultTheme,
  dark: false,
  roundness: borderRadius.md,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.accent,
    background: colors.background,
    surface: colors.surface,
    text: colors.textPrimary,
    error: colors.error,
    disabled: colors.disabled,
    placeholder: colors.placeholder,
    backdrop: colors.backdrop,
    notification: colors.accent,
    // Add any additional color properties used by React Native Paper
  },
  animation: {
    scale: 1.0,
  },
  // Add custom theme properties that you can access in your components
  spacing,
  typography,
  borderRadius,
  shadows,
};

// Helper functions for applying theme styles consistently
export const getSpacing = (multiplier = 1) => spacing.md * multiplier;

export const getStyle = (styleName, variant = "md") => {
  if (styleName === "spacing") return spacing[variant];
  if (styleName === "fontSize") return typography.fontSize[variant];
  if (styleName === "borderRadius") return borderRadius[variant];
  return null;
};

export default theme;
