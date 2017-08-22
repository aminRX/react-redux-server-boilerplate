import React from 'react';
import counter from './reducers/reducer';
import Counter from './components/counter/Counter.jsx';
import ProductTable from './components/producttable/productTable.jsx';
import CharacterTable from './components/characterstable/filterableTable.jsx';

const App = () => {
  const characters = [
    {name: 'leonardo dicaprio', years: 48, power: 'nen'},
    {name: 'kurapika', years: 17, power: 'nen'},
    {name: 'gon freecs', years: 13, power: 'nen'},
    {name: 'hisoka', years: 30, power: 'nen'},
    {name: 'Omar rios', years: 26, power: 'none'},
    {name: 'Amin Ogarrio', years: 27, power: 'ki'},
    {name: 'Sordo moto', years: 19, power: 'trampas locas'},
    {name: 'Seto Amin', years: 29, power: 'He knows read english.'}
  ];

  return (
    <div>
      <CharacterTable characters={characters} />
    </div>
  );
}

export default App;
