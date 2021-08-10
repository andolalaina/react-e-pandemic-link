import { Avatar, Button, Card, CardHeader, Grid, Typography } from "@material-ui/core";
import { Favorite, Visibility } from "@material-ui/icons";
import React from "react";

export default function SearchResult() {
    return(
        <Card variant="outlined" elevation={0}>
            <CardHeader
            avatar={<Avatar></Avatar>}
            title={<Typography variant="h6">Titre</Typography>}
            subheader={<Typography variant="caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veniam quia fugiat, necess
            itatibus ab consequuntur aliquam natus distinctio quisquam aut nam sed sequi placeat ipsam 
            nesciunt dolorum molestias ex cumque.</Typography>}
            action={
                <Grid container>
                    <Grid item>
                        <Button startIcon={<Visibility/>} disabled>
                            100k
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button startIcon={<Favorite/>} disabled>
                            100k
                        </Button>
                    </Grid>
                </Grid>
            }
            />
        </Card>
    )
}