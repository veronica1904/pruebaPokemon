import { Navigate, Route, Routes } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Add from "../components/Crud/Add"
import List from "../components/Crud/List"
import Home from "../pages/Home"


const DashboardRoute = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add  />} />
                <Route path="/list" element={<List  />} />
            </Routes>
            <Footer />
        </>
    )
}

export default DashboardRoute;