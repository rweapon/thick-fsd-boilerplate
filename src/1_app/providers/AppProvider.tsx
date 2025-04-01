import type { PropsWithChildren } from "react";

import { Provider } from "react-redux";

import { store } from "../appStore";

export default function AppProvider({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}
