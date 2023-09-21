import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CFContext } from '../Context/AppContext'

const NavListDrawer = ({ navArrayLinks }) => {
    const { setDrawer } = useContext(CFContext)
    return (
        <Box component='nav' >
            <List sx={{ width: '15rem' }} >
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