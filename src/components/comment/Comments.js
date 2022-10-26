import React from "react";
import Loader from "../common/Loader";
import { useQuery } from "@apollo/client";
import { GET_POST_COMMENTS } from "../../graphql/query";
import { Avatar, Box, Grid, Typography } from "@mui/material";

const Comments = ({ slug }) => {
    const { data, loading, errors } = useQuery(GET_POST_COMMENTS, {
        variables: {
            slug,
        },
    });

    if (loading) return <Loader />;
    if (errors) return <h4>Errors...</h4>;

    return (
        <Grid container sx={{ boxShadow: "0px 4px 12px rgba(0,0,0,0.1)", borderRadius: 4, py: 1, mt: 8 }}>
            <Grid item xs={12} m={2}>
                <Typography component="p" variant="h6" fontWeight={700} color="primary">
                    Comments
                </Typography>

                {data.comments.map((comment) => (
                    <Grid item xs={12} key={comment.id} my={2} p={2} border="1px solid silver" borderRadius={1}>
                        <Box component="div" display="flex" alignItems="center">
                            <Avatar>{comment.name[0]}</Avatar>

                            <Typography component="span" variant="p" fontWeight={700} ml={2}>
                                {comment.name}
                            </Typography>
                        </Box>

                        <Typography component="p" variant="p" fontWeight={700} mt={2} ml={1}>
                            {comment.description}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default Comments;
