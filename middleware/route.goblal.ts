export default defineNuxtRouteMiddleware((to, from) => {
  console.log("page:finish");
  useNuxtApp().hook("page:finish", () => {
    if (process.client && to.path !== from.path) {   
        window.scrollTo(0, 0);
    }
  });
});
