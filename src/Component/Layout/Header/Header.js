import React from 'react'
import Headercss from './Header.module.css'
import mealsImage from '../../../assets/Foods.jpg'
import HeaderButtonCart from './HeaderButtonCart'


function Header(props) {

  //  console.log('Header compponent',props)

  return (
    <React.Fragment>
        <header className={Headercss.head}>
            <h1>ReactMeal</h1>
            <HeaderButtonCart  onClick={props.onShowCart}/>
        </header>
        <div className={Headercss['main-image']}>
          <img src={mealsImage} alt='A table takes a foods!'/>
        </div>

    </React.Fragment>
  )
}

export default Header
