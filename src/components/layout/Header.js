import React from "react";
import BookIcon from "@mui/icons-material/Book";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <AppBar position="sticky">
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography component="h1" variant="h5" fontWeight="bold" flex={1} sx={{ textAlign: "left" }}>
                        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                            NPM-BLOG
                        </Link>
                    </Typography>
                    <BookIcon />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
