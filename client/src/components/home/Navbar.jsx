import React from 'react'

import { Box ,styled,Typography} from '@mui/material';
import { navData } from '../../constants/data';

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    overflowInline:'none',
    justifyContent: 'space-between',
    margin: '50px 0  0  0 !important',
    overflow: 'overlay',
    [theme.breakpoints.down('lg')]: {
        margin: '0px !important'
    },
}));

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center;
`;
const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;

const Navbar = () => {
  return (
	<Component>
		{
			navData.map(data => (
                    <Container>
                        <img src={data.url} alt="nav" />
                        <Text>{data.text}</Text>
                    </Container>
            ))
		}
	</Component>
  )
}
//bannner
export default Navbar