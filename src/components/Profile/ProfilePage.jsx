import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ProfileNavBar from './ProfileNavBar'

const ProfilePage = () => {
    return (
        <Box sx={{
            height: '21.5rem',
        }}>
            {/* primera parte */}
            <Box sx={{ height: '100%' }} >
                {/* fondo */}
                <Box sx={{ backgroundColor: '#b0b0b0', height: '100%', position: 'relative' }} >
                    {/* boton flotante */}
                    <Box sx={{
                        position: 'absolute',
                        display: 'flex',
                        float: 'right',
                        right: 20,
                        top: 20
                    }} >
                        <Button component='button' variant='contained' sx={{
                            borderRadius: 15,
                            fontSize: { xs: 9, sm: 15 },
                            fontWeight: 600,
                            px: 2,
                            textTransform: 'none',
                            letterSpacing: 1.6,

                        }}>Actualizar Portada</Button>
                    </Box>

                    {/* Usuario (avatar) */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column-reverse',
                        alignItems: 'center',
                        gap: 1,
                        position: 'absolute',
                        bottom: { xs: -10, lg: -40 },
                        left: { xs: 20, sm: 38, lg: 100 }
                    }}>
                        {/* Avatar del Usuario */}
                        <Box
                            component='img'
                            alt='Avatar del usuario'
                            src='https://callingfriends.com/assets/Images/Default_icon_profile.webp'
                            sx={{
                                borderRadius: '100%',
                                border: 4,
                                borderColor: '#FFF',
                                width: { xs: 135, sm: 205, lg: 190 },
                            }}
                        />
                        <Box>
                            {/* Actualizador de avatar */}
                            <Button component='button' variant='contained' sx={{
                                borderRadius: 15,
                                width: { xs: 120, sm: 190, md: 180 },
                                fontSize: { xs: 9, sm: 15 },
                                fontWeight: 600,
                                px: 1,
                                textTransform: 'none',
                                letterSpacing: 1.6
                            }}>Actualizar Avatar</Button>
                        </Box>
                    </Box>

                    {/* Usuario (Informacion) */}
                    <Box sx={{
                        position: 'relative',
                        width: { xs: 'max-content', lg: 730 },
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        justifyContent: { lg: 'space-between' },
                        float: { xs: 'right', lg: 'left' },
                        fontWeight: 'bold',
                        color: '#fff',
                        gap: 1,
                        top: { xs: 250, sm: 210, lg: 220 },
                        left: { xs: 0, lg: 320, lg: 310 },
                        pr: { xs: 2, sm: 4, lg: 0 }
                    }}>
                        {/* Nombre/Usuario */}
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: { xs: 'right', lg: 'left' },
                            lineHeight: 1.1,
                        }}>
                            <Typography variant="span" sx={{ fontSize: { xs: 20, sm: 30 } }} >Nombre de usuario</Typography>
                            <Typography variant="span" sx={{ fontWeight: 500, fontSize: { sm: 25, lg: 17 } }} >@usuario12</Typography>
                        </Box>

                        {/* Seguidores/Seguidos */}
                        <Box sx={{
                            display: 'flex',
                            justifyContent: { xs: 'flex-end', lg: 'flex-start' },
                            fontSize: { sm: 22 },
                            gap: 3
                        }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: 'center',
                                lineHeight: 1.1
                            }}>
                                <Typography variant="span" >0</Typography>
                                <Typography variant="span" >Seguidores</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: 'center',
                                lineHeight: 1.1
                            }}>
                                <Typography variant="span" >0</Typography>
                                <Typography variant="span" >Seguidos</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ProfilePage