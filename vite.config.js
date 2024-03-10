import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { resolve } from "path";

const root = resolve(__dirname, "./src/pages");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:3000",
  },
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        authorization: resolve(root, "authorization/authorization.html"),
        registration: resolve(root, "registration/registration.html"),
        profile: resolve(root, "profile/profile.html"),
        chat: resolve(root, "chat/chat.html"),
        "chat-view": resolve(root, "chat/chat-view.html"),
        400: resolve(root, "400/400.html"),
        500: resolve(root, "500/500.html"),
      },
      output: {
        assetFileNames: ({ name }) => {
          name = name.toLowerCase();

          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "assets/images/[name]-[hash][extname]";
          }

          if (/\.css$/.test(name ?? "")) {
            return "assets/styles/[name]-[hash][extname]";
          }

          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: [
        resolve(__dirname, "src/components"),
        resolve(__dirname, "src/modules"),
      ],
      context: {},
    }),
  ],
});
