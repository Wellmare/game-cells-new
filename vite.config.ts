import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

import { default as TsChecker } from 'vite-plugin-ts-checker';

// @ts-ignore
const DefaultTsChecker = TsChecker.default

// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig({
  plugins: [react(), tsconfigPaths(), DefaultTsChecker()],
})
