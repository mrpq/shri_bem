block("tiles")({
  mix: {
    block: "layout",
    elem: "tiles"
  },
  content: (node, ctx) => {
    return ctx.tiles.map(tile => ({ block: "tile", data: tile }));
  }
});
