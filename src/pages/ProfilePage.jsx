import { Box } from '@mui/material'
import React from 'react'

const ProfilePage = () => {
    return (
        <Box sx={{ height: '30rem' }}>
            <Box sx={{ height: '72%' }} >
                {/* primera parte */}
                <Box sx={{ backgroundColor: '#b0b0b0', height: '100%', position: 'relative' }} >
                    {/* fondo */}

                    <Box
                        component='img'
                        src='https://callingfriends.com/assets/Images/Default_icon_profile.webp'
                        sx={{
                            borderRadius: '100%',
                            border: 4,
                            borderColor: '#FFF',
                            width: 135,
                            position: 'absolute',
                            bottom: -10,
                            left: 20
                        }}
                    />
                </Box>

                <Box sx={{backgroundColor: '#169AD7', height:'17%'}}>
                    {/* cosito azulito */}

                </Box>
            </Box>
        </Box>
    )
}

export default ProfilePage