import AssetSource from "part:sanity-plugin-media-library/asset-source";

export default {
  name: "stats",
  type: "object",
  title: "Stats",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Stats Title",
    },
    {
      name: "category",
      type: "string",
      title: "Stats Category",
    },
    {
      name: "stats",
      type: "array",
      title: "Stats",
      of: [
        {
          name: "statsArr",
          title: "Stats Item",
          type: "object",
          fields: [
            {
              name: "statTitle",
              type: "string",
              title: "Stat item title",
            },
            {
              name: "statNumber",
              type: "number",
              title: "Stat number",
            },
          ],
        },
      ],
    },
  ],
};
