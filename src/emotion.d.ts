import { EditorTheme } from "@/src/styles/theme";

import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme extends EditorTheme {}
}
