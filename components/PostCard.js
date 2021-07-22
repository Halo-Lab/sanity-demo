import Link from "next/link";
import { urlFor } from "../utils/sanity";

function PostCard({ title, mainImage, slug }) {
  return (
    <Link href={`/blog/${slug.current}`}>
      <a className="card">
        <div>
          <img
            src={urlFor(mainImage)
              .auto("format")
              .fit("crop")
              .width(750)
              .quality(80)}
          />
        </div>
        <div>
          <h3>{title}</h3>
        </div>
      </a>
    </Link>
  );
}

export default PostCard;
