import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '90vmin',
    marginBottom: '6px',
  },
  blue: {
    padding: 'auto',
    backgroundColor: 'rgb(0, 0, 80)',
    boxShadow: '0 5px rgb(0, 0, 80)',
    transition: '2s',
    marginBottom: '6px',
  },
  activeBlue: {
    backgroundColor: 'rgb(0, 0, 235) !important',
    boxShadow: '0 5px rgb(0, 0, 180) !important',
    transition: '2s',
  },
  red: {
    padding: 'auto',

    backgroundColor: 'rgb(100, 0, 0)',
    boxShadow: '0 5px rgb(100, 0, 0)',
    transition: '2s',

    marginBottom: '6px',
  },
  activeRed: {
    backgroundColor: 'red !important',
    boxShadow: '0 5px rgb(200, 0, 0) !important',
    transition: '2s',
  },
  score: {
    textAlign: 'center',
    textShadow: 'thistle',
    color: 'white',
    fontSize: '20px',
    marginBottom: 0,
    width: '50%',
  },
}))