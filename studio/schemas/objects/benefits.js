import AssetSource from "part:sanity-plugin-media-library/asset-source";

export default {
  name: "benefits",
  type: "object",
  title: "Benefits",
  fields: [
    {
      name: "benefitGeneralTitle",
      type: "string",
      title: "Benefit General title",
    },
    {
      name: "buttonShowText",
      type: "string",
      title: "Benefit Button Show",
    },
    {
      name: "buttonHiddenText",
      type: "string",
      title: "Benefit Button Hide",
    },
    {
      name: "benefitCategory",
      type: "text",
      title: "Benefit category",
    },
    {
      name: "benefits",
      type: "array",
      title: "Benefits",
      of: [
        {
          name: "benefitsList",
          title: "Benefit Item",
          type: "object",
          fields: [
            {
              name: "benefitTitle",
              type: "string",
              title: "Benefit title",
            },
            {
              name: "benefitDescription",
              type: "text",
              title: "Benefit description",
            },
            {
              name: "benefitIcon",
              type: "image",
              title: "Benefit icon",
              options: {
                sources: [AssetSource],
              },
            },
            {
              name: "benefitButtonText",
              type: "text",
              title: "Benefit button text",
            },
            {
              name: "benefitButtonLink",
              type: "text",
              title: "Benefit button link",
            },
          ],
        },
      ],
    },
  ],
};
