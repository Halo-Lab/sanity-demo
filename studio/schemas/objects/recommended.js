import AssetSource from "part:sanity-plugin-media-library/asset-source";

export default {
  name: "recommended",
  type: "object",
  title: "Recommendation",
  fields: [
    {
      name: "recommendedObj",
      type: "object",
      title: "Recommendation Text",
      fields: [
        {
          name: "recTitle",
          type: "string",
          title: "Recommendation title",
        },
        {
          name: "recCategory",
          type: "string",
          title: "Recommendation category",
        },
      ],
    },
  ],
};
