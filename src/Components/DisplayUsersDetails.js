import React from 'react';

const DisplayUsersDetails = ({user}) => {
    const {firstName, lastName, email, age, gender, image} = user;
    return (
        <tbody>
            <tr className="border-b border-opacity-20 border-gray-700 bg-gray-50">
                <td className="p-3 py-2">
                    <img src={image} alt={firstName+ lastName} className='w-12 h-12 rounded'/>
                </td>
                <td className="p-3 py-2">
                    <p>{`${firstName} ${lastName}`}</p>
                </td>
                <td className="p-3 py-2">
                    <p>{email}</p>
                </td>
                <td className="p-3 py-2">
                    <p>{age} yrs</p>
                </td>
                <td className="p-3 py-2">
                    {gender}
                </td>
            </tr>
        </tbody>
    );
};

export default DisplayUsersDetails;