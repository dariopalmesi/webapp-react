import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'



export default function AppDefaultLayout() {

    return (
        <>

            <Header />

            <main className='bg-secondary pb-4'>
                <Outlet />
            </main>


            <Footer />

        </>

    )
}