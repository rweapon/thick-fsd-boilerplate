import { Button } from "react-aria-components";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  classNames?: string;
  onPress?: () => void;
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
};
export default function ButtonC({
  children,
  classNames = "",
  ...props
}: Props) {
  return (
    <Button
      className={`text-2xl p-4 border border-black border-solid rounded hover:bg-gray-600 hover:text-white active:opacity-70 duration-200 ${classNames}`}
      {...props}
    >
      {children}
    </Button>
  );
}
