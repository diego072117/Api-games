import { Routes , Route } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Details } from "../pages/DetailsGame/Details"

export const AppRouter = () => {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/gameDetails/:id'  element={<Details />}/>
        </Routes>
        </>
    )
}