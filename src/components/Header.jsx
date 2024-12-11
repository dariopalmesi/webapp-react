import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className='bg-light py-3 px-4 shadow'>
            <nav>
                <NavLink to="/" className='text-decoration-none'>
                    <h4>Bool Movies</h4>
                </NavLink>
            </nav>

        </header>
    )
}