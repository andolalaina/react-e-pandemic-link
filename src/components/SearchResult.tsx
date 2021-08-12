import { Avatar, Button, Card, CardContent, CardHeader, Grid, Typography } from "@material-ui/core";
import { Favorite, Visibility, KeyboardArrowRight } from "@material-ui/icons";
import {Link} from 'react-router-dom';


export default function SearchResult(props) {
    return(
        <Card variant="outlined" elevation={0}>
            <CardHeader
            avatar={<Avatar/>}
            title={<Typography variant="h6">{props.title}</Typography>}
            subheader={<Typography variant="caption">{props.description}</Typography>}
            action={
                <Grid container direction="column" justifyContent="space-between">
                    <Grid item container>
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
                </Grid>
            }
            />
            <CardContent>
                <Grid container justifyContent="flex-end" alignItems="flex-start">
                    <Link to={"/"+props.id}>
                        <Button startIcon={<KeyboardArrowRight/>}>Voir la publication</Button>
                    </Link>
                </Grid>
            </CardContent>
        </Card>
    )
}