import React from "react";
import "jest-styled-components";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { theme } from "../src/common/theme";

const customRender = (ui: React.ReactElement, options: RenderOptions = {}) => {
  const AllTheProviders = ({ children }: { children?: React.ReactNode }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
