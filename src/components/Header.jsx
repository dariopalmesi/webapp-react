import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <nav>
                <NavLink to="/">
                    <h4>Bool Movies</h4>
                </NavLink>

            </nav>

        </header>
    )
}