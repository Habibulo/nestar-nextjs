import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { light } from "../scss/MaterialTheme";
import { useState } from "react";
import "../scss/app.scss";
export default function App({ Component, pageProps }: AppProps) {
  console.log("App");
  // @ts-ignore
  const [theme, setTheme] = useState(createTheme(light));

  // Socket.oi
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
