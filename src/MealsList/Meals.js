import { Fragment } from "react";
import MealsSummary from "./MealsSummery";
import AvailbleMeals from "./AvailabeMeals";

const Meals =()=>{

    return (
        <Fragment>
            <MealsSummary/>
            <AvailbleMeals/>
        </Fragment>
    )

}
export default Meals;