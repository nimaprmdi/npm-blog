import React from "react";
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
    Divider,
    Button,
} from "@mui/material";

import { Link } from "react-router-dom";

const CardEL = ({ title, slug, coverPhoto, author, authorPhoto }) => {
    console.log(authorPhoto);

    return (
        <Card sx={{ boxShadow: " 0px 4px 12px rgba(0,0,0,0.1)", borderRadius: 4 }}>
            {author && authorPhoto && (
                <CardHeader
                    avatar={<Avatar src={authorPhoto} />}
                    sx={{ marginLeft: "2px" }}
                    title={
                        <Typography component="p" variant="p" color="text.secondary">
                            {author}
                        </Typography>
                    }
                />
            )}

            <CardMedia component="img" height="194" image={coverPhoto} alt={slug} />
            <CardContent>
                <Typography component="h3" variant="h6" color="text.primary" sx={{ fontSize: "16px" }}>
                    {title}
                </Typography>
            </CardContent>
            <Divider variant="middle" sx={{ margin: "10px" }} />
            <CardActions>
                <Link to={`/blogs/${slug}`} style={{ textDecoration: "none", width: "100%" }}>
                    <Button variant="outlined" size="small" sx={{ width: "100%", borderRadius: 3 }}>
                        Read More
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default CardEL;
