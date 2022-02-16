export default {
  name: "siteConfig",
  type: "document",
  title: "Site configuration",
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  fields: [
    {
      name: "title",
      type: "string",
      title: "Site title",
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      description: "The main site url. Used to create canonical url",
    },
    {
      title: "Site language",
      name: "lang",
      type: "string",
    },
    {
      name: "headerLinkArr",
      type: "array",
      title: "Array of links",
      of: [
        {
          name: "navItem",
          title: "Nav Item",
          type: "object",
          fields: [
            {
              name: "navName",
              type: "string",
              title: "Link title",
            },
            {
              name: "navLink",
              type: "slug",
              title: "Link Adress",
            },
          ],
        },
      ],
    },
    {
      name: "buttonObj",
      title: "Button Item",
      type: "object",
      fields: [
        {
          name: "buttonText",
          type: "string",
          title: "Button title",
        },
        {
          name: "buttonLink",
          type: "slug",
          title: "Button Link",
        },
      ],
    },
    {
      title: "Brand logo",
      description:
        "Best choice is to use an SVG where the color are set with currentColor",
      name: "logo",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "footerSocialsArr",
      type: "array",
      title: "Footer list of socials",
      of: [
        {
          name: "footerItem",
          title: "Footer Item",
          type: "object",
          fields: [
            {
              name: "socialTitle",
              type: "string",
              title: "Social title",
            },
            {
              name: "socialLink",
              type: "slug",
              title: "Social link",
            },
            {
              name: "socialIcon",
              type: "image",
              title: "Social icon",
            },
          ],
        },
      ],
    },
    {
      name: "footerCopyrightsObj",
      title: "Footer copytrights",
      type: "object",
      fields: [
        {
          title: "Copyright",
          name: "footerCopyrights",
          type: "string",
        },
        {
          title: "Company Name",
          name: "companyName",
          type: "string",
        },
        {
          title: "Company Logo",
          name: "companyLogo",
          type: "image",
        },
      ],
    },
  ],
};
