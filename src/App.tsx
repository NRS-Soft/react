import React from 'react';

const App = () => {
    return (
        <div>
            <h1>Hello from React</h1>
            <h2>Includes:</h2>
            <ul>
                <li>Typescript 4</li>
                <li>React 17</li>
                <li>Prettier</li>
            </ul>
            <h2>Doesn't include
            </h2>
                <ul>
                    <li>Create-React-App</li>
                </ul>
            <p>
                <a href="https://github.com/NRS-Soft/react">Link to Repo</a>
            </p>
        </div>
    );
};

export default App;
