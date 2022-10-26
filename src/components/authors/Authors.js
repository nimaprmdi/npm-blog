import React from "react";
import user from "../../assets/images/user.svg";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/query";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../common/Loader";

const Authors = () => {
    const { loading, errors, data } = useQuery(GET_AUTHORS_INFO);

    if (loading) return <Loader />;
    if (errors) return <h4>Errors...</h4>;

    const { authors } = data;

    return (
        <Grid container sx={{ boxShadow: "0px 4px 12px rgba(0,0,0,0.1)", borderRadius: 4 }}>
            {authors.map((author, index) => (
                <React.Fragment key={author.id}>
                    <Grid item xs={12} padding={2}>
                        <Link
                            to={`/authors/${author.slug}`}
                            style={{ display: "flex", alignItems: "center", textDecoration: "none", gap: "9px" }}
                        >
                            <Avatar src={author.avatar.url || user} sx={{ margin: 0.5 }} />
                            <Typography coponent="p" variant="p" color="text.secondary">
                                {author.name}
                            </Typography>
                        </Link>
                    </Grid>

                    <Grid item xs={12}>
                        {index !== authors.length - 1 && <Divider variant="middle" sx={{ margin: "10px" }} />}
                    </Grid>
                </React.Fragment>
            ))}
        </Grid>
    );
};

export default Authors;
