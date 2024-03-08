import React from 'react'
import cssAvlMeals from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

let DumyData = [
    {
        id: '01',
        name:'Green Bowl',
        description:'Heldy,and,green',
        price:  18.20
    },
    {
        id: '02',
        name:'sushi',
        description:'Heldy,and,green',
        price:  20.02
    },
    {
        id: '03',
        name:'Pieci gravy',
        description:'red',
        price:  25.20
    }

];

const AvailableMeals = () => {

    const meallist = DumyData.map((ele)=>(
        <MealItem key={ele.id} 
        id={ele.id}
        name={ele.name} 
        description={ele.description} 
        price = {ele.price} 
        />
    ))
    // console.log(meallist)

  return (
    <section className={cssAvlMeals.meals}>
      <Card>
          <ul>
            {meallist}
          </ul>
      </Card>

    </section>
  )
}

export default AvailableMeals
