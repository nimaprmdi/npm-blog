import React from "react";
import Loader from "../common/Loader";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import sanitizeHtml from "sanitize-html";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_BLOG } from "../../graphql/query";
import { useParams } from "react-router-dom";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CommentForms from "../comment/CommentForms";
import Comments from "../comment/Comments";

const BlogSingle = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const { loading, errors, data } = useQuery(GET_SINGLE_BLOG, {
        variables: {
            slug,
        },
    });

    if (loading) return <Loader />;
    if (errors) return <h4>Errors...</h4>;

    return (
        <Container maxWidth="lg">
            <Grid container>
                <Grid item xs={12} mt={9} display="flex" justifyContent="flex-start" alignItems="center">
                    <ArrowBackIcon sx={{ cursor: "pointer" }} onClick={() => navigate(-1)} />
                    <Typography
                        sx={{ marginLeft: "32px" }}
                        component="h2"
                        variant="h4"
                        color="primary"
                        fontWeight={700}
                    >
                        {data.post.title}
                    </Typography>
                </Grid>

                <Grid item xs={12} my={6}>
                    <img
                        src={data.post.coverPhoto.url}
                        alt={data.post.slug}
                        width="100%"
                        style={{ borderRadius: 15 }}
                    />
                </Grid>

                {data.post.authors && (
                    <Grid item xs={12} mt={7} display="flex" alignItems="center">
                        <Avatar src={data.post.authors.avatar.url} sx={{ width: 80, height: 80, marginLeft: 2 }} />

                        <Box component="div" sx={{ marginLeft: 2 }}>
                            <Typography component="p" variant="h5" fontWeight={700}>
                                {data.post.authors.name}
                            </Typography>

                            <Typography component="p" variant="h6" fontWeight={700} color="text.secondary">
                                {data.post.authors.position}
                            </Typography>
                        </Box>
                    </Grid>
                )}

                <Grid item xs={12} mt={5}>
                    <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.post.content.html) }}></div>
                </Grid>

                <Grid item xs={12}>
                    <CommentForms slug={slug} />
                </Grid>

                <Grid item xs={12}>
                    <Comments slug={slug} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default BlogSingle;
