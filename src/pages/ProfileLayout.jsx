import React from 'react'
import ProfilePage from '../components/Profile/ProfilePage'
import ProfileNavBar from '../components/Profile/ProfileNavBar'
import ProfileData from '../components/Profile/ProfileData'

const ProfileLayout = () => {
    return (
        <>
            <ProfilePage />
            <ProfileNavBar />
            <ProfileData />
        </>
    )
}

export default ProfileLayout