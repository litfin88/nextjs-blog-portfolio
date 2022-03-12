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
        projectType
        tags
        createdAt
        source
        demo
      }
    } 
    `

  const projects = await graphcms.request(getAllProjectsQuery);

  return projects.projects;
};
