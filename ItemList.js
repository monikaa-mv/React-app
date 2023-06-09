import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import LineItems from './LineItems';

const ItemList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
        {items.map((item) => (
            // <li className='item' key={item.id}>
            // <input 
            //     type='checkbox'
            //     onChange={() => handleCheck(item.id)} 
            //     checked={item.checked}
            // />
            // <label
            //     style={(item.checked) ? 
            //     {textDecoration: 'line-through'} : null}
            //     onDoubleClick={() => handleCheck(item.id)}
            // >{item.item}
            // </label>
            // <FaTrashAlt
            //     onClick={() => handleDelete(item.id)}
            //     role='button' 
            //     tabIndex='0'
            // />
            // </li>
            <LineItems
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            />
        ))}   
    </ul>
  )
}

export default ItemList