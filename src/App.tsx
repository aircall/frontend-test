import * as React from "react";

import { Header } from "./components";

export const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">Some activities should be here</div>
    </div>
  );
};
