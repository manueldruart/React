import React from 'react';

import './assets/App.css';

const TapABeer = () => <div>Serve me a good beer after all this work</div>;

const ValidIndicator = () => {
  const isValid = true;
  const animal = 'dog';
  return (
    <>
      <span>{isValid ? 'Valid' : 'Not Valid'}</span>
      <span className='block mx-16'>
        {animal === 'cat' && "It's a cat"}
        {animal === 'dog' && "It's a dog"}
        {animal === 'rabbit' && "It's a rabbit"}
        {animal === 'fish' && "It's a fish"}
      </span>
    </>
  )
};

const App = () => (
  <div className="py-10 max-w-7xl mx-auto">
    <header>
      <div>
        <img src="/img/logo.png" alt="logo app" className="w-36 mx-auto" />
      </div>
    </header>
    <main>
      <div className="sm:px-6 lg:px-8">
        <div className="px-4 py-8 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg min-h-96">
            <TapABeer />
            <ValidIndicator />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default App;


