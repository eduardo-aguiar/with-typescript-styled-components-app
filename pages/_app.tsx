import { AppProps } from "next/app";
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from "styled-components";

export const theme: DefaultTheme = {
  borderRadius: "10px",

  colors: {
    primary: "black",
    secondary: "gray",
  },
};

const GlobalStyle = createGlobalStyle`html{
    box-sizing: border-box;
    background-color: #222121;
    display: "block";
    height: 100%;
    max-width: 720px;
    color: white;
    margin: 0 auto;
    padding: 0;
}`;

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
