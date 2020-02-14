import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  primaryColor: string;
  lightGrey: string;
}

export const theme = {
  primaryColor: "#e9e9eb",
  lightGrey: "fbfbfb"
};

export default styled;
export { css, keyframes, ThemeProvider };
