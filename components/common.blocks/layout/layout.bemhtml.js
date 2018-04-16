block("layout")({
  content: (node, ctx) => {
    return {
      block: "tiles",
      tiles: ctx.tiles
    };
  }
});
