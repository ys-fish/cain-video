import CainVideo from "../video/index"
import  { type App } from "vue";

const Videos = [CainVideo];

const install = (app: App) => {
  Videos.forEach((Dom) => {
    app.component(Dom.name as string, Dom);
  });
};

export { install };

export default install;
