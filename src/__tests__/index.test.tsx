import React from "react";
import ReactDOM from "react-dom";

import { App } from "../app";

describe("root", () => {
  it("should bootstrap the application", () => {
    const renderSpy = jest
      .spyOn(ReactDOM, "render")
      .mockImplementation(() => {});

    const appElement = document.createElement("div");
    appElement.id = "app";
    document.body.appendChild(appElement);

    jest.requireActual("..");

    expect(renderSpy).toHaveBeenCalledWith(<App />, appElement);
  });
});
