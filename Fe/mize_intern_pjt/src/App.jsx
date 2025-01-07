import { Routes, Route } from 'react-router-dom'
import Home from './pages/homepage/home'
import Login from './pages/loginpage/Login'
import Layout from './Layout'
import './App.css'

function App() {


  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
    </>
  )
}

export default App
