import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from "./components/header";
import { theme } from "../common/theme";
import { GlobalStyles } from "./components/global-styles";
import { Main, Container, View } from "./styled-components";
import { ActivityFeed } from "../activity-feed";
import { ActivityDetail } from "../activity-detail";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Main>
          <Container>
            <Header />
            <View>
              <Switch>
                <Route exact path="/" component={ActivityFeed} />
                <Route exact path="/activities/:id" component={ActivityDetail} />
              </Switch>
            </View>
          </Container>
        </Main>
      </Router>
    </ThemeProvider>
  );
}
