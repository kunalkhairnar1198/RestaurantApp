import React, { Fragment } from 'react'
import MeaslSummary from './MealSummary'
import AvailableMeals from './AvailableMeals'

const Meals = () => {
  return (
    <Fragment>
        <MeaslSummary/>
        <AvailableMeals/>
    </Fragment>
  )
}

export default Meals
