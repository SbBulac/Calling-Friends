import { Box } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import ProfilePage from "./pages/ProfilePage"
import NavBar from "./components/NavBar/NavBar"
import { CFProvider } from "./components/Context/AppContext"

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
            <Box component='img' src="https://callingfriends.com/assets/main.webp" width='9rem' />
            <NavBar />
          </Box>

          <Routes>
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Box>
      </CFProvider>
    </>
  )
}

export default App
