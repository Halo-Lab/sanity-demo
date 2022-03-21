import AssetSource from "part:sanity-plugin-media-library/asset-source";

export default {
  name: "testimonials",
  type: "object",
  title: "Testimonials",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Testimonials title",
    },
    {
      name: "category",
      type: "string",
      title: "Testimonials category",
    },
    {
      name: "testimonialsArr",
      type: "array",
      title: "Testimonials Array",
      of: [
        {
          name: "testimonialsItem",
          type: "object",
          title: "Review Item",
          fields: [
            {
              name: "reviewDescription",
              type: "text",
              title: "testimonials description",
            },
            {
              name: "userAvatar",
              type: "image",
              title: "review user avatar",
              options: {
                sources: [AssetSource],
              },
            },
            {
              name: "userName",
              type: "string",
              title: "review user name",
            },
            {
              name: "userPosition",
              type: "string",
              title: "review user position",
            },
            {
              name: "reviewStars",
              type: "number",
              title: "review start quantity",
            },
          ],
        },
      ],
    },
  ],
};
