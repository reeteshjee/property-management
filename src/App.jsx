import './App.css'
import Header from './components/Header'
import Filter from './components/Filter'
import Profile from './components/Profile'
import Properties from './components/Properties'
import Search from './components/Search'
import LoginRegister from './components/LoginRegister'
import Pagination from './components/Pagination'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import { Offers } from './components/Offers'

function App() {

  return (
    <>
      <Header />
      <div className="pt-24 pb-10 px-4 md:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <Routes>
          <Route path="/" element={
            <>
              <Search />
              <Filter />
              <Properties />
              <Pagination />
            </>
          } />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </div >
      <Footer />
    </>
  )
}

export default App
