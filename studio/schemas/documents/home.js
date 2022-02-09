export default {
  name: "home",
  type: "document",
  title: "Home",
  initialValue: {
    slug: "/",
  },
  fields: [
    // {
    //   name: "title",
    //   type: "string",
    //   title: "Title",
    // },
    // {
    //   name: "slug",
    //   type: "string",
    //   title: "Slug",
    //   readOnly: true,
    // },
    // { name: "newField", type: "string", title: "New Field" },

    {
      name: "hero",
      type: "hero",
    },
    {
      name: "about",
      type: "about",
    },
    {
      name: "features",
      type: "features",
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
