import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { GlobalStyles, theme } from "./styles/index.ts";
import { ThemeProvider } from "styled-components";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
);
