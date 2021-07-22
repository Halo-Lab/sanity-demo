export default {
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Main image",
      name: "mainImage",
      type: "image",
      validation: (Rule) => Rule.required(),
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
