export default {
  name: "testimonial",
  type: "object",
  title: "Testimonial",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "position",
      type: "text",
      title: "Position",
    },
    {
      title: "Testimonial text",
      name: "text",
      type: "text",
    },
  ],

  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Testimonial",
      };
    },
  },
};
