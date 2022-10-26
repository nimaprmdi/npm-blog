import React from "react";
import sanitizeHtml from "sanitize-html";
import CardEL from "../common/CardEL";
import Loader from "../common/Loader";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_AUTHOR } from "../../graphql/query";
import { Container, Grid, Avatar, Typography } from "@mui/material";

const AuthorSingle = () => {
    const { slug } = useParams();

    const { data, errors, loading } = useQuery(GET_AUTHOR, {
        variables: { slug },
    });

    if (loading) return <Loader />;
    if (errors) return <h4>Error...</h4>;

    const { author } = data;

    return (
        <Container maxWidth="lg">
            <Grid container mt={10}>
                <Grid item xs={12} display="flex" flexDirection="column" alignItems="center">
                    <Avatar src={author.avatar.url} sx={{ width: 250, height: 250 }} />

                    <Typography component="h3" variant="h4" fontWeight={700} mt={4}>
                        {author.name}
                    </Typography>

                    <Typography component="p" variant="h6" color="text.secondary" mt={2}>
                        {author.position}
                    </Typography>
                </Grid>

                <Container maxWidth="md">
                    <Grid item xs={12} mt={5}>
                        <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(author.description.html) }}></div>
                    </Grid>

                    <Grid item xs={12} mt={6}>
                        {author.posts.length > 0 && (
                            <Typography component="h3" variant="h5" fontWeight="bold">
                                Posts from {author.name}
                            </Typography>
                        )}

                        <Grid container mt={2} spacing={2}>
                            {author.posts.map((post) => (
                                <Grid key={post.id} item xs={12} sm={6} md={4}>
                                    <CardEL title={post.title} slug={post.slug} coverPhoto={post.coverPhoto.url} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </Container>
    );
};

export default AuthorSingle;
