import { MdLocalDrink } from "react-icons/md";
import AssetSource from "part:sanity-plugin-media-library/asset-source";

export default {
  name: "post",
  title: "Post",
  type: "document",
  icon: MdLocalDrink,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 5,
    },
    {
      title: "Main image",
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
        sources: [AssetSource],
      },
    },
    {
      name: "date",
      title: "Date",
      type: "date",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      title: "Text block",
      name: "text",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      image: "mainImage",
    },
    prepare: ({ title, slug, image, status }) => {
      return {
        title,
        media: image,
      };
    },
  },
};
