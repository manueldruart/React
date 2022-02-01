import React, { useState } from 'react';
import ProductListComponent from './components/ProductListComponent';
import ListInput from './components/ListInput';
const App = () => {
  const [AddItem, SetAddItem] = useState('');
  const [ProductList, SetProductList] = useState([]);

  const addProduct = () => {
    console.log(AddItem);
    // C'est ici que tu vas mettre à jour ton tableau d'élément
    // const list = addProduct.push(SetAddItem);
    //console.log(list);
    SetProductList([...ProductList, AddItem]);
  };
  return (
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
              <ListInput
                AddItem={AddItem}
                SetAddItem={SetAddItem}
                AddItemToList={addProduct}
              />
              <ProductListComponent items={ProductList} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
