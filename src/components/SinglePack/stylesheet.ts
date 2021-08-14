import { makeStyles } from '@material-ui/core'

export default makeStyles({
  conatainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '45px'
  },
  mainPackBox: {
    width: '600px',
    height: '711px',
    borderRadius: '3px',
    background: 'rgba(54, 54, 54, 0.4)',
    '&:nth-child(1)': {
      background: 'transparent'
    }
  },
  contentBox: {
    paddingLeft: '40px',
    paddingRight: '40px',
    paddingTop: '40px',
    paddingBottom: '40px'
  },
  mainHeading: {
    fontSize: '40px',
    lineHeight: '40px',
    color: '#FBA428',
    paddingBottom: '25px'
  },
  cardNumber: {
    fontSize: '17px',
    lineHeight: '23.8px',
    fontWeight: 400,
    paddingBottom: '40px',
  },
  pricing: {
    fontSize: '26px',
    fontWeight: 400,
    lineHeight: '22.7px',
    paddingBottom: '40px',
  },
  counterContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: '25px',
  },
  counterBox: {
    border: '2.2px solid rgba(54, 54, 54, 0.4)',
    width: '100px',
    borderRadius: '4px',
    marginRight: '30px',
    height: '48px'
  },
  counterButtons: {
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  incrementButton: {
    color: '#FBA428',
    cursor: 'pointer'
  },
  decrementButton: {
    color: '#FBA428',
    cursor: 'pointer',
  },
  buyButtonTypo: {
    fontWeight: 900,
    fontSize: '17px',
    letterSpacing: '3%',
    lineHeight: '18px'
  },
  totalAmount: {
    fontSize: '14px',
    fontWeight: 200,
    color: '#D3D3D3',
    paddingBottom: '40px'
  },
  packDetailsTypo: {
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: '1%',
    lineHeight: '13.97px',
    paddingBottom: '25px'
  },
  descriptionTypo1: {
    fontSize: '14px',
    fontWeight: 200,
    lineHeight: '19.6px',
    color: '#D3D3D3',
    paddingBottom: '25px'
  }
})