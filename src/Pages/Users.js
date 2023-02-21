import React, { useContext, useEffect, useState } from 'react';
import DisplayUsersDetails from '../Components/DisplayUsersDetails';
import Loader from '../Components/Loader';
import { AuthContext } from '../Context/AuthProvider';

const Users = () => {
    const { user, loading, setLoading } = useContext(AuthContext)
    const [usersData, setUsersData] = useState()
    
    useEffect(() => {
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data => {
            setUsersData(data.users)
            setLoading(false)
        })
    }, [setLoading])
    if(loading){
        return <Loader/>
    }
    console.log(usersData);
    return (
        <div className='w-11/12 md:w-10/12 mx-auto py-5'>
            {
                user?.email === 'admin@frejun.com' ?
                    <>
                        <h2 className='text-3xl md:text-4xl font-semibold text-secondary font-Shantell text-center'>Users Details</h2>
                        {/* Tables to Show users Data */}
                        <div className="flex justify-center my-5 text-gray-800">
                            <div className="overflow-x-auto md:h-[390px]">
                                <table className="w-11/12 md:w-[800px] text-xs">
                                    <thead className="bg-gray-200 sticky top-0">
                                        <tr className="text-left">
                                            <th className="px-2 md:px-3 py-2 md:py-3">Name</th>
                                            <th className="px-2 md:px-3 py-2 md:py-3">Image</th>
                                            <th className="px-2 md:px-3 py-2 md:py-3">Email Address</th>
                                            <th className="px-2 md:px-3 py-2 md:py-3">Age</th>
                                            <th className="px-2 md:px-3 py-2 md:py-3">Gender</th>
                                        </tr>
                                    </thead>

                                    {
                                        usersData?.map(user => <DisplayUsersDetails user={user} key={user.id} />)
                                    }
                                </table>
                            </div>
                        </div>
                    </>
                    : <div className='flex flex-col  items-center'>
                        <h2 className='text-3xl md:text-4xl font-semibold text-secondary font-Shantell mt-5 text-center'>Ohh... Sorry! You are not authorized!!</h2>
                        <h4 className='text-xl md:text-4xl font-semibold text-primary font-Shantell mt-5 text-center'>Please Contact admin!</h4>
                    </div>
            }
        </div>
    );
};

export default Users;