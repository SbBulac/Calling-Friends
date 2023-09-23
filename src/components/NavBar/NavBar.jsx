import React, { useContext } from 'react'
import { Box, Button, Drawer, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import NavListDrawer from './NavListDrawer';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import { CFContext } from '../Context/AppContext';
import { NavLink } from 'react-router-dom';

const navArrayLinks = [
    { title: 'Apuestas', path: '/apuestas', icon: <AttachMoneyIcon /> },
    { title: 'Trabajos', path: '/trabajos', icon: <WorkIcon /> },
    { title: 'perfil', path: '/profile', icon: <PersonIcon /> },
]

const NavBar = () => {

    const { drawer, setDrawer } = useContext(CFContext)

    return (
        <Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }} >
                <IconButton size='large' onClick={() => setDrawer(true)} >
                    <MenuIcon fontSize='large' sx={{ fill: '#FFFFFF' }} />
                </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                {navArrayLinks.map((item) => (
                    <Button startIcon={item.icon} sx={{ color: '#FFF' }} component={NavLink} to={item.path} key={item.title} >{item.title}</Button>
                ))}
            </Box>

            <Drawer sx={{ display: { xs: 'block', md: 'none' } }} open={drawer} anchor='left' onClose={() => setDrawer(false)}>
                <NavListDrawer navArrayLinks={navArrayLinks} />
            </Drawer>
        </Box>
    )
}

export default NavBar