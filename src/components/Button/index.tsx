import { PropsWithChildren } from "react";

import "./index.css"

interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
  className?: HTMLButtonElement["className"];
}

const Button = ({ onClick, className, children }: ButtonProps) => {
  return (
    <button onClick={onClick} className={"btn " + className}>
      {children}
    </button>
  );
};

export default Button;
