import AssetSource from "part:sanity-plugin-media-library/asset-source";

export default {
  name: "blogHero",
  type: "object",
  title: "Blog Hero",
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
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "buttonObj",
      type: "object",
      title: "Button object",
      fields: [
        {
          name: "buttonTitle",
          type: "string",
          title: "Button title",
        },
        {
          name: "buttonLink",
          type: "slug",
          title: "Button icon",
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
