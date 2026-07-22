const isProjectsIndex = (path: string) => /^\/(?:en\/)?projects\/?$/.test(path);
const isProjectDetail = (path: string) =>
  /^\/(?:en\/)?projects\/[^/]+\/?$/.test(path);

export default defineNuxtRouteMiddleware((to, from) => {
  if (isProjectsIndex(from.path) && isProjectDetail(to.path)) {
    to.meta.pageTransition = {
      name: "project-forward",
      mode: "out-in",
    };
  }

  if (isProjectDetail(from.path) && isProjectsIndex(to.path)) {
    to.meta.pageTransition = {
      name: "project-back",
      mode: "out-in",
    };
  }
});
