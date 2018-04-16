block("layout")({
  tag: "main",
  content: (node, ctx) => {
    return {
      block: "tiles",
      tiles: ctx.tiles
    };
  }
});
