import AssetSource from "part:sanity-plugin-media-library/asset-source";

export default {
  name: "features",
  type: "object",
  title: "Features",
  fields: [
    {
      name: "features",
      type: "array",
      title: "Features",
      of: [
        {
          name: "feature",
          title: "Feature Item",
          type: "object",
          fields: [
            {
              name: "featureTitle",
              type: "string",
              title: "Feature title",
            },
            {
              name: "featureDescription",
              type: "text",
              title: "Feature description",
            },
            {
              name: "featureIcon",
              type: "image",
              title: "Feature icon",
              options: {
                sources: [AssetSource],
              },
            },
          ],
        },
      ],
    },
  ],
};
