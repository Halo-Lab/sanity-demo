import Conversion from "../Home/components/Conversion/Conversion";
import { urlFor } from "../../utils/sanity";
import BlockContent from "@sanity/block-content-to-react";
import LatestPosts from "../Blog/components/LatestPosts/LatestPosts";
import styles from "./Post.module.scss";

const Post = ({ post, data, allPostData }) => {
  const { mainImage, text } = post;
  const { recommended } = data;
  return (
    <>
      <div
        className={styles.postPreview}
        style={{
          backgroundImage: `url('${urlFor(mainImage)}')`,
        }}
      />
      <div className="container">
        <div className={styles.inner_container}>
          <BlockContent
            blocks={text}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            className="postPage"
          />
        </div>
        <LatestPosts
          postData={allPostData}
          recommended={recommended}
          pageType={"recommended"}
        />
      </div>
      <div className={styles.postFormWrap}>
        <Conversion data={data} />
      </div>
    </>
  );
};

export default Post;
