import { Link as RouterLink} from 'react-router-dom';
import { Link } from '@material-ui/core';
import { AppBar, createStyles, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  btnActive: {
    color: "red"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <header>
      <AppBar position="static">
        <Toolbar className="toolBar">
            <Typography variant="h6" className={classes.title}>
              <Link component={RouterLink} to="/" color="inherit">
                  E-pandemic-link
              </Link>
            </Typography>
            <Typography variant="body1">
              Coded By : RANDRIAJAOSON Michael - ESIIA5
            </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}
