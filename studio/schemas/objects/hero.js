export default {
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "Main image",
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
