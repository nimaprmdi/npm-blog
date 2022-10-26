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

const GET_AUTHOR = gql`
    query getAuthor($slug: String!) {
        author(where: { slug: $slug }) {
            name
            position
            id
            avatar {
                url
            }
            description {
                html
            }
            posts {
                ... on Post {
                    id
                    slug
                    title
                    authors {
                        id
                        name
                    }
                    coverPhoto {
                        url
                    }
                }
            }
        }
    }
`;

const GET_SINGLE_BLOG = gql`
    query getSingleBlog($slug: String!) {
        post(where: { slug: $slug }) {
            authors {
                avatar {
                    url
                }
                name
                position
                id
            }
            content {
                html
            }
            title
            coverPhoto {
                url
            }
        }
    }
`;

export { GET_BLOG_INFO, GET_AUTHORS_INFO, GET_AUTHOR, GET_SINGLE_BLOG };
