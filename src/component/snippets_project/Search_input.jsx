// import React, { useState } from 'react';

// function Search_input() {
//   const fruits = [
//     { name: 'Apple', color: 'Red', quantity: 10 },
//     { name: 'Banana', color: 'Yellow', quantity: 5 },
//     { name: 'Orange', color: 'Orange', quantity: 3 },
//     { name: 'Grapes', color: 'Purple', quantity: 7 },
//   ];

//   const [userInput, setUserInput] = useState('');
//   const [fruitData, setFruitData] = useState(null);

//   const handleInput = (e) => {
//     setUserInput(e.target.value);
//   };

//   const handleSearch = () => {
//     const foundFruit = fruits.find((fruit) => fruit.name === userInput);
//     setFruitData(foundFruit);
//   };

//   return (
//     <div>
//       <input
//         style={{ padding: '0.8em 1.2em' }}
//         onChange={handleInput}
//         value={userInput}
//       />
//       <button onClick={handleSearch}>Search</button>
//       {fruitData ? (
//         <div>
//           <p>Name: {fruitData.name}</p>
//           <p>Color: {fruitData.color}</p>
//           <p>Quantity: {fruitData.quantity}</p>
//         </div>
//       ) : (
//         <p>Fruit not found</p>
//       )}
//     </div>
//   );
// }

import React, { useState } from 'react';

function Search_input() {
    const fruits = [
        { name: 'Apple', color: 'Red', quantity: 10 },
        { name: 'Banana', color: 'Yellow', quantity: 5 },
        { name: 'Orange', color: 'Orange', quantity: 3 },
        { name: 'Grapes', color: 'Purple', quantity: 7 },
    ];

    const [userInput, setUserInput] = useState('');
    const [fruitData, setFruitData] = useState(null);
    const [searched, setSearched] = useState(false); // Track if search has been performed

    const handleInput = (e) => {
        setUserInput(e.target.value);
    };

    const handleSearch = () => {
        const foundFruit = fruits.find((fruit) => fruit.name === userInput);
        setFruitData(foundFruit);
        setSearched(true); // Set searched to true after search
    };

    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <img src="https://play.tailwindcss.com/img/beams.jpg" alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
            <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div className="mx-auto max-w-md">
                    <div className='box'>
                        <div>
                            <input className='border border-black'
                                style={{ padding: '0.8em 1.2em' }}
                                onChange={handleInput}
                                value={userInput}
                            />
                            <button onClick={handleSearch}>Search</button>
                            {searched && !fruitData ? (
                                <p>Fruit not found</p>
                            ) : fruitData ? (
                                <div>
                                    <p>Name: {fruitData.name}</p>
                                    <p>Color: {fruitData.color}</p>
                                    <p>Quantity: {fruitData.quantity}</p>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search_input;
