import React from 'react';

const Processing = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='flex gap-2 items-center'>
                <div className="w-8 h-8 border-[3px] border-dashed rounded-full animate-spin border-white"></div>
                <h3 className='text-white font-Shantell'>Processing</h3>
            </div>
        </div>
    );
};

export default Processing;