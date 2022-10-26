import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
    return (
        <footer>
            <Typography
                component="p"
                variant="p"
                bgcolor="#f7f7f7"
                coloe="primary"
                padding="10px"
                textAlign="center"
                mt={10}
            >
                GraphQL project using React | Practice
            </Typography>
        </footer>
    );
};

export default Footer;
