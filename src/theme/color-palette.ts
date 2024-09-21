interface ColorPalette {
  typography: {
    primary: string;
    secondary: string;
    hint: string;
  },
  surface: {
    primary: string;
    secondary: string;
    accent: string;
  },
  tab: {
    active: string;
  }
}

const colorPalette = {
  typography: {
    primary: "#d9d9d9",
    secondary: "#ffffff",
    hint: "#3f51b5",
  },
  surface: {
    primary: "#0d0d0d",
    secondary: "#262626",
    accent: "#82b1ff",
  },
  tab: {
    active: "#3f51b5",
  }
} as ColorPalette;

// font colors
export const fontColor = colorPalette.typography.primary;
export const fontActiveColor = colorPalette.typography.secondary;
export const fontHintColor = colorPalette.typography.hint;

// surface colors
export const surfacePrimary = colorPalette.surface.primary;
export const surfaceSecondary = colorPalette.surface.secondary;
export const surfaceAccent = colorPalette.surface.accent;

export const tabActiveColor = colorPalette.tab.active;