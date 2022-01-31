import React, { useEffect, useState } from 'react';

const ListInput = () => {
  const [addItem, SetAddItem] = useState('');
  const [isFriend, SetIsFriend] = useState(false);

  useEffect(() => {
    console.log('My component is created');
  }, []);

  useEffect(() => {
    console.log(addItem, isFriend);
    // eslint-disable-next-line no-unused-expressions
    addItem.toLowerCase() === 'easter' ? SetIsFriend(true) : SetIsFriend(false);
  }, [addItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="w-1/2 mx-auto p-8 m-8 bg-gray-100 shadow" onSubmit={handleSubmit}>
      <div className="w-1/2 mb-4">
        <label htmlFor="addItem" className="block font-medium text-gray-700">
          Produit à ajouter à la liste de course:
        </label>
        <input
          type="text"
          id="addItem"
          className="block w-full px-2 py-1 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          value={addItem}
          onChange={(e) => SetAddItem(e.target.value)}
          minLength={3}
        />
        <div className="text-green-500">
          {isFriend ? 'The product must have a minimum of 3 characters' : ''}
        </div>
      </div>
      <div className="flec justify-end">
        <button
          type="submit"
          className="px-2 py-2 font-medium text-white text-lg bg-indigo-200 hover:bg-indigo-700 rounded-md">
          Add
        </button>
      </div>
    </form>
  );
};

export default ListInput;
