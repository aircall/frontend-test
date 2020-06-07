import React from "react";
import { ThemeProvider } from "styled-components";

import { Header } from "./components/header";
import { theme } from "../common/theme";
import { GlobalStyles } from "./components/global-styles";
import { Main, Container, View } from "./styled-components";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main>
        <Container>
          <Header />
          <View> Some activities should be here</View>
        </Container>
      </Main>
    </ThemeProvider>
  );
}
