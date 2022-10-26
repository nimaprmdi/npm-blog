import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BLOG_INFO } from "../../graphql/query";
import { Grid } from "@mui/material";
import CardEL from "../common/CardEL";

const Blogs = () => {
    const { data, loading, error } = useQuery(GET_BLOG_INFO);
    console.log({ data, loading, error });

    if (loading) return <h4>Loading...</h4>;
    if (error) return <h4>Error...</h4>;

    return (
        <Grid container spacing={2}>
            {data.posts.map((post) => (
                <Grid key={post.id} item xs={12} sm={6} md={4}>
                    <CardEL key={post.id} postData={post} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Blogs;
