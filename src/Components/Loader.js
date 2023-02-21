import React from 'react';

const Loader = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='flex gap-2 items-center'>
                <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-primary"></div>
                <h3 className='text-primary font-Shantell text-2xl font-semibold'>Loading</h3>
            </div>
        </div>
    );
};

export default Loader;