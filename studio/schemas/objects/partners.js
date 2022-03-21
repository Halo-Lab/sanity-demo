import AssetSource from "part:sanity-plugin-media-library/asset-source";

export default {
  name: "partners",
  type: "object",
  title: "Partners",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "partners",
      type: "array",
      title: "Partners",
      of: [
        {
          name: "partner",
          title: "Partner Item",
          type: "object",
          fields: [
            {
              name: "partnerTitle",
              type: "string",
              title: "Partner title",
            },
            {
              name: "partnerIcon",
              type: "image",
              title: "Partner icon",
              validation: (Rule) => Rule.required(),
              // options: {
              //   hotspot: true,
              //   sources: [AssetSource],
              // },
            },
          ],
        },
      ],
    },
  ],
};
