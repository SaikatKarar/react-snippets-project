import { useState } from 'react';

const fruits = [
    { id: 1, name: 'Apple', price: 200 },
    { id: 2, name: 'Orange', price: 110 },
    { id: 3, name: 'Grapes', price: 50 },
    { id: 4, name: 'Pineapple', price: 75 },
];

export default function Six() {
    const [shouldHighlight, setShouldHighlight] = useState(false);

    const highlightCostlyFruits = () => {
        setShouldHighlight(true);
    };

    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <img src="https://play.tailwindcss.com/img/beams.jpg" alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
            <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div className="mx-auto max-w-md">
                    <div className='box '>
                        <h1>fruits</h1>
                        <div>
                            {fruits.map(({ id, name, price }) => (
                                <p
                                    key={id}
                                    style={{ color: shouldHighlight && price > 100 ? 'red' : '#000' }}
                                >
                                    {name} INR {price}
                                </p>
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '12px', padding: '12px' }}>
                            <button onClick={highlightCostlyFruits}>costly fruits </button>

                            <button onClick={() => setShouldHighlight(false)}> reset </button>

                            <button
                                onClick={() =>
                                    setShouldHighlight((shouldHighlight) => !shouldHighlight)
                                }
                            >
                                Toggle
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
