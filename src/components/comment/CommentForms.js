import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutation";
import { ToastContainer, toast } from "react-toastify";

const CommentForms = ({ slug }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        text: "",
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [sendComment, { data, errors, loading }] = useMutation(SEND_COMMENT, {
        variables: {
            name: formData.name,
            email: formData.email,
            description: formData.text,
            slug: slug,
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.name && formData.email && formData.text) {
            sendComment();
        } else {
            toast.error("Fields Are Not Valid", {
                position: "top-center",
            });
        }
    };

    useEffect(() => {
        if (data) {
            toast.success("Comment Send", {
                position: "top-center",
            });

            setFormData({
                name: "",
                email: "",
                text: "",
            });
        }
    }, [data]);

    return (
        <Grid container sx={{ boxShadow: "0px 4px 12px rgba(0,0,0,0.1)", borderRadius: 4, py: 1, mt: 5 }}>
            <Grid itemxs={12}>
                <Typography component="p" variant="h6" fontWeight={700} ml={2} color="primary">
                    Comment Form
                </Typography>
            </Grid>

            <Grid item xs={12} m={2}>
                <TextField
                    label="Name"
                    name="name"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    value={formData.name}
                    onChange={(e) => handleInputChange(e)}
                />
            </Grid>

            <Grid item xs={12} m={2}>
                <TextField
                    label="Email"
                    name="email"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    value={formData.email}
                    onChange={(e) => handleInputChange(e)}
                />
            </Grid>

            <Grid item xs={12} m={2}>
                <TextField
                    label="Comment Text"
                    name="text"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    value={formData.text}
                    multiline
                    onChange={(e) => handleInputChange(e)}
                    minRows={4}
                />
            </Grid>

            <Grid item xs={12} m={2}>
                <Button disabled={loading} onClick={(e) => handleSubmit(e)} variant="contained">
                    Send
                </Button>
            </Grid>

            <ToastContainer />
        </Grid>
    );
};

export default CommentForms;
