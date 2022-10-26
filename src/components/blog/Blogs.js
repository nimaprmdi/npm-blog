import React from "react";
import CardEL from "../common/CardEL";
import userImage from "../../assets/images/user.svg";
import { useQuery } from "@apollo/client";
import { GET_BLOG_INFO } from "../../graphql/query";
import { Grid } from "@mui/material";
import Loader from "../common/Loader";

const Blogs = () => {
    const { data, loading, errors } = useQuery(GET_BLOG_INFO);
    console.log({ data, loading, errors });

    if (loading) return <Loader />;
    if (errors) return <h4>Error...</h4>;

    console.log({ data, loading, errors });

    const getAvatar = (post) => {
        if (post.authors) {
            return post.authors.avatar.url;
        } else {
            return userImage;
        }
    };

    return (
        <Grid container spacing={2}>
            {data.posts.map((post) => (
                <Grid key={post.id} item xs={12} sm={6} md={4}>
                    {console.log("post ,", post)}
                    <CardEL
                        title={post.title}
                        slug={post.slug}
                        coverPhoto={post.coverPhoto.url}
                        author={post.authors ? post.authors.name : ""}
                        authorPhoto={getAvatar(post)}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default Blogs;
