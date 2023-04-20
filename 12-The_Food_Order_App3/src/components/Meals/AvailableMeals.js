import { useEffect, useState } from "react";

import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading ] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
     const response =  await fetch('https://food-app-4dfd9-default-rtdb.firebaseio.com/meals.json');
     const responseData = await response.json();

     if(!response.ok) {
      throw new Error('Something went wrong!');
     }

     const loadedMeals = []; 

     for(const key in responseData) {
      loadedMeals.push({
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price
      });
     }
     setMeals(loadedMeals);
     setIsLoading(false);
    };

      fetchMeals().catch(error => {
        setIsLoading(false);
        setHttpError(error.message);
      });
  }, [])

  if(isLoading) {
    return (
    <section className={classes.MealsLoading}>
      <h2>Loading...</h2>
    </section>
    );
  }

  if(httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
      );
  }

  const mealList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
