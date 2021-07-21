export default {
  name: "about",
  type: "object",
  title: "About",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      title: "Image",
      name: "image",
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
