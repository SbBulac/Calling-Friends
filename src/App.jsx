import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { CFProvider } from './components/Context/AppContext'
import NavBar from './components/NavBar/NavBar'
import ProfileLayout from './pages/ProfileLayout'
import BetsLayout from './pages/BetsLayout'
import FinanceLayout from './pages/FinanceLayout'

function App() {

  return (
    <>
      <CFProvider>
        <Box sx={{ minHeight: '100vh' }} >
          <Box sx={{
            backgroundColor: '#169AD7',
            height: '4.2rem',
            px: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',

          }}
            component='header'>
            <Box component='img' src='https://callingfriends.com/assets/main.webp' width='9rem' />
            <NavBar />
          </Box>
          <Box sx={{
            maxWidth: 1151,
            m: 'auto'
          }}>
            <Routes>
              <Route exact path='/profile' element={<ProfileLayout />} />
              <Route exact path='/profile/bets' element={<BetsLayout />} />
              <Route exact path='/profile/finance' element={<FinanceLayout />} />
            </Routes>
          </Box>
        </Box>
      </CFProvider>
    </>
  )
}

export default App
