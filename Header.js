import React from 'react'
//const Header = (props) => {
const Header = ({title}) => {
//     const headerStyle = {
//             backgroundColor: 'lightblue',
//             color : 'purple'
//     };

  return (
    <header>
      {/* <h1>{props.title}</h1> */}
        <h1>{title}</h1>
    </header>
  )
}
Header.defaultProps = {
    title: 'Grocery List'
}

export default Header