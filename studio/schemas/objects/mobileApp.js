import AssetSource from "part:sanity-plugin-media-library/asset-source";

export default {
  name: "mobileApp",
  type: "object",
  title: "mobileApp",
  fields: [
    {
      name: "title",
      type: "string",
      title: "MobileApp Title",
    },
    {
      name: "category",
      type: "string",
      title: "MobileApp Category",
    },
    {
      name: "description",
      type: "text",
      title: "MobileApp Description",
    },
    {
      name: "buttonText",
      type: "string",
      title: "MobileApp Button Text",
    },
    {
      name: "mobileAppImage",
      type: "image",
      title: "MobileApp image",
    },
    {
      name: "mobileAppArr",
      type: "array",
      title: "MobileApp additional icons",
      of: [
        {
          name: "mobileAppArrItem",
          title: "MobileApp Item",
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "MobileApp item title",
            },
            {
              name: "icon",
              type: "image",
              title: "MobileApp icon",
            },
          ],
        },
      ],
    },
  ],
};
