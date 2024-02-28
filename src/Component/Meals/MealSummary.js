import React from "react"
import mealsum from './MealSummary.module.css'
const MeaslSummary = (props) => {
  return (
    <section className={mealsum.summary}>
        <h2>Delecious Food, Delevered to You</h2>
        <p>
        Choose your fevourite our broad selection available meals and enjoy Delecious
        lunch or dinner at home. 
        </p>
        <p>
        All our meals are cooked with high quality ingredients just-in-time 
        and of course by experienced chefs!
        </p>
  </section>
  )
};

export default MeaslSummary;
