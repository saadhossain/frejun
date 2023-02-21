import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import LoginRegister from '../assests/login-registration.png';
import Processing from '../Components/Processing';
import { AuthContext } from '../Context/AuthProvider';

const Register = () => {
    const { userRegister, loading, setLoading } = useContext(AuthContext)
    //Get navigate hook from react router
    const navigate = useNavigate()
    //Set email to the state
    const [email, setEmail] = useState('')
    //Set password to the state
    const [password, setPassword] = useState('')
    //User Registration using email and password
    const handleUserRegister = (e) => {
        //Prevent the default form behavier
        e.preventDefault()
        setLoading(true)
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userRegister(email, password)
            .then((result) => {
                toast.success('You account created successfully...')
                form.reset()
                navigate('/users')
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                toast.error(err.message)
            })
    }
    return (
        <div className='flex flex-col-reverse md:flex-row justify-center items-center my-8 gap-10'>
            <img src={LoginRegister} alt='Login Register Background' className='w-full md:w-2/4' />
            <div className="w-11/12 md:w-2/4 mx-auto flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-[#20154F] text-white font-poppins">
                <h1 className="my-3 text-3xl font-bold text-center font-Shantell">Create Account</h1>
                <form onSubmit={handleUserRegister} className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-2">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input onChange={(e)=> setEmail(e.target.value)} type="email"  placeholder="youremail@gmail.com" className="w-full px-3 py-2 border rounded-md border-gray-700 text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm">Password</label>
                            <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="********" className="w-full px-3 py-2 border rounded-md border-gray-700 text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                    <button type="submit" className={`w-full px-8 py-3 font-semibold rounded-md ${!email || !password ? 'bg-[#7CD194]': 'bg-primary hover:bg-secondary '} duration-500 ease-in-out text-white`} disabled={!email || !password}>{loading ? <Processing/> : 'Sign in'}</button>
                        <p className="px-6 text-sm text-center flex gap-2">Already have an account yet?
                            <Link to='/login' className='font-semibold text-actionbtn'>Login Now</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;