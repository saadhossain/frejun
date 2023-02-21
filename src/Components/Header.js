import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assests/frejun.svg';
import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
    const { user , logOut} = useContext(AuthContext)
    //Get navigate hook from react router
    const navigate = useNavigate()
    //Logout functionality
    const handleLogOut = () => {
        logOut()
        .then(()=> {
            toast.success('You are logged out...')
            navigate('/')
        })
    }
    return (
        <div className='bg-gray-100 border border-gray-200'>
            <div className='w-11/12 lg:w-10/12 mx-auto py-2 flex justify-between items-center'>
                <Link to={user ? '/users': '/'}>
                    <img src={logo} alt="FreJun" className='w-32' />
                </Link>
                <div className='font-semibold'>
                    {
                        user?.email ? <button onClick={handleLogOut} className="px-5 py-2 font-semibold rounded-md bg-primary duration-500 ease-in-out hover:bg-secondary text-white">Logout</button> : <NavLink to='/login'><button className="px-5 py-2 font-semibold rounded-md bg-primary duration-500 ease-in-out hover:bg-secondary text-white">Login</button></NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;