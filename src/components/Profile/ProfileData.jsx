import { Box, Button, Grid, Typography } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import React from 'react'
import PopularBets from './PopularBets';

const ProfileData = () => {
    return (
        <Grid container sx={{
            px: 2.5,
            gap: 8
        }}>
            <Grid item xs={12} lg={7}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 8, lg: 3 },
                    py: 4,

                }}>
                    {/* titulo */}
                    <Typography
                        variant='h2'
                        color='initial'
                        sx={{
                            fontWeight: 'bold',
                            fontSize: 40
                        }}>
                        Mi informacion
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.5
                    }}>
                        {/* Link */}
                        <Typography
                            component='a'
                            color='primary'
                            sx={{
                                fontSize: 22,
                                fontWeight: 'bold'
                            }}>
                            http://localhost:5173/profile
                        </Typography>
                        {/* Boton de copiar */}
                        <Button
                            variant='contained'
                            color='secondary'
                            startIcon={<ContentCopyIcon />}
                            sx={{
                                borderRadius: 15,
                                color: '#fff',
                                textTransform: 'none',
                                width: 110
                            }}>
                            Copiar
                        </Button>
                        <Typography variant="p">Copia tu link personal y comparte en tu red social para ganar dinero más rápido.</Typography>
                    </Box>
                    {/* Informacion Personal */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {/* titulo */}
                        <Typography
                            variant='h2'
                            color='primary'
                            sx={{
                                fontWeight: 'bold',
                                fontSize: 25
                            }}>
                            Informacion Personal
                        </Typography>
                        {/* contenido */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.4, maxWidth: 500 }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>Nombre de usuario</Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>@usuario12</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>Nombre</Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>Nombre Usuario</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>Apellido</Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>Apellido Usuario</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>Fecha de nacimiento</Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>00/00/00</Typography>
                            </Box>
                        </Box>
                    </Box>
                    {/* Datos de contacto */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 500 }}>
                        {/* titulo */}
                        <Typography
                            variant='h2'
                            color='primary'
                            sx={{
                                fontWeight: 'bold',
                                fontSize: 25
                            }}>
                            Datos de contacto
                        </Typography>
                        {/* contenido */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.4 }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>Email</Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>usuario@ejemplo.com</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>Telefono</Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>304 2476212</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>Pais</Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 17 }}>Colombia</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Button
                        variant='contained'
                        sx={{
                            borderRadius: 15,
                            width: 'max-content',
                            px: 5,
                            py: 1,
                            m: 'auto'
                        }}>Editar</Button>
                </Box>
            </Grid>
            {/* Apuestas mas populares */}
            <Grid item xs={12} lg={4} sx={{
            }} >
                <Box sx={{
                    width: { lg: 'max-content' },
                    backgroundColor: { lg: '#EFEEED' },
                    py: 4,
                    px: { lg: 2 }

                }}>
                    {/* titulo */}
                    <Typography variant="h2" sx={{
                        fontWeight: 'bold',
                        fontSize: 25,
                        textAlign: 'center'
                    }}>Apuestas más populares</Typography>
                    {/* Apuestas */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        gap: 4
                    }}>
                        <PopularBets />
                        <PopularBets />
                        <PopularBets />
                        <Button
                            sx={{
                                textTransform: 'none',
                                width: 'max-content',
                                fontSize: 17,
                                borderRadius: 15,
                                px: 3
                            }}
                            variant='outlined'>Ver más</Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default ProfileData