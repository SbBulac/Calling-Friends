import React from 'react'
import ProfilePage from '../components/Profile/ProfilePage'
import ProfileNavBar from '../components/Profile/ProfileNavBar'
import ProfileBets from '../components/Profile/ProfileBets'

const BetsLayout = () => {
  return (
    <>
      <ProfilePage />
      <ProfileNavBar />
      <ProfileBets />
    </>
  )
}

export default BetsLayout