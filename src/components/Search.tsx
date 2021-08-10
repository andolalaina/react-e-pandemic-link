import { Button, Paper, Container, Grid, TextField, Typography } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import React from "react";

export default function Search(props) {
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
            <Grid item xs={12}>
                <Paper>
                    <form>
                        {props.filter}

                    </form>
                    xxxxxxxxxxxxx
                </Paper>
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