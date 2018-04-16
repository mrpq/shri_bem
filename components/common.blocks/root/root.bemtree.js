block("root").replace()(function() {
  var ctx = this.ctx,
    data = (this.data = ctx.data),
    meta = data.meta || {},
    og = meta.og || {};

  if (ctx.context) return ctx.context;

  return {
    tiles: this.data.tiles,
    block: "page",
    title: data.title || "Dzen",
    favicon: "/favicon.ico",
    styles: [
      {
        elem: "css",
        url: "/" + data.bundle + "/" + data.page + ".min.css"
      }
    ],
    scripts: [
      {
        elem: "js",
        url: "/" + data.bundle + "/" + data.page + ".min.js"
      }
    ],
    head: [
      {
        elem: "meta",
        attrs: {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }
      },
      {
        elem: "meta",
        attrs: { name: "description", content: meta.description }
      },
      {
        elem: "meta",
        attrs: { property: "og:title", content: og.title || data.title }
      },
      { elem: "meta", attrs: { property: "og:url", content: og.url } },
      {
        elem: "meta",
        attrs: { property: "og:site_name", content: og.siteName }
      },
      {
        elem: "meta",
        attrs: { property: "og:locale", content: og.locale || "en_US" }
      },
      { elem: "meta", attrs: { property: "og:type", content: "website" } }
    ],
    mods: {
      view: data.view
    }
  };
});
