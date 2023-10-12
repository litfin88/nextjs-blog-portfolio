import { gql } from "graphql-request";
import { graphcms } from "../client";

export const getAllAchivements = async () => {
    const getAllAchivementsQuery = gql`
    query GetPostDetails() {
      achivements(orderBy: "id") {
        id
        name
        year
        createdAt
      }
    } 
    `

  const achivements = await graphcms.request(getAllAchivementsQuery);

  return achivements.achivements;
};
