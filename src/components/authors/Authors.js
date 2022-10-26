import React from "react";
import user from "../../assets/images/user.svg";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/query";
import { Avatar, Grid, Typography } from "@mui/material";

const Authors = () => {
    const { loading, errors, data } = useQuery(GET_AUTHORS_INFO);

    if (loading) return <h4>Loading...</h4>;
    if (errors) return <h4>errors...</h4>;

    const { authors } = data;

    return (
        <Grid container sx={{ boxShadow: "0px 4px 12px rgba(0,0,0,0.1)", borderRadius: 4 }}>
            {authors.map((author) => (
                <Grid key={author.id} item xs={12} padding={2}>
                    <a
                        href={`/authors/${author.slug}`}
                        style={{ display: "flex", alignItems: "center", textDecoration: "none", gap: "9px" }}
                    >
                        <Avatar src={author.avatar.url || user} />
                        <Typography coponent="p" variant="p" color="text.secondary">
                            {author.name}
                        </Typography>
                    </a>
                </Grid>
            ))}
        </Grid>
    );
};

export default Authors;
