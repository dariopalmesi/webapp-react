import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className='bg-warning py-3 px-4 shadow position-sticky'>
            <nav>
                <NavLink to="/" className='text-decoration-none text-black'>
                    <h4>Bool Movies</h4>
                </NavLink>
            </nav>

        </header>
    )
}