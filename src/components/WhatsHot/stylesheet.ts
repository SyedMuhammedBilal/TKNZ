import { makeStyles } from '@material-ui/core'
import WhatsHotBackground from '../../assets/WhatsHotBackground/WhatsHotBackground.png'

export default makeStyles({
  whatsHotContainer: {
    backgroundImage: `url(${WhatsHotBackground})`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    marginTop: '100px'
  },
  whatsHotTypographyContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: '6.5rem',
    paddingRight: '6.5rem',
    paddingTop: '45px'
  },
  whatsHotTypo1: {
    fontSize: '75px',
    fontWeight: 700
  },
  whatsHotTypo2: {
    fontSize: '25px',
    width: '683px',
    fontWeight: 300
  },
  whatsHotCardsContainer: {
    paddingLeft: '6.5rem',
    paddingRight: '6.5rem',
    marginTop: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  singlePackTokenz: {
    width: '280px',
    height: '415px',
    borderRadius: '3px',
    backgroundColor: '#161616',
    border: '1px solid rgba(54, 54, 54, 1)',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer'
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
    lineHeight: '23.8px'
  },
  singlePackDescription: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '19.6px',
    color: '#D3D3D3'
  },
  singlePackPrices: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '20px',
    cursor: 'pointer'
  },
  packsPricingTypo: {
    fontWeight: 300
  },
  singlePackListings: {
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  packsRarity: {
    display: 'flex'
  },
  packsRarityTypo: {
    fontSize: '14px',
    color: '#d3d3d3',
    fontWeight: 400,
    paddingRight: '5px'
  },
  PacksListingTypo: {
    fontSize: '14px',
    fontWeight: 400,
  },
  PacksListingNumbersTypo: {
    fontSize: '14px',
    fontWeight: 400,
    color: '#d3d3d3'
  }
})