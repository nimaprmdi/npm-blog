import { gql } from "@apollo/client";

const GET_BLOG_INFO = gql`
    query {
        posts {
            title
            slug
            id
            authors {
                name
                avatar {
                    url
                }
            }
            coverPhoto {
                url
            }
        }
    }
`;

const GET_AUTHORS_INFO = gql`
    query {
        authors {
            id
            name
            slug
            avatar {
                url
            }
        }
    }
`;

export { GET_BLOG_INFO, GET_AUTHORS_INFO };
