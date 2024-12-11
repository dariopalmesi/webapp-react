import { Outlet } from 'react-router'
import Header from '../components/Header'



export default function AppDefaultLayout() {

    return (
        <>

            <Header />

            <main>
                <Outlet />
            </main>


            <footer>
                <h2>
                    ciao
                </h2>
            </footer>

        </>

    )
}