import { FormLabel, FormControlLabel, Radio, Button, Paper, Container, Grid, TextField, Typography, FormControl, makeStyles, createStyles, Theme, RadioGroup } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => 
createStyles({
    formControl: {
        minWidth: 120,
    },
    topText: {
        margin: "2rem auto 1rem auto"
    }
}));

export default function Search(props) {
    const classes = useStyles();
    return(
        <Container maxWidth="md">
            <Grid container justifyContent="space-around" spacing={4} className={classes.topText}>
                <Grid item>
                    <Typography variant="h4">
                        Recherchez. Apprenez. Survivez.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} container alignItems="flex-end" spacing={2} justifyContent="space-around">
                    <Grid item xs={8} sm={10}>
                        <TextField id="search-text" label="Recherche" fullWidth value={props.searchValue} onChange={(e) => props.setSearchValue(e.target.value)}/>
                    </Grid>
                    <Grid item xs={4} sm={2}>
                        <Button variant="contained" color="primary" startIcon={<SearchOutlined/>} onClick={props.handleSearch}>
                            Rechercher
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} container>
                    <Grid item xs={6}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Catégorie</FormLabel>
                            <RadioGroup aria-label="category" name="category" value={props.categoryFilter} onChange={(e) => props.setCategoryFilter((e.target as HTMLInputElement).value)}>
                                <FormControlLabel value="health" control={<Radio />} label="Santé" />
                                <FormControlLabel value="survival" control={<Radio />} label="Guide de survie" />
                                <FormControlLabel value="food" control={<Radio />} label="Alimentation" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Paper>
                        <Grid container direction="column" alignItems="center">
                            {(props.children.length > 0)?(props.children):"Aucun résultat"}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            </Container>
    )
}