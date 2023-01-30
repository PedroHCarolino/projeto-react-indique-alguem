import { Grid, Paper } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useStyles } from './stylesCards';

const Cards = () => {
  const classes = useStyles();

  return (
    <>
      <Skeleton className={classes.paginationSkeleton} variant="rect" />

      <Grid component="section" container spacing={3}>
        <Grid
          item
          xs={12}
          sm={6}
          lg={4}
          xl={3}
        >
          <Paper
            className={classes.container}
            component="section"
          >
            <Skeleton
              className={classes.avatarSkeleton}
              variant="circle"
            />

            <Skeleton
              className={classes.nameSkeleton}
              variant="rect"
            />

            <Skeleton
              className={classes.usernameSkeleton}
            />

            <Skeleton
              className={classes.emailSkeleton}
              variant="rect"
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Cards;