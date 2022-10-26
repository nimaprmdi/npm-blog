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
import React from "react";
import userImage from "../../assets/images/user.svg";
const CardEL = ({ postData }) => {
    const getAvatar = () => {
        if (postData.authors.length > 0) {
            return postData.authors[0].avatar.url;
        } else {
            return userImage;
        }
    };

    return (
        <Card sx={{ boxShadow: " 0px 4px 12px rgba(0,0,0,0.1)", borderRadius: 4 }}>
            <CardHeader
                avatar={<Avatar src={getAvatar()} />}
                sx={{ marginLeft: "2px" }}
                title={
                    <Typography component="p" variant="p" color="text.secondary">
                        {postData.authors.length > 0 && postData.authors[0].name}
                    </Typography>
                }
            />
            <CardMedia component="img" height="194" image={postData.coverPhoto.url} alt={postData.slug} />
            <CardContent>
                <Typography component="h3" variant="h6" color="text.primary" sx={{ fontSize: "16px" }}>
                    {postData.title}
                </Typography>
            </CardContent>
            <Divider variant="middle" sx={{ margin: "10px" }} />
            <CardActions>
                {/* <Link to={`/blogs/${postData.slug}`} sx={{ textDecoration: "none", width: "100%" }}> */}
                <Button variant="outlined" size="small" sx={{ width: "100%", borderRadius: 3 }}>
                    Read More
                </Button>
                {/* </Link> */}
            </CardActions>
        </Card>
    );
};

export default CardEL;
