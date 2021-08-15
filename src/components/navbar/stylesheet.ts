import { makeStyles } from '@material-ui/core'

export default makeStyles({
  navbarContainer: {
    background: '#161616',
    height: '95px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    // position: 'fixed',
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
    justifyContent: 'center',
    '@media (max-width:1200px)':{
      display:'none'
    }
  },
  navbarTypo: {
    fontFamily: 'Accent',
    '@media (max-width:1200px)':{
      display:'none'
    }
  },
  navbarIconsTypo: {
    paddingLeft: '10px',
    fontFamily: 'Accent',
    '@media (max-width:1200px)':{
      display:'none'
    }
  },
  eSportsTitle: {
    height: '70px',
    backgroundColor: '#373FC5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingRight: '4rem',
    paddingLeft: '4rem',
    // position: 'fixed',
    width: '100%',
    top: '98px',
    zIndex: 1,
    '@media (max-width:1200px)':{
      display:'none'
    }
  },
  burgerIcon:{
    display:'none',
    '@media (max-width:1200px)':{
      display : "inline"
    }
    
  },
  // hamburger
  hamburgerContainer:{
    width:"100%",
    height:'100vh',
    background: '#161616',
  },
  hamburgerTop:{
    display: 'flex',
    flexDirection: "row",
    alignItems: 'baseline',
    justifyContent: 'space-between',
    width: '98%',
    marginTop: '20px'
  },
  hamTypo:{
    fontFamily: 'Accent',
    fontSize:"18px",
    padding:'3px'
    
  },
  menu:{
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: '50%',
    marginTop: '150px',
    textAlign:"center"
},
hamIcon:{
  display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}
  
});