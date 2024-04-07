import React from "react";
import { Grid, Typography } from "@mui/material";
import { useRouter } from 'next/router';

function ViewDetails() {

    const router = useRouter();

    // console.log("======router.query======:>", router.query.data);
    const item = JSON.parse(router.query?.data || '{}');

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <h1>Detailed View</h1>
                    <Grid container>
                        <Grid item xs={12} style={{ display: "flex" }}>
                            <Typography style={{ fontWeight: "bold" }}>ID :</Typography>
                            <Typography>{item.id}</Typography>
                        </Grid>
                        <Grid item xs={12} style={{ display: "flex" }}>
                            <Typography style={{ fontWeight: "bold" }}>Title :</Typography>
                            <Typography>{item.title}</Typography>
                        </Grid>
                        <Grid item xs={12} style={{ display: "flex" }}>
                            <Typography style={{ fontWeight: "bold" }}>Description :</Typography>
                            <Typography>{item.description}</Typography>
                        </Grid>
                        <Grid item xs={12} style={{ display: "flex" }}>
                            <Typography style={{ fontWeight: "bold" }}>Comments Count :</Typography>
                            <Typography>{item.comments_count}</Typography>
                        </Grid>
                        <Grid item xs={12} style={{ display: "flex" }}>
                            <Typography style={{ fontWeight: "bold" }}>Tags :</Typography>
                            <Typography>{item.tags}</Typography>
                        </Grid>
                        <Grid item xs={12} style={{ display: "flex" }}>
                            <Typography style={{ fontWeight: "bold" }}>User :</Typography>
                            <Typography>{!!item.user && item.user.name}</Typography>
                        </Grid>
                        <Grid item xs={12} style={{ display: "flex" }}>
                            <Typography style={{ fontWeight: "bold" }}>Github Name :</Typography>
                            <Typography>{!!item.user && item.user.github_username}</Typography>
                        </Grid>
                        <Grid item xs={12} style={{ display: "flex" }}>
                            <Typography style={{ fontWeight: "bold" }}>Website URL :</Typography>
                            <Typography>{!!item.user && item.user.website_url}</Typography>
                        </Grid>
                        <Grid item xs={12} style={{ display: "flex" }}>
                            <Typography style={{ fontWeight: "bold" }}>Organisation Name :</Typography>
                            <Typography>{!!item.organization && item.organization.name}</Typography>
                        </Grid>
                        <Grid item xs={12} style={{ display: "flex" }}>
                            <Typography style={{ fontWeight: "bold" }}>Slug :</Typography>
                            <Typography>{!!item.organization && item.organization.slug}</Typography>
                        </Grid>
                        <Grid item xs={12} style={{ display: "flex" }}>
                            <Typography style={{ fontWeight: "bold" }}>Flare Tag :</Typography>
                            <Typography>{!!item.flare_tag && item.flare_tag.name}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
};

export default ViewDetails;