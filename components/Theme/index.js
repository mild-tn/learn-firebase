import React from 'react';
import { ThemeProvider } from 'emotion-theming';

const REBOOT_FONT_FAMILY = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';`;
const fontSizes = [12, 14, 16, 18, 20, 24, 28, 36, 48, 60];

const theme = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: fontSizes,
  fonts: {
    sans: `'Rubik', 'Kanit', sans-serif, ${REBOOT_FONT_FAMILY}`,
    serif: `'Rubik', sans-serif, ${REBOOT_FONT_FAMILY}`,
  },
  colors: {
    blue: '#07c',
    lightgray: '#f6f6ff',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  variants: {},
  text: {},
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
    },
  },
};

export default theme;
