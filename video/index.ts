import CainVideo from "./video.vue";
import { type App } from "vue";
// import "./video.";
CainVideo.install = (app: App) => {
  app.component(CainVideo.name as string, CainVideo);
};
export const _CVideoComponent = CainVideo;
export default CainVideo;
