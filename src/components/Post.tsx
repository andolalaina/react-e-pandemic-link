import { Card, Grid, Container, Avatar, Typography, Button, CardHeader, CardActions, CardContent } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Favorite, ThumbDown, ThumbUp, Visibility } from '@material-ui/icons';
import { useParams } from 'react-router-dom';
import { posts, comments, users } from '../database/db.json';
import Comment from './Comment';

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

export default function Post() {
    const classes = useStyles();
    const {post_id} = useParams();
    const post = posts.find((post) => post.id === post_id);
    const owner = users.find((user) => user.id === post.owner);
    const commentList = comments.filter((comment) => comment.post === post.id);

    return(
        <Container maxWidth="md">
        <Card variant="outlined" className={classes.card}>
                <CardHeader
                avatar={<Avatar/>}
                title={<Typography variant="body1">{owner.firstname} {owner.lastname}</Typography>}
                />
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item container direction="column" justifyContent="center">
                            <Typography variant="h4">
                                {post.title}
                            </Typography>
                            <Grid item container justifyContent="flex-start" alignItems="flex-start">
                                <Button startIcon={<Visibility/>} disabled color="secondary">{post.views}</Button>
                                <Button startIcon={<Favorite/>} disabled>{post.likes}</Button>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" justifyContent="center">
                            <Typography variant="h6">
                                Description
                            </Typography>
                            <Typography variant="caption">
                                {post.description}
                            </Typography>
                        </Grid>
                        <Grid item container direction="column" justifyContent="center" spacing={1}>
                            <Typography variant="body1">
                                {post.content}
                            </Typography>
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
        {commentList.map((comment) => 
        (<Comment owner={users.find((user) => user.id === comment.owner)} commentText={comment.commentText} likes={comment.likes}/>)
        )}
        </Container>
    )
}