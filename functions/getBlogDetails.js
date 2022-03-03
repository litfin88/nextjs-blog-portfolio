import { request, gql } from "graphql-request";
import { graphcms } from "../client";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_URL;

export const getBlogDetails = async (slug) => {
    const getBlogDetailsQuery = gql`
    query GetPostDetails($slug: String!) {
        blogs (where: { slug: $slug }) {
            id
            title
            slug
            category
            content {
                raw
            }
            excerpt
            featuredImage {
                url
            }
            tags
            createdAt
            creator
        }
    } 
    `

  const { blogs } = await request(graphqlAPI, getBlogDetailsQuery, { slug });

  return blogs;
};
