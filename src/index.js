import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const theme = {
  colors: {
    light: "#ffffff",
    black: "#121417",
    accent: "#3470FF",
    gray: "rgba(18, 20, 23, 0.5)",
    brown: "#8a8a89",
    input: "#f7f7fb",
    hover: "#0b44cd",
    before: "rgba(18, 20, 23, 0.1)",
  },

  animation: {
    cubicBezier: "0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="car-rental">
          <ThemeProvider theme={theme}>
            <App />
            <GlobalStyle />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
