import { Box, Button, Card, CardActionArea, CardMedia, Typography } from '@mui/material'
import React from 'react'

const PopularBets = () => {
    return (
        <Card sx={{ borderRadius: 5 }}>
            <CardActionArea sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 2,
                p: 2
            }}>
                <CardMedia
                    sx={{ width: 80, borderRadius: '100%' }}
                    component='img'
                    src='https://callingfriends.com/assets/Images/Default_icon_profile.webp' />
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: .7
                }}>
                    <Box>
                        <Typography sx={{
                            fontSize: { xs: 15 }
                        }} >Descripción</Typography>
                        <Typography sx={{
                            fontSize: { xs: 15, fontWeight: 'bold' }
                        }} >Termina: NaN/NaN/NaN</Typography>
                        <Typography sx={{
                            fontSize: { xs: 15, fontWeight: 'bold' }
                        }} >Nonto: Euros</Typography>
                    </Box>
                    <Button sx={{
                        borderRadius: 5,
                        fontSize: 14,
                        textTransform: 'none',
                        lineHeight: 1.5,
                        fontWeight: 'bold',
                        maxWidth: { lg: 260 }
                    }} variant='contained'>¿Crees que pasará lo contrario? ¡Apuesta!</Button>
                </Box>
            </CardActionArea>
        </Card>
    )
}

export default PopularBets