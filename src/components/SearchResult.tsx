import { Avatar, Button, Card, CardHeader, Grid, Typography } from "@material-ui/core";
import { Favorite, Visibility } from "@material-ui/icons";
import React from "react";

export default function SearchResult(props) {
    return(
        <Card variant="outlined" elevation={0}>
            <CardHeader
            avatar={<Avatar src={props.owner.picture.thumbnail}/>}
            title={<Typography variant="h6">{props.title}</Typography>}
            subheader={<Typography variant="caption">{props.description}</Typography>}
            action={
                <Grid container>
                    <Grid item>
                        <Button startIcon={<Visibility/>} disabled>
                            {props.views}
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button startIcon={<Favorite/>} disabled>
                            {props.likes}
                        </Button>
                    </Grid>
                </Grid>
            }
            />
        </Card>
    )
}