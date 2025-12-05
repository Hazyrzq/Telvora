import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AdminLayout from './components/AdminLayout'
import HomeAdmin from './pages/Admin/Home'
import Product from './pages/Admin/Product'
import ProductLab from './pages/Admin/ProductLab'
import UserProfile from './pages/Admin/UserProfile'
import Analytic from './pages/Admin/Analytic'
import Login from './pages/Login'
import TentangSistem from './pages/TentangSistem'
import HomeLayout from './layouts/HomeLayout'
import { AuthProvider } from './contexts/AuthContext'
import RequireAuth from './components/RequireAuth'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="tentang-sistem" element={<TentangSistem />} />
          </Route>

          <Route
            path="/admin"
            element={
              <RequireAuth>
                <AdminLayout />
              </RequireAuth>
            }
          >
            <Route index element={<HomeAdmin />} />
            <Route path="packages" element={<Product />} />
            <Route path="product-lab" element={<ProductLab />} />
            <Route path="customers" element={<UserProfile />} />
            <Route path="recommendations" element={<Analytic />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App