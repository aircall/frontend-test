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
  white: string;
  dark: string;
  airCallColor: string;
  darkAirCall: string;
}

export const theme = {
  primaryColor: "#e9e9eb",
  lightGrey: "#fbfbfb",
  dark: "#111",
  white: "#fff",
  airCallColor: "#2AC420",
  darkAirCall: "#424242"
};

export default styled;
export { css, keyframes, ThemeProvider };
