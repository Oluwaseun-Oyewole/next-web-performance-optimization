import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren & {
    loading?: boolean;
  };

const Button = ({ children, loading, ...rest }: ButtonType) => {
  return <button {...rest}>{loading ? "Loading..." : children}</button>;
};

export default Button;
