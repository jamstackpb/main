import { EditorTheme } from '@/src/theme/theme';

import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme extends EditorTheme {}
}
