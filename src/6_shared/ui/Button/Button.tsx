import { Button } from "react-aria-components";
import styles from "./Button.module.css";
import { classLister } from "@shared/helpers";

type ButtonProps = {
  classNames: string[];
  children: string | JSX.Element | JSX.Element[];
};
export default function ButtonC({
  classNames,
  children,
  ...props
}: ButtonProps) {
  const classes = classLister(styles);

  return (
    <Button className={classes("button", ...classNames)} {...props}>
      {children}
    </Button>
  );
}
