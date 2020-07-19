// To be able to import svg in .ts file :
// https://webpack.js.org/guides/typescript/#importing-other-assets

declare module '*.svg' {
  const content: any;
  export default content;
}
