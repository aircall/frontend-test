import React from "react";
import "jest-styled-components";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";

import { theme } from "../src/common/theme";

type Options = RenderOptions & {
  pathName?: string;
};

const customRender = (
  ui: React.ReactElement,
  { pathName, ...options }: Options = {}
) => {
  const AllTheProviders = ({ children }: { children?: React.ReactNode }) => {
    return (
      <ThemeProvider theme={theme}>
        <MemoryRouter
          initialEntries={[{ pathname: pathName || "/", key: "testKey" }]}
          initialIndex={0}
        >
          {children}
        </MemoryRouter>
      </ThemeProvider>
    );
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
