import { Outlet } from 'react-router-dom'


export default function AppDefaultLayout() {

    return (
        <>
            <header>
                <h1>ciao a tutti</h1>
            </header>

            <main>
                <Outlet />
            </main>


            <footer>

            </footer>

        </>

    )
}