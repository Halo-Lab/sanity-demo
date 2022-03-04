export default {
  name: "blogNew",
  type: "document",
  title: "Blog",
  initialValue: {
    slug: "/blog",
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
    },
    {
      name: "recommended",
      type: "recommended",
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
