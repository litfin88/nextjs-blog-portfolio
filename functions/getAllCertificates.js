import { gql } from "graphql-request";
import { graphcms } from "../client";

export const getAllCertificates = async () => {
    const getAllCertificatesQuery = gql`
    query GetPostDetails() {
      certificates {
        id
        certificateName
        certificateDescription
        image {
            url
        }
      }
    } 
    `

  const certificates = await graphcms.request(getAllCertificatesQuery);

  return certificates.certificates;
};
