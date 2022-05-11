import React from "react";
import styles from "./IframePreview.css";

const basePath = process.env.SANITY_STUDIO_PROJECT_PATH;

export default function ProductsPreview(props) {
  const { displayed } = props.document;
  if (!displayed?.slug) {
    return <div>The product needs a slug before it can be previewed.</div>;
  }

  const pageSlug =
    props.document.displayed._type === "home" ? "" : displayed?.slug;
  const url =
    process.env.NODE_ENV === "production"
      ? `${basePath}/${pageSlug}?preview`
      : `http://localhost:3000/${pageSlug}?preview`;

  return (
    <div className={styles.componentWrapper}>
      <div className={styles.iframeContainer}>
        <iframe src={url} frameBorder={"0"} />
      </div>
    </div>
  );
}
