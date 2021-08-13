import { makeStyles } from '@material-ui/core'

export default makeStyles({
  navbarContainer: {
    background: '#161616',
    height: '95px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  navbarWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 0.4,
    // paddingLeft: '10rem',
    // paddingRight: '10rem'
  },
  navbarLogo: {
    width: '125px',
    height: '35px'
  },
  navbarIcons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navbarIconsTypo: {
    paddingLeft: '10px'
  },
  eSportsTitle: {
    height: '70px',
    backgroundColor: '#373FC5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingRight: '4rem',
    paddingLeft: '4rem'
  },
});