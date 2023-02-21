import React, { useContext, useEffect, useState } from 'react';
import DisplayUsersDetails from '../Components/DisplayUsersDetails';
import Loader from '../Components/Loader';
import { AuthContext } from '../Context/AuthProvider';

const Users = () => {
    const { user, loading, setLoading } = useContext(AuthContext)
    const [usersData, setUsersData] = useState()
    //Set the search query and gender filter to the state
    const [searchInputQuery, setSearchInputQuery] = useState('');
    const [genderfilter, setGenderFilter] = useState('');

    //fetch data from the api
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => {
                setUsersData(data.users)
                setLoading(false)
            })
    }, [setLoading])
    //Handle Input Search
    const handleInputSearchQuery = (e) => {
        setSearchInputQuery(e.target.value);
    }
    //Handle Gender Filter
    const handleGenderFilterChange = (e) => {
        setGenderFilter(e.target.value);
    }
    //functionality to implement search feature
    let filteredUsersData = usersData && usersData.filter(user => {
        const { firstName, email, gender } = user;
        return (
            (firstName.toLowerCase().includes(searchInputQuery.toLowerCase()) ||
                email.toLowerCase().includes(searchInputQuery.toLowerCase())) &&
            (genderfilter === "" || gender.toLowerCase() === genderfilter.toLowerCase())
        );
    });

    //Show loading while fetching data
    if (loading) {
        return <Loader />
    }
    return (
        <div className='w-11/12 md:w-10/12 mx-auto py-5'>
            {/* Conditionally Render data based on user authorization status */}
            {
                user?.email === 'admin@frejun.com' ?
                    <>
                        <h2 className='text-3xl md:text-4xl font-semibold text-secondary font-Shantell text-center'>Users Details</h2>
                        {/* Search box and filter wrapper */}
                        <div className="w-full md:w-10/12 mx-auto flex justify-between items-end md:items-center my-5">
                            {/* Search Box */}
                            <div className="w-3/4 md:w-2/4">
                                <input type="text" placeholder="Search by name or email" value={searchInputQuery} onChange={handleInputSearchQuery} className="px-3 py-2 bg-white border-2 border-gray-400 text-gray-800 rounded-md w-full" />
                            </div>
                            {/* Gender Filter */}
                            <div className="w-1/3 ml-auto flex flex-col md:flex-row gap-2 items-center justify-end">
                                <label htmlFor="Gender">Gender</label>
                                <select value={genderfilter} onChange={handleGenderFilterChange} className="px-3 py-2 border-gray-400 rounded-md bg-gray-300">
                                    <option value="">All</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                        {/* Conditionally Render data based on search and filter */}
                        {
                            filteredUsersData.length === 0 ? <h2 className='text-xl md:text-2xl font-semibold text-secondary font-Shantell mt-5 text-center'>Sorry! No Match Found!!</h2> :
                                // Tables to Show users Data
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
                                            {/* Print Every Single User by mapping the array */}
                                            {
                                                filteredUsersData?.map(user => <DisplayUsersDetails user={user} key={user.id} />)
                                            }
                                        </table>
                                    </div>
                                </div>
                        }
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