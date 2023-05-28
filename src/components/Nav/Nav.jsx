import { NavLink } from 'react-router-dom'
import './NavStyle.scss'

export const Nav = () => {
    return(
        <>
        <div className='container-nav'>
            <nav className="nav">
                <NavLink to="" className='icon'><i class="fa-solid fa-heart"></i></NavLink>
                <NavLink to="" className='icon'><i class="fa-solid fa-heart"></i></NavLink>
                <NavLink to="" className='icon'><i class="fa-solid fa-heart"></i></NavLink>
                <NavLink to="" className='icon'><i class="fa-solid fa-heart"></i></NavLink>
            </nav>
        </div>
        </>
    )
}