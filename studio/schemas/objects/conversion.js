import AssetSource from "part:sanity-plugin-media-library/asset-source";

export default {
  name: "conversion",
  type: "object",
  title: "Conversion",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      type: "image",
      title: "Main image",
    },
    {
      name: "backgroundImage",
      type: "image",
      title: "Background image",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "inputText",
      type: "text",
      title: "Input text",
    },
    {
      name: "stickerObj",
      type: "object",
      title: "Conversion Sticker",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Stiker title",
        },
        {
          name: "icon",
          type: "image",
          title: "Stiker icon",
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
