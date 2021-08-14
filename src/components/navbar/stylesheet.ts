import { makeStyles } from '@material-ui/core'

export default makeStyles({
  navbarContainer: {
    background: '#161616',
    height: '95px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1,
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
  navbarTypo: {
    fontFamily: 'Accent'
  },
  navbarIconsTypo: {
    paddingLeft: '10px',
    fontFamily: 'Accent'
  },
  eSportsTitle: {
    height: '70px',
    backgroundColor: '#373FC5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingRight: '4rem',
    paddingLeft: '4rem',
    position: 'fixed',
    width: '100%',
    top: '98px',
    zIndex: 1
  },
});