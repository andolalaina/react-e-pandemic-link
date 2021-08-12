import { Avatar, Card, CardActions, CardContent, CardHeader, createStyles, makeStyles, Theme, Typography } from "@material-ui/core"
import { Grid, Button } from "@material-ui/core";
import { Visibility, Favorite } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
            card: {
                padding: '1rem',
                margin: '.5rem 0 .5rem 1.5rem',
                borderLeft: '2px solid',
                borderLeftColor: 'yellow'
            }
        })
);

export default function Comment(props) {
    const classes = useStyles();
    return (
        <Card
        className={classes.card}
        >
            <CardHeader
            avatar={<Avatar src={props.owner.picture.thumbnail}/>}
            title={<Typography variant="body1">{props.owner.name.first} {props.owner.name.last}</Typography>}/>
            <CardContent>
                <Typography variant="caption">{props.commentText}</Typography>
            </CardContent>
            <CardActions>
                <Grid container direction="row" justifyContent="flex-end" alignItems="flex-start">
                    <Button startIcon={<Favorite/>} disabled>{props.likes}</Button>
                    <Button variant="outlined" color="secondary">J'adore</Button>
                </Grid>
            </CardActions>
        </Card>
    )
}