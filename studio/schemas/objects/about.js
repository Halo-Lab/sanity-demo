import AssetSource from "part:sanity-plugin-media-library/asset-source";

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
        sources: [AssetSource],
      },
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
