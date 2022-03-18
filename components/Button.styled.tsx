import styled from "styled-components";

export interface IButton {
  variant?: "primary" | "secondary";
  size?: "large";
}

export const Button = styled.button.attrs<Pick<IButton, "size">>((props) => {
  size: props?.size;
})<IButton>`
  background: ${(props) =>
    props?.variant === "primary"
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  border-radius: 999px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  padding: ${(props) => (props?.size === "large" ? "18px 28px" : "8px 18px")};
  width: fit-content;
  box-sizing: border-box;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  word-break: break-word;
  border: 0;
  margin: 0.3rem;

  &:hover {
    background: gray;
  }
`;

export const FacebookButton = styled(Button)`
  background: lightblue;
  color: white;
`;
