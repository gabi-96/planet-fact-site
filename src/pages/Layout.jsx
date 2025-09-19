import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import stars from '../assets/stars.svg'
import { useMediaQuery } from 'react-responsive';

const Layout = () => {

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="bg-black" style={{ backgroundImage: `url(${stars})`}}>
        <Navbar />

        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout