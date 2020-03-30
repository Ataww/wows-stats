import React, { Suspense } from "react";
import { BrowserRouter, Link as RouterLink, LinkProps, Route, Switch } from "react-router-dom";
import { Loading } from "./components";
import { AppBar, Container, CssBaseline, Grid, Link, makeStyles, Toolbar, Typography } from "@material-ui/core";

const Profile = React.lazy(() => import("./pages/Profile"));
const Search = React.lazy(() => import("./pages/Search"));
const Season = React.lazy(() => import("./pages/Season"));
const GraphQl = React.lazy(() => import("./pages/Graphql"));
const QueryBuilder = React.lazy(() => import("./pages/QueryBuilder"));

const appStyle = makeStyles(theme => ({
    app: {
      display: "flex",
      width: 700,
      margin: "auto"
    },
    header: {
      backgroundColor: "#282c34",
      minHeight: "10vh",
      fontSize: "calc(10px + 2vmin)",
      color: "white"
    },
    title: {
      flexGrow: 1,
      whiteSpace: "nowrap"
    },
    toolbarContent: {
      display: "flex",
      justify: "flex-end",
      alignItems: "center"
    },
    appBarSpacer: theme.mixins.toolbar,
    link: {
      color: "#61dafb",
      paddingRight: "1ch",
      paddingLeft: "1ch"
    },
    content: {
      flexGrow: 1
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    }
  }))
;

const App: React.FC = () => {
  const classes = appStyle();
  const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) =>
    <RouterLink innerRef={ref} {...props}/>);
  return (
    <div className={classes.app}>
      <CssBaseline/>
      <BrowserRouter>
        <AppBar position={"absolute"} className={classes.header}>
          <Toolbar>
            <Typography className={classes.title} component={"h1"} variant={"h6"} color={"inherit"}>Ranked
              stuffy stuff</Typography>
            <Grid justify={"flex-end"} container spacing={1}>
              <Link className={classes.link} component={AdapterLink} to={"/"}>Home</Link>
              <Link className={classes.link} component={AdapterLink} to={"/query"}>Query</Link>
              <Link className={classes.link} component={AdapterLink} to={"/graphql"}>GraphQl</Link>
            </Grid>
          </Toolbar>
        </AppBar>

        <main className={classes.content}>
          <div className={classes.appBarSpacer}/>
          <Container maxWidth={"lg"} className={classes.container}>
            <Suspense fallback={<div><Loading/></div>}>
              <Switch>
                <Route exact path="/" component={Search}/>
                <Route path="/graphql" component={GraphQl}/>
                <Route
                  exact
                  path="/profile/:id"
                  render={({ match: { params: { id } } }) =>
                    <Switch>
                      <Route path={"/season/:season"}
                             render={({ match: subMatch }) =>
                               <Season id={id}
                                       seasonId={subMatch.params.season}/>}/>
                      <Route render={() =>
                        <Profile id={id}/>}/>
                    </Switch>
                  }
                />
                <Route path={"/query"} component={QueryBuilder}/>
              </Switch>
            </Suspense>
          </Container>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
