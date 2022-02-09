import AssetSource from "part:sanity-plugin-media-library/asset-source";

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
        sources: [AssetSource],
      },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
