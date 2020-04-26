import { join, resolve } from "path";
import config from "./config/webpack.config.prod";
export default {
  disableCSSModules: true,
  cssModulesWithAffix: true,
  entry: "./src/index.js",
  publicPath: "/",
  alias: {
    "@": join(__dirname, "./src"),
    "@components": join(__dirname, "./src/components"),
    "@utils": join(__dirname, "./src/components/utils"),
    "@services": join(__dirname, "./src/services"),
  },
  dllDependenciesExcludes: [],
  extraBabelIncludes: [/decamelize/],
  extraBabelPlugins: [
    [
      "import",
      {
        libraryName: "@lugia/lugia-web",
        libraryDirectory: "dist",
      },
      "@lugia/lugia-web",
    ],
    [
      "import",
      {
        libraryName: "@/components",
        libraryDirectory: "",
        camel2DashComponentName: false,
      },
      "@/components",
    ],
  ],
  applyWebpack(webpackConfig, { webpack, merge }) {
    return {
      ...webpackConfig,
      output: {
        ...webpackConfig.output,
        ...config.output,
      },
    };
  },
};
