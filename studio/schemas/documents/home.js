export default {
  name: "home",
  type: "document",
  title: "Home",
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
      name: "slug",
      type: "string",
      title: "Slug",
      readOnly: true,
    },
    { name: "newField", type: "string", title: "New Field" },

    {
      name: "hero",
      type: "hero",
    },
    {
      name: "partners",
      type: "partners",
    },
    {
      name: "benefits",
      type: "benefits",
    },
    {
      name: "stats",
      type: "stats",
    },
    {
      name: "mobileApp",
      type: "mobileApp",
    },
    {
      name: "testimonials",
      type: "testimonials",
    },
    {
      name: "conversion",
      type: "conversion",
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
