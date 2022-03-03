import { gql } from "graphql-request";
import { graphcms } from "../client";

export const getAllProjects = async () => {
    const getAllProjectsQuery = gql`
    query GetPostDetails() {
      projects {
        id
        title
        description
        image {
          url
        }
        tags
        createdAt
        source
      }
    } 
    `

  const projects = await graphcms.request(getAllProjectsQuery);

  return projects.projects;
};
