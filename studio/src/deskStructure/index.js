import S from "@sanity/desk-tool/structure-builder";
import { MdWeb, MdSettings, MdWhatshot, MdLooks } from "react-icons/md";
import categories from "./categories";

import siteSettings from "./siteSettings";

import ProductPagePreview from "../components/previews/product/ProductPagePreview";
import PagePreview from "../components/previews/product/PagePreview";
import ProductsOverviewPreview from "../components/previews/product/ProductsOverviewPreview";
// Hide document types that we already have a structure definition for
const hiddenDocTypes = (listItem) =>
  ![
    "category",

    // "sampleProject",

    "siteSettings",
    "siteConfig",
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title("Sanity demo")
    .items([
      S.documentTypeListItem("post").title("Posts"),
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
              // S.documentTypeListItem("route").title("Routes"),
              // S.documentTypeListItem("page").title("Pages"),
              S.listItem()
                .title("Home page")
                .schemaType("home")
                .child(S.documentTypeList("home").title("Home page")),
              S.listItem()
                .title("Blog page")
                .schemaType("blog")
                .child(S.documentTypeList("blog").title("Blog page")),
            ])
        ),
      // ads,
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
  if (schemaType === "home") {
    return S.document().views([
      S.view.form(),
      S.view.component(PagePreview).title("Page Preview"),
    ]);
  }
  if (schemaType === "blog") {
    return S.document().views([
      S.view.form(),
      S.view.component(PagePreview).title("Page Preview"),
    ]);
  }
  return S.document().views([S.view.form()]);
};
