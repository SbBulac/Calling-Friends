import React from 'react'
import ProfilePage from '../components/Profile/ProfilePage'
import ProfileNavBar from '../components/Profile/ProfileNavBar'
import ProfileFinance from '../components/Profile/ProfileFinance'

const FinanceLayout = () => {
  return (
    <>
    <ProfilePage />
    <ProfileNavBar />
    <ProfileFinance />
    </>
  )
}

export default FinanceLayout