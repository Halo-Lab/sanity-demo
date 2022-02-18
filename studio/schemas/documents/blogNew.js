export default {
  name: "blogNew",
  type: "document",
  title: "Blog New",
  initialValue: {
    slug: "/",
  },
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "blogHero",
      type: "blogHero",
    },
    {
      name: "conversion",
      type: "conversion",
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
        title: "Home page",
      };
    },
  },
};
