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
                avatar={<Avatar/>}
                title={<Typography variant="body1">Prénom Nom</Typography>}
                subheader={<Typography variant="caption">Docteur,..</Typography>}
                />
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item container direction="column" justifyContent="center">
                            <Typography variant="h4">
                                Post Title
                            </Typography>
                            <Grid item container justifyContent="flex-start" alignItems="flex-start">
                                <Button startIcon={<Visibility/>} disabled color="secondary">100k</Button>
                                <Button startIcon={<Favorite/>} disabled>100k</Button>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" justifyContent="center">
                            <Typography variant="h6">
                                Description
                            </Typography>
                            <Typography variant="caption">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellat reprehenderit aperiam, soluta explicabo quaerat!
                                Adipisci animi ut fuga autem qui. Totam, odio id alias voluptatum voluptatem saepe perspiciatis nobis?
                            </Typography>
                        </Grid>
                        <Grid item container direction="column" justifyContent="center" spacing={1}>
                        <Grid item>
                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nesciunt nam optio laudantium animi ullam sapiente impedit esse similique, tenetur eos iure facilis tempore. Quo velit at amet obcaecati tempora!
                                Eum voluptatibus ea optio facere nobis quidem eaque dolorem architecto esse est! Modi recusandae eaque, commodi corrupti, excepturi deleniti libero nam, ipsa doloremque aperiam magnam incidunt at quia quo culpa!
                                Molestias cumque possimus temporibus incidunt, praesentium qui animi beatae facilis autem doloribus similique quidem sit perspiciatis debitis aut quod rem iste veniam. Sunt, magni harum laboriosam vitae magnam aliquid nihil.
                                Enim laboriosam pariatur facilis dolorum quis id illum provident
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nesciunt nam optio laudantium animi ullam sapiente impedit esse similique, tenetur eos iure facilis tempore. Quo velit at amet obcaecati tempora!
                                Eum voluptatibus ea optio facere nobis quidem eaque dolorem architecto esse est! Modi recusandae eaque, commodi corrupti, excepturi deleniti libero nam, ipsa doloremque aperiam magnam incidunt at quia quo culpa!
                                Molestias cumque possimus temporibus incidunt, praesentium qui animi beatae facilis autem doloribus similique quidem sit perspiciatis debitis aut quod rem iste veniam. Sunt, magni harum laboriosam vitae magnam aliquid nihil.
                                Enim laboriosam pariatur facilis dolorum quis id illum provident
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nesciunt nam optio laudantium animi ullam sapiente impedit esse similique, tenetur eos iure facilis tempore. Quo velit at amet obcaecati tempora!
                                Eum voluptatibus ea optio facere nobis quidem eaque dolorem architecto esse est! Modi recusandae eaque, commodi corrupti, excepturi deleniti libero nam, ipsa doloremque aperiam magnam incidunt at quia quo culpa!
                                Molestias cumque possimus temporibus incidunt, praesentium qui animi beatae facilis autem doloribus similique quidem sit perspiciatis debitis aut quod rem iste veniam. Sunt, magni harum laboriosam vitae magnam aliquid nihil.
                                Enim laboriosam pariatur facilis dolorum quis id illum provident
                            </Typography>
                        </Grid>
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