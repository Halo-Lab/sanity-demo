import S from "@sanity/desk-tool/structure-builder";
import React from "react";
import { MdWeb, MdSettings, MdWhatshot, MdLooks } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";
import { FiHome, FiBook } from "react-icons/fi";
import { Card, Text } from "@sanity/ui";
import sanityClient from "part:@sanity/base/client";
import categories from "./categories";

import siteSettings from "./siteSettings";

import ProductPagePreview from "../components/previews/product/ProductPagePreview";
import PagePreview from "../components/previews/product/PagePreview";
import ProductsOverviewPreview from "../components/previews/product/ProductsOverviewPreview";
// Hide document types that we already have a structure definition for
const hiddenDocTypes = (listItem) =>
  !["category", "siteSettings", "siteConfig"].includes(listItem.getId());

// Extract our home page
const currentHomePage = S.listItem()
  .title("Home Page")
  .icon(FiHome)
  .child(async () => {
    const data = await sanityClient.fetch(`
    *[_type == "home"][0]`);

    if (!data)
      return S.component(() => (
        <Card padding={4}>
          <Card padding={[3, 3, 4]} radius={2} shadow={1} tone="critical">
            <Text align="center" size={[2]}>
              The Home Page has not been set. Visit the Settings page to
              activate.
            </Text>
          </Card>
        </Card>
      )).title("Home Page");

    return S.document()
      .id(data._id)
      .schemaType("home")
      .views([
        S.view.form(),
        S.view.component(PagePreview).title("Page Preview"),
      ]);
  });

// Extract our Blog page
const currentBlogPage = S.listItem()
  .title("Blog Page")
  .icon(FiBook)
  .child(async () => {
    const data = await sanityClient.fetch(`
  *[_type == "blogNew"][0]`);

    if (!data)
      return S.component(() => (
        <Card padding={4}>
          <Card padding={[3, 3, 4]} radius={2} shadow={1} tone="critical">
            <Text align="center" size={[2]}>
              The Home Page has not been set. Visit the Settings page to
              activate.
            </Text>
          </Card>
        </Card>
      )).title("Blog Page");

    return S.document()
      .id(data._id)
      .schemaType("blogNew")
      .views([
        S.view.form(),
        S.view.component(PagePreview).title("Page Preview"),
      ]);
  });

export default () =>
  S.list()
    .title("Sanity demo")
    .items([
      S.documentTypeListItem("post").title("Posts").icon(RiArticleLine),
      S.listItem()
        .title("Website")
        .icon(MdWeb)
        .child(
          S.list()
            .title("Website")
            .items([
              S.listItem()
                .title("Site configuration")
                .icon(MdSettings)
                .child(
                  S.document()
                    .title("Site configuration")
                    .schemaType("siteConfig")
                    .documentId("siteConfig")
                ),
              // S.listItem()
              //   .title("Blog")
              //   .icon(FiBook)
              //   .child(
              //     S.document()
              //       .title("Blog")
              //       .schemaType("blogNew")
              //       .documentId("blogNew")
              //   ),
              currentHomePage,
              currentBlogPage,
            ])
        ),
      // ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);

export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props;
  if (schemaType === "post") {
    return S.document().views([
      S.view.form(),
      S.view.component(ProductsOverviewPreview).title("Blog Preview"),
      S.view.component(ProductPagePreview).title("Post Preview"),
    ]);
  }
  return S.document().views([S.view.form()]);
};
