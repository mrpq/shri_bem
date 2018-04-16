block("page").content()(function() {
  return [
    {
      block: this.data.view,
      tiles: this.ctx.tiles.tiles
    }
  ];
});
