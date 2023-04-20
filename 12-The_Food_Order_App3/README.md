## Adding a Checkout / Order Form

## Submitting Orders to a Backend Server (Http)

## Fetching Meals Data 

<br>

useEffect에서는 promise를 반환할 수 없다. 

그럴 떄는 아래와 같은 방법을 사용하자!! 

```javascript
  useEffect(() => {
    const fetchMeals = async () => {
     const response =  await fetch('https://food-app-4dfd9-default-rtdb.firebaseio.com/meals.json').then();
    };
    fetchMeals();
  }, [])
```