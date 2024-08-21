import React, { useState } from 'react';

function Three() {
    const [input, setInput] = useState('');
    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <img src="https://play.tailwindcss.com/img/beams.jpg" alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
            <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div className="mx-auto max-w-md">
                    <div className='box'>
                        <input className='border border-black'
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <p>User Input: {input}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Three;
