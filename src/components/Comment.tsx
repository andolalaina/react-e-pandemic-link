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

export default function Comment() {
    const classes = useStyles();
    return (
        <Card
        className={classes.card}
        >
            <CardHeader
            avatar={<Avatar/>}
            title={<Typography variant="body1">Prénom Nom</Typography>}/>
            <CardContent>
                <Typography variant="caption">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione cumque omnis repellat tenetur eligendi. Enim assumenda quia commodi ut cupiditate odit aspernatur officiis delectus earum laboriosam, modi suscipit et iste!</Typography>
            </CardContent>
            <CardActions>
                <Grid container direction="row" justifyContent="flex-end" alignItems="flex-start">
                    <Button startIcon={<Favorite/>} disabled>100k</Button>
                    <Button variant="outlined" color="secondary">J'adore</Button>
                </Grid>
            </CardActions>
        </Card>
    )
}