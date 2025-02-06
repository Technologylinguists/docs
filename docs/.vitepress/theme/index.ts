// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";
import "./style/index.css"; //引入自定义的样式
import Confetti from "./components/Confetti.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    app.component("Confetti", Confetti); //注册全局组件
  },
};
