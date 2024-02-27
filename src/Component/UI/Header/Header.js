import React from 'react'
import Headercss from './Header.module.css'
import mealsImage from '../../../assets/Foods.jpg'
import HeaderButtonCart from './HeaderButtonCart'


function Header() {
  // console.log(mealsImage)
  return (
    <React.Fragment>
        <header className={Headercss.head}>
            <h1>ReactMeal</h1>
            <HeaderButtonCart/>
        </header>
        <div className={Headercss['main-image']}>
          <img src={mealsImage} alt='A table takes a foods!'/>
        </div>

    </React.Fragment>
  )
}

export default Header
