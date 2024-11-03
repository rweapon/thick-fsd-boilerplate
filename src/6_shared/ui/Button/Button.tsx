import { Button } from "react-aria-components";

type ButtonProps = {
  children: string | JSX.Element | JSX.Element[];
};
export default function ButtonC({ children, ...props }: ButtonProps) {
  return (
    <Button
      className="text-2xl p-4 border border-black border-solid rounded hover:bg-gray-600 hover:text-white active:opacity-70 duration-200"
      {...props}
    >
      {children}
    </Button>
  );
}
