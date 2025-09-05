import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto bg-gradient-to-b from-light/20 to-accent/10'>
            <Navbar />
            <div className='min-h-[calc(100vh-160px)] overflow-x-hidden pt-14 scroll-smooth'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;