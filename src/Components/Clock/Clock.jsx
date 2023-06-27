import React from 'react';
import moment from 'moment';


const Clock = () => {
    return (
        <div className='md:px-40'>
            <div className="flex gap-5 border border-red-500 md:mr-[650px] px-4 py-2 rounded-lg shadow-md hover:shadow-red-700 hover:shadow-xl">
                <div className='shadow-md bg-slate-200 p-1 text-center rounded-md px-2'>
                    <span className="countdown font-mono text-2xl">
                        <span>{moment().format('h:')}</span> 
                    </span>
                    hours
                </div>
                <div className='shadow-md bg-slate-200 p-1 text-center rounded-md px-2'>
                    <span className="countdown font-mono text-2xl">
                        <span >{moment().format('mm:')}</span>
                    </span>
                    min
                </div>
                <div className='shadow-md bg-slate-200 p-1 text-center rounded-md px-2'>
                    <span className="countdown font-mono text-2xl">
                        <span >{moment().format('ss a')}</span>
                    </span>
                    sec
                </div>
            </div>
        </div>
    );
};

export default Clock;