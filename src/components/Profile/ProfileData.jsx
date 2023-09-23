import { Box, Button, Card, Typography } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import React from 'react'

const ProfileData = () => {
    return (
        <Box sx={{
            py: 4,
            px: 2.5,
            display: 'flex',
            flexDirection: 'column',
            gap: 2
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
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.4 }}>
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
        </Box>
    )
}

export default ProfileData