import Conversion from "../Home/components/Conversion/Conversion";
import { urlFor } from "../../utils/sanity";
import BlockContent from "@sanity/block-content-to-react";
import LatestPosts from "../Blog/components/LatestPosts/LatestPosts";
import styles from "./Post.module.scss";

const Post = ({ post, data }) => {
  const { mainImage, text } = post;
  const { recommended } = data;
  console.log(post);
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
            className="markdown"
          />
        </div>
        {/* <LatestPosts
          postData={post}
          recommended={recommended}
          pageType={"recommended"}
        /> */}
        <div className={styles.postFormWrap}>
          <Conversion data={data} />
        </div>
      </div>
    </>
  );
};

export default Post;
