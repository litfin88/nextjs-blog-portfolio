import { groq } from "next-sanity";

export const getAllAchivements = async () => {
    const getAllAchivementsQuery = gql`
    query GetPostDetails() {
      achivements {
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
