import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";

const peerDependencies = [
  "react",
  "react-dom",
  /@babel\/runtime/,
  /@fortawesome\//,
  "@nextml/lodestar",
];

const extensions = [".js", ".jsx"];

const config = {
  input: "src/library.js",

  output: {
    file: "./lib/index.js",
    format: "cjs",
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
    },
    exports: "auto",
  },

  plugins: [
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    nodeResolve({
      customResolveOptions: {
        moduleDirectories: ["node_modules"],
      },
      extensions,
      preferBuiltins: true,
    }),
    commonjs({
      include: "node_modules/**",
    }),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"],
      plugins: ["@babel/transform-runtime"],
      extensions,
      babelHelpers: "runtime",
    }),
  ],
  external: peerDependencies,
};

export default config;
