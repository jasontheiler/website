import { MotionOnePlugin } from "vue-motion-one";

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(MotionOnePlugin);
});
