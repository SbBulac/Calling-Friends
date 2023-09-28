import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CFContext } from '../Context/AppContext'

const NavListDrawer = ({ navArrayLinks }) => {
    const { setDrawer } = useContext(CFContext)
    return (
        <Box component='nav' >
            <List sx={{ width: '15rem', pt: 0 }} >
                <Box sx={{
                    backgroundColor: '#169AD7'
                }}>
                    <Box component='img' src='https://callingfriends.com/assets/main.webp' width='12rem' />
                </Box>
                {navArrayLinks.map((item) => (
                    <ListItem key={item.title}>
                        <ListItemButton onClick={() => setDrawer(false)} component={NavLink} to={item.path} >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.title}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}

export default NavListDrawer