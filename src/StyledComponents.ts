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
}

export const theme = {
  primaryColor: "#e9e9eb"
};

export default styled;
export { css, keyframes, ThemeProvider };
