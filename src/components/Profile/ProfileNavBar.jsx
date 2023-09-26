import { Box, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import React from 'react'

const navProfileArrayLinks = [
    { title: 'Datos', path: '/profile', icon: <PersonOutlineOutlinedIcon /> },
    { title: 'Apuestas', path: '/profile/bets', icon: <AttachMoneyIcon /> },
    { title: 'Finanzas', path: '/profile/finance', icon: <PriceChangeOutlinedIcon /> },
]

const ProfileNavBar = () => {
    return (
        <Box sx={{
            mt: .3,
            backgroundColor: '#169AD7',
            height: 63,
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'space-around', lg: 'flex-end' },
            gap: { lg: 10 },
            pr: { lg: 5 }
        }}>
            {navProfileArrayLinks.map((item) => (
                <Button startIcon={item.icon} sx={{ color: '#FFF' }} component={NavLink} to={item.path} key={item.title} >{item.title}</Button>
            ))}
        </Box>
    )
}

export default ProfileNavBar