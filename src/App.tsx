import React from 'react';

const App = () => {
    return (
        <div className="container p-12">
            <h1 className="text-2xl">Hello from React</h1>
            <div className='bg-gray-300 shadow-md rounded-xl my-6 pl-6 p-3'>
            <h2 className='text-lg'>Includes:</h2>
            <ul className='list-disc list-inside py-3'>
                <li>Typescript 4</li>
                <li>React 17</li>
                <li>Prettier</li>
                <li>Tailwind</li>
            </ul>
            <h2 className='text-lg'>Doesn't include:</h2>
                <ul>
                    <li className='list-disc list-inside py-3'>Create-React-App</li>
                </ul></div>
            <p>
                <a className='text-blue-500 hover:underline' href="https://github.com/NRS-Soft/react">Link to Repo</a>
            </p>
        </div>
    );
};

export default App;
