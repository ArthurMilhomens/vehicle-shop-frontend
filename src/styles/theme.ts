import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    orange: {
      "950": "#ff5100"
    },
    gray: {
      "50": "#ebebeb",
      "100": "#c0c0c0",
      "200": "#a1a1a1",
      "300": "#767676",
      "400": "#5c5c5c",
      "500": "#333333",
      "600": "#2e2e2e",
      "700": "#242424",
      "800": "#1c1c1c",
      "900": "#151515",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.700",
        color: "gray.50",
        overflow: "hidden"
      },
    },
  },
});
