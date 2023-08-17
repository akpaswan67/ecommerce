import {React,useState,useContext} from 'react'
import { Badge, Box, Button, Typography,styled } from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';
import {useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
//components
import LoginDialog from '../login/LoginDialog';
import  Profile  from './Profile';
import { useSelector} from 'react-redux';




const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    '& > *': {
        marginRight: '40px !important',
        fontSize:'16px',
        alignItems: 'center',
    },
	[theme.breakpoints.down('md')]: {
		display: 'block'
	}
}));
const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));

const LoginButton = styled(Button)(({ theme }) => ({
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 30,
    boxShadow: 'none',
	// marginRight:40,
	// fontSize: 16,
    [theme.breakpoints.down('md')]: {
        background: '#2874f0',
        color: '#FFFFFF'
    }
}));



const CustomButtons = () => {
    const navigate =useNavigate();
    const OpenCart=()=>{
        navigate('/cart');
    }


	const [open,setOpen]=useState(false);
	const {account,setAccount}=useContext(DataContext);
	const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;

	const openDialog =()=>{
		setOpen(true);
	}
  return (
	<Wrapper>
		{
            account ?<Profile account={account} setAccount={setAccount}/>:
			<LoginButton variant='Contained' onClick={()=>openDialog()}>Login</LoginButton>
                
                
        }
		<Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
		<Typography style={{marginTop:3}}>More</Typography>
		<Container to="/cart">
            <Badge badgeContent={cartItems?.length} color="secondary">
			    <ShoppingCart/>
            </Badge>
			<Typography style={{ marginLeft: 10 }} onClick={()=> OpenCart()} >Cart</Typography>
		</Container>
		<LoginDialog open={open} setOpen={setOpen}/>
	</Wrapper>
  )
}

export default CustomButtons