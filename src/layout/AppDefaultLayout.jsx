import { Outlet } from "react-router-dom"


export default function AppDefaultLayout() {

    return (
        <>
            <header>

            </header>

            <main>
                <Outlet />
            </main>


            <footer>

            </footer>

        </>

    )
}