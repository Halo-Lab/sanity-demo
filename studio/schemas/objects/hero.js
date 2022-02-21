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
    {
      name: "buttonPrimaryObj",
      type: "object",
      title: "Button Primary Info",
      fields: [
        {
          name: "buttonPrimaryTitle",
          type: "string",
          title: "Button Title",
        },
        {
          name: "buttonPrimaryLink",
          type: "string",
          title: "Button link",
        },
      ],
    },
    {
      name: "buttonArrowObj",
      type: "object",
      title: "Button Arrow Info",
      fields: [
        {
          name: "buttonArrowTitle",
          type: "string",
          title: "Button Title",
        },
        {
          name: "buttonArrowLink",
          type: "string",
          title: "Button link",
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
