import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// export const client = new SanityClient({
//     projectId: "ltx99g3t",
//     dataset: "production",
//     apiVersion: "2023-05-01",
//     useCdn: true,
//     token: process.env.NEXT__PUBLIC__SANITY__TOKEN,
// });

// const builder = imageUrlBuilder(client);
// export const urlFor = (source) => builder.image(source);

const sanityConfig = {
  projectId: 'ltx99g3t',
  dataset: 'production',
  apiVersion: '2023-02-05',
  useCdn: true,
  token: process.env.NEXT__PUBLIC__SANITY__TOKEN,
};

export const client =  createClient(sanityConfig);
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
