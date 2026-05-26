import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// Nitro outputs a Vercel-compatible server (.output/). Cloudflare Workers use wrangler + src/server.ts instead.
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      srcDirectory: "src",
    }),
    viteReact(),
    nitro({
      // Vercel sets VERCEL=1 during builds; Nitro emits serverless handlers + routes.
      preset: process.env.VERCEL ? "vercel" : undefined,
    }),
  ],
});
