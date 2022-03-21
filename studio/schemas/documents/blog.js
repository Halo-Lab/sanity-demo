export default {
  name: "blog",
  type: "document",
  title: "Blog",
  initialValue: {
    slug: "blog",
  },
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "string",
      title: "Slug",
      readOnly: true,
    },
  ],

  preview: {
    select: {
      title: "title",
    },
    prepare() {
      return {
        title: "Blog page",
      };
    },
  },
};
