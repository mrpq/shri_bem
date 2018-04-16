block("tile")({
  tag: "article",
  mods: (node, ctx) => ({ type: ctx.data.size })
});

block("tile").mod("type", "sm")({
  content: (node, ctx) => {
    const { data: { titleColor, size, title, image } } = ctx;
    return [
      {
        elem: "overlay",
        elemMods: { type: size },
        content: [
          {
            elem: "title",
            elemMods: { type: size },
            content: title,
            attrs: { style: `color: ${titleColor}` }
          },
          { elem: "whitespace", elemMods: { type: size } },
          {
            elem: "actions",
            elemMods: { type: size },
            content: [
              { elem: "dots", elemMods: { type: size } },
              { elem: "like", elemMods: { type: size } }
            ]
          }
        ]
      },
      {
        elem: "image-container",
        elemMods: { type: size },
        content: [
          {
            tag: "img",
            elem: "image",
            elemMods: { type: size },
            attrs: { src: `/img/content/${image}@3x.png` }
            // attrs: { src: "https://i.imgur.com/eXVQLdV.png" }
          }
        ]
      }
    ];
  }
});

block("tile").mod("type", "md")({
  content: (node, ctx) => {
    const { data: { size, title, titleColor, image, description } } = ctx;
    return [
      {
        elem: "overlay",
        elemMods: { type: size },
        content: [
          {
            elem: "title",
            elemMods: { type: size },
            content: title,
            attrs: { style: `color: ${titleColor}` }
          },
          { elem: "whitespace", elemMods: { type: size } }
        ]
      },
      {
        elem: "image-container",
        elemMods: { type: size },
        content: [
          {
            tag: "img",
            elem: "image",
            elemMods: { type: size },
            attrs: { src: `/img/content/${image}@3x.png` }
          }
        ]
      },
      {
        elem: "desc-container",
        elemMods: { type: size },
        content: [
          {
            elem: "desc",
            elemMods: { type: size },
            content: description,
            tag: "p"
          },
          {
            elem: "actions",
            elemMods: { type: size },
            content: [
              { elem: "dots", elemMods: { type: size } },
              { elem: "like", elemMods: { type: size } }
            ]
          }
        ]
      }
    ];
  }
});
block("tile").mod("type", "lg")({
  content: (node, ctx) => {
    const { data: { size, title, titleColor, image, description } } = ctx;
    return [
      {
        elem: "image-container",
        elemMods: { type: size },
        content: [
          {
            elem: "image",
            elemMods: { type: size },
            tag: "img",
            attrs: { src: `/img/content/${image}@3x.png` }
          }
        ]
      },

      {
        elem: "desc-container",
        elemMods: { type: size },
        content: [
          {
            elem: "overlay",
            elemMods: { type: size },
            content: [
              {
                elem: "title",
                elemMods: { type: size },
                content: title,
                attrs: { style: `color: ${titleColor}` }
              },
              { elem: "whitespace", elemMods: { type: size } }
            ]
          },
          {
            elem: "desc",
            elemMods: { type: size },
            content: description,
            tag: "p"
          },
          {
            elem: "actions",
            elemMods: { type: size },
            content: [
              { elem: "dots", elemMods: { type: size } },
              { elem: "like", elemMods: { type: size } }
            ]
          }
        ]
      }
    ];
  }
});
block("tile").mod("type", "smtext")({
  content: (node, ctx) => {
    const { data: { size, title, titleColor, description, channelName } } = ctx;
    return [
      {
        elem: "title",
        elemMods: { type: size },
        content: title,
        attrs: { style: `color: ${titleColor}` }
      },
      {
        elem: "desc",
        elemMods: { type: size },
        content: description,
        tag: "p"
      },
      {
        elem: "actions",
        elemMods: { type: size },
        content: [
          { elem: "channel", elemMods: { type: size }, content: channelName },
          { elem: "dots", elemMods: { type: size } },
          { elem: "like", elemMods: { type: size } }
        ]
      }
    ];
  }
});
