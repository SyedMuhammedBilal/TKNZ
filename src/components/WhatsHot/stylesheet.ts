import { makeStyles } from '@material-ui/core'
import WhatsHotBackground from '../../assets/WhatsHotBackground/WhatsHotBackground.png'

export default makeStyles({
  whatsHotContainer: {
    backgroundImage: `url(${WhatsHotBackground})`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    height: 'auto',
    marginTop: '100px',
    marginBottom: '50px'
  },
  whatsHotTypographyContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: '6.5rem',
    paddingRight: '6.5rem',
    paddingTop: '45px',
    '@media (max-width: 350px)': {
    paddinLeft:'1.5rem !important' 
    },

  },
  whatsHotTypo1: {
    fontSize: '75px',
    fontWeight: 700,
    fontFamily: 'Accent',
    '@media (max-width: 810px)': {
      fontSize: '60px'
    },
    '@media (max-width: 645px)': {
      fontSize: '42px'
    },
  },
  whatsHotTypo2: {
    fontSize: '25px',
    width: '683px',
    fontWeight: 300,
    fontFamily: 'FiraSansBody',
    '@media (max-width: 810px)': {
      fontSize: '20px',
      width: '500px'
    },
    '@media (max-width: 645px)': {
      fontSize: '16px',
      width: '370px'
    },
    '@media (max-width: 500px)': {
      fontSize: '12px',
      width: '220px'
    }
  },
  whatsHotCardsContainer: {
    paddingLeft: '6.5rem',
    paddingRight: '6.5rem',
    marginTop: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    '@media (max-width: 767px)': {
      justifyContent: 'center',
    }
  },
  singlePackTokenz: {
    width: '280px',
    height: 'auto',
    borderRadius: '3px',
    backgroundColor: '#161616',
    border: '1px solid rgba(54, 54, 54, 1)',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    '@media (max-width: 767px)': {
      width: 'max-content',
      marginBottom: '2rem'
    }
  },
  singlePackImage: {
    width: '-webkit-fill-available'
  },
  singlePackContent: {
    paddingLeft: '1rem',
    paddingRight: '1rem'
  },
  singlePackMainHeading: {
    fontWeight: 900,
    fontSize: '17px',
    lineHeight: '23.8px',
    fontFamily: 'FiraSansMedium',
    paddingBottom: '5px'
  },
  singlePackDescription: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '19.6px',
    color: '#D3D3D3',
    fontFamily: 'FiraSansBody'
  },
  singlePackPrices: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '20px',
    cursor: 'pointer',
    fontFamily: 'FiraSansBody'
  },
  packsPricingTypo: {
    fontWeight: 300
  },
  singlePackListings: {
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '10px'
  },
  packsRarity: {
    display: 'flex'
  },
  packsRarityTypo: {
    fontSize: '14px',
    color: '#d3d3d3',
    fontWeight: 400,
    paddingRight: '5px',
    fontFamily: 'FiraSansMedium'
  },
  PacksListingTypo: {
    fontSize: '14px',
    fontWeight: 400,
    fontFamily: 'FiraSansBody'
  },
  PacksListingNumbersTypo: {
    fontSize: '14px',
    fontWeight: 400,
    color: '#d3d3d3',
    fontFamily: 'FiraSansBody'
  },
  seeMoreTokenz: {
    width: '280px',
    height: '450px',
    borderRadius: '3px',
    backgroundColor: '#363636',
    border: '1px solid rgba(54, 54, 54, 1)',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    '@media (max-width: 767px)': {
      // width: '-webkit-fill-available',
      marginBottom: '2rem'
    },
    '&:hover': {
      backgroundColor: '#610C8D',
      transition: '1s ease-in-out'
    }
  },
  seeMoreImage: {
    width: 'auto'
  },
  seeMoreContent: {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '5.5rem'
  },
  seeMorePrices: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '20px',
    cursor: 'pointer'
  },
  seeMoreTypo: {
    fontWeight: 300
  },
  seeMorePacks: {
    marginTop: '60px'
  },
  seeMorePacksImage: {
    padding: '13px'
  }
})