import React from "react";
import styles from "./IframePreview.css";

const basePath = process.env.SANITY_STUDIO_PROJECT_PATH;

export default function ProductsOverviewPreview(props) {
  const { displayed } = props;
  const url =
    process.env.NODE_ENV === "production"
      ? `${basePath}/blog?preview`
      : "http://localhost:3000/blog?preview";
  return (
    <div className={styles.componentWrapper}>
      <div className={styles.iframeContainer}>
        <iframe src={url} frameBorder={"0"} />
      </div>
    </div>
  );
}
