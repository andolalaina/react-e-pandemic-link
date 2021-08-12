import { FormLabel, FormControlLabel, Radio, Button, Paper, Container, Grid, TextField, Typography, Select, MenuItem, FormControl, InputLabel, makeStyles, createStyles, Theme, RadioGroup } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme: Theme) => 
createStyles({
    formControl: {
        minWidth: 120,
    }
}));

export default function Search(props) {
    const classes = useStyles()
    return(
        <Container maxWidth="md">
        <Grid container spacing={3}>
            <Grid item xs={12} container alignItems="flex-end" spacing={2} justifyContent="space-around">
                <Grid item xs={8} sm={10}>
                    <TextField id="search-text" label="Recherche" fullWidth/>
                </Grid>
                <Grid item xs={4} sm={2}>
                    <Button variant="contained" color="primary" startIcon={<SearchOutlined/>}>
                        Rechercher
                    </Button>
                </Grid>
            </Grid>
            <Grid item xs={12} container>
                <Grid item xs={6}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Catégorie</FormLabel>
                        <RadioGroup aria-label="category" name="category">
                            <FormControlLabel value="health" control={<Radio />} label="Santé" />
                            <FormControlLabel value="survival" control={<Radio />} label="Guide de survie" />
                            <FormControlLabel value="food" control={<Radio />} label="Alimentation" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="search-sort">Trier par</InputLabel>
                        <Select labelId="search-sort" autoWidth>
                            <MenuItem value="top">Pertinence</MenuItem>
                            <MenuItem value="date">Date de publication</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Paper>
                    <Grid container direction="column">
                        {props.results}
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
        </Container>
    )
}