// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import category from "./documents/category";
import post from "./documents/post";
import home from "./documents/home";
import blog from "./documents/blog";

import hero from "./objects/hero";
// import about from "./objects/about";
import features from "./objects/features";
import testimonial from "./objects/testimonial";
import blockContent from "./objects/blockContent";
import partners from "./objects/partners";
import siteConfig from "./documents/siteConfig";
import benefits from "./objects/benefits";
import stats from "./objects/stats";
import mobileApp from "./objects/mobileApp";
import testimonails from "./objects/testimonials";
import conversion from "./objects/conversion";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    partners,
    category,
    siteConfig,
    home,
    blog,
    hero,
    features,
    testimonial,
    blockContent,
    benefits,
    stats,
    mobileApp,
    testimonails,
    conversion,
  ]),
});
