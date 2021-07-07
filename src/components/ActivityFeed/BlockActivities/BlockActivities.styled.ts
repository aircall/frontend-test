import { default as styled } from "../../../StyledComponents";

export const StyledWrapper = styled.div`
  margin: 10px 0;
`;

export const StyledDateDay = styled.h1`
  overflow: hidden;
  text-align: center;
  line-height: 1.2em;
  margin: 10px 0;
  :before {
    content: "";
    vertical-align: middle;
    display: inline-block;
    width: 50%;
    border-bottom: 1px dashed #ccc;
    margin: 0 2% 0 -55%;
  }
  :after {
    content: "";
    vertical-align: middle;
    display: inline-block;
    width: 50%;
    border-bottom: 1px dashed #ccc;
    margin: 0 -55% 0 2%;
  }
`;
