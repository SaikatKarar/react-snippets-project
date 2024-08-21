import React, { useState } from 'react';

export function Eight(props) {
    const [firstInput, setFirstInput] = useState('');
    const [secondInput, setSecondInput] = useState('');

    const handleFirstInputChange = (e) => {
        setFirstInput(e.target.value);
    };

    const handleSecondInputChange = (e) => {
        setSecondInput(e.target.value);
    };

    const calculateSum = () => {
        const sum = parseInt(firstInput) + parseInt(secondInput);
        return isNaN(sum) ? '' : sum;
    };

    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <img src="https://play.tailwindcss.com/img/beams.jpg" alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
            <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div className="mx-auto max-w-md">
                    <div className='box'>
                        <div>
                            <h2>First Number:</h2>
                            <input className='border border-black'
                                type="number"
                                value={firstInput}
                                onChange={handleFirstInputChange}
                            />
                            <h2>Second Number:</h2>
                            <input className='border border-black'
                                type="number"
                                value={secondInput}
                                onChange={handleSecondInputChange}
                            />
                            <h2>Sum: {calculateSum()}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
