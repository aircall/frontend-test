import React from "react";
import Header from "./Header";
import styled, { createGlobalStyle } from "styled-components";

const Container = styled.div`
  width: 376px;
  height: 666px;
  z-index: 100;

  background: white;
  border-radius: 3px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.9);
`;

const GlobalStyle = createGlobalStyle`
  html,
  body,
  h1,
  h2,
  h3,
  ul,
  li {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
  }

  body {
    background: #233142;
    font-family: helvetica, arial, sans-serif;
    font-size: 13px;
    color: #333333;
    line-height: 1;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const ActivityFeed = React.lazy(() => import("./Activity/ActivityFeed"));

// React.Suspense will display fallback until both:
// 1. ActivityFeed's import is downloaded (React.lazy)
// 2. ActivityFeed's activities API data is downloaded (activityResources.read)
// fallback would usually be a spinner

// Sadly, the rest of the React.Suspense API doesn't look ready yet:
// React.Suspense max-duration, React.Timeout, react unstable async mode
export default () => (
  <React.Suspense fallback={<></>}>
    <Wrapper>
      <GlobalStyle />
      <Container>
        <Header />
        <ActivityFeed />
      </Container>
    </Wrapper>
  </React.Suspense>
);
