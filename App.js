
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import {useState} from 'react';

function App() {

  const [items, setItems] = useState([
    {id: 1, 
    checked: false,
    item: 'Learn HTML'
    },
    {id: 2, 
    checked: false,
    item: 'Learn CSS'
    },
    {id: 3,
    checked: true,
    item: 'Learn JavaScript'
    }
    
]);

const handleCheck = (id) => {
    //console.log(`key: ${id}`);
    const listItems = items.map((item) => item.id === id ?
     {...item, checked: !item.checked} : item);
      setItems(listItems);  
      localStorage.setItem('items', JSON.stringify(listItems));
}

const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('items', JSON.stringify(listItems));
}

  return (
    <div className="App">
      {/* <header title='Groceries'> */}
      <Header />
      <Content 
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      {/* <Footer /> */}
      <Footer length = {items.length}/>
    </div>
  );
}

export default App;
