import { gql } from "graphql-request";
import { graphcms } from "../client";

export const getAllBlogs = async () => {
    const getAllBlogsQuery = gql`
    query GetPostDetails {
        blogs(orderBy: {id: CREATED_AT, direction: ASC}) {
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

  const blogs = await graphcms.request(getAllBlogsQuery);

  return blogs.blogs;
};

export const getBlogSlugs = async () => {
    const query = gql`
      {
        blogs {
          slug
        }
      }
    `;
  
return await graphcms.request(query);
};
