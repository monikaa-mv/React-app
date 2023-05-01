// import React from 'react'
//import { useState } from 'react';
//import { FaTrashAlt } from 'react-icons/fa';
import ItemList from './ItemList';

const Content = ({items, handleCheck, handleDelete}) => {
    // const [items, setItems] = useState([
    //     {id: 1, 
    //     checked: false,
    //     item: 'Learn HTML'
    //     },
    //     {id: 2, 
    //     checked: false,
    //     item: 'Learn CSS'
    //     },
    //     {id: 3,
    //     checked: true,
    //     item: 'Learn JavaScript'
    //     }
        
    // ]);

    // const handleCheck = (id) => {
    //     //console.log(`key: ${id}`);
    //     const listItems = items.map((item) => item.id === id ?
    //      {...item, checked: !item.checked} : item);
    //       setItems(listItems);  
    //       localStorage.setItem('items', JSON.stringify(listItems));
    // }

    // const handleDelete = (id) => {
    //     const listItems = items.filter((item) => item.id !== id);
    //     setItems(listItems);
    //     localStorage.setItem('items', JSON.stringify(listItems));
    // }


    return (
        <main>
            {items.length  ? (
                // <ul>
                //     {items.map((item) => (
                //         <li className='item' key={item.id}>
                //         <input 
                //             type='checkbox'
                //             onChange={() => handleCheck(item.id)} 
                //             checked={item.checked}
                //         />
                //         <label
                //             style={(item.checked) ? 
                //             {textDecoration: 'line-through'} : null}
                //             onDoubleClick={() => handleCheck(item.id)}
                //         >{item.item}
                //         </label>
                //         <FaTrashAlt
                //             onClick={() => handleDelete(item.id)}
                //             role='button' 
                //             tabIndex='0'
                //         />
                //         </li>
                //     ))}   
                // </ul>
                <ItemList
                items = {items}
                handleCheck = {handleCheck}
                handleDelete = {handleDelete}
                />
            ) : (
                <p style={{marginTop: '2rem'}}>Your list is empty!</p>
            )}
        </main>
    )
}





{/* const Content = () => {
    const [name, setName] = useState('');

    const handleNameChange = () =>{
        const names = ['Alice', 'Bob', 'Claire'];
        const index = Math.floor(Math.random() * 3);
        setName(names[index]);
    }

    const handleClick = () => {
        console.log('you');
    }

    const handleClick2 = (name) => {
        console.log('Hi ' + name + '!');
    }

    const handleClick3 = (e ) => {
        console.log(e.target.innerText);
    }
    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!
            </p>
            <p>
                <button onClick={handleNameChange}>Click Me!</button>
                <button onClick={()=>handleClick2('joe')}>Click Me!</button>
                <button onClick={(e)=>handleClick3(e)}>Click Me!</button>
            </p>
        </main>
    )
} */}
export default Content