import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ breakpoints, palette }) => ({
  progress: {
    position: 'fixed',
    left: '280px',
    right: '0',
    top: '64px',
    zIndex: 1100,

    [breakpoints.down('sm')]: {
      left: '0',
    },

    [breakpoints.down('xs')]: {
      top: '56px',
    },
  },

  pagination: {
    display: 'flex',
    justifyContent: 'center',
    margin: '24px 0 0',

    '& *:not(.Mui-selected)': {
      color: `${palette.text.primary} !important`,
    },
  },

  dataContainer: {
    marginTop: '16px',
  },

  lottie: {
    height: '240px',
    marginTop: '-40px',
    pointerEvents: 'none',
  },

  lottieDescription: {
    textAlign: 'center',
  },
}));