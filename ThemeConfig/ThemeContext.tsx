import React, {createContext, useContext} from 'react';

export const ThemeContext = createContext<any>(null);

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const themes = {
    Base: {
      Primary: '#1F2B32',
      Secondary: '#4A5962',
      Tertiary: '6F7F88',
    },
    PrimaryActions: {
      Lite: '#C9DAF8',
      Main: '#4274CF',
      Dark: '#345A9F',
    },
    BackgroundColors: {
      Weak: '#FFFFFF',
      Medium: '#EFF5F9',
      Strong: '#E0EBF3',
      Dark: '#DFEAF3',
    },
    Charts: {
      Chart1: '#4B96C1',
      Chart2: '#6CC6D4',
      Chart3: '#E0EBF3',
      Chart4: '#E0EBF3',
    },
    colors: {
      basePrimary: '#252B41',
      baseSecondary: '#666B7A',
      primaryActionMain: '#4274CF',
      bgLite: '#FFFFFF',
      bgMedium: '#EFF5F9',
    },
    typography: {
      fontFamily: 'Poppins',
      fontSizeSmall: 12,
      fontSizeMedium: 16,
      fontSizeLarge: 18,
      fontSizeExtraLarge: 30,
      fontSizeTitle: 36,
      fontSizeSuperLarge: 48,
      thin: '100',
      extraLight: '200',
      light: '300',
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
      extraBold: '800',
      black: '900',
    },
    spacing: {
      minimal: 2,
      tiny: 4,
      small: 8,
      moderate: 10,
      regular: 12,
      medium: 16,
      large: 24,
      larger: 30,
      extraLarge: 32,
      huge: 48,
    },
    borderRadii: {
      small: 8,
      medium: 16,
      large: 24,
    },
  };

  return (
    <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
