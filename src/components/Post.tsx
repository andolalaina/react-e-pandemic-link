import React from 'react';
import { Card, Grid, Container, Avatar, Typography, Button, CardHeader, CardActions, CardContent, Select, MenuItem, InputLabel } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Favorite, ThumbDown, ThumbUp, Visibility } from '@material-ui/icons';
import { isClassExpression } from 'typescript';


const useStyles = makeStyles((theme: Theme) =>
createStyles({
    card: {
        padding: "1rem",
        margin: "1rem 0 1rem 0"
    },
    alignRight: {
        marginRight: 0
    }
}),
);

export default function Post(props) {
    const classes = useStyles();
    return(
        <Container maxWidth="md">
        <Card variant="outlined" className={classes.card}>
                <CardHeader
                avatar={<Avatar src={props.owner.picture.thumbnail}/>}
                title={<Typography variant="body1">{props.owner.name.first} {props.owner.name.last}</Typography>}
                />
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item container direction="column" justifyContent="center">
                            <Typography variant="h4">
                                {props.title}
                            </Typography>
                            <Grid item container justifyContent="flex-start" alignItems="flex-start">
                                <Button startIcon={<Visibility/>} disabled color="secondary">{props.views}</Button>
                                <Button startIcon={<Favorite/>} disabled>{props.likes}</Button>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" justifyContent="center">
                            <Typography variant="h6">
                                Description
                            </Typography>
                            <Typography variant="caption">
                                {props.description}
                            </Typography>
                        </Grid>
                        <Grid item container direction="column" justifyContent="center" spacing={1}>
                            {props.paragraphes.map((paragraph) => (
                                <Grid item>
                                    <Typography variant="body1">
                                        {paragraph}
                                    </Typography>
                                </Grid>
                            ))}
                    </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                Cela vous a-t-il aidé ?
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                            variant="text"
                            color="primary"
                            startIcon={<ThumbUp/>}>
                                Oui
                            </Button>
                            <Button
                            variant="text"
                            color="secondary"
                            startIcon={<ThumbDown/>}>
                                Non
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
        </Card>
        
        <Grid container justifyContent="flex-end" alignItems="center" spacing={2}>
            <Grid item>
                <InputLabel id="comments-sort">Trier par</InputLabel>
            </Grid>
            <Grid item>
                <Select labelId="comment-sort">
                    <MenuItem value="top">Pertinence</MenuItem>
                    <MenuItem value="date">Date</MenuItem>
                </Select>
            </Grid>
        </Grid>
        {props.children}
        </Container>
    )
}