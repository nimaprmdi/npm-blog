import { gql } from "@apollo/client";

const SEND_COMMENT = gql`
    mutation sendComment($name: String!, $email: String!, $description: String!, $slug: String!) {
        createComment(
            data: { name: $name, email: $email, description: $description, post: { connect: { slug: $slug } } }
        ) {
            id
        }
    }
`;

export { SEND_COMMENT };
