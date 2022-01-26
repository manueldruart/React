import React from 'react';

const User = ({name, age, comment}) => (
    <div className='py-2 mx-4 border-b'>
        <h1 className='font-bold text-2xl'>Hello {name}</h1>
        <h2>{age >= 18 ? "Welcome to our site" : "Sorry you are too young !"}</h2>
        <p>{comment}</p>
    </div>
);

export default User;

