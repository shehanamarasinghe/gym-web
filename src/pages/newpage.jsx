import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [mealNames, setMealNames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMealNames = async () => {
      try {
        const response = await axios.get('/AddMemberMeal/SM');
        setMealNames(response.data.map(meal => meal.MealName));
      } catch (error) {
        console.error('Error fetching meal names:', error);
        setError('Error fetching meal names');
      }
    };

    fetchMealNames();
  }, []);

  return (
    <div>
      <select onChange={(e) => console.log(e.target.value)}>
        <option value="">Select a Meal</option>
        {mealNames.map((mealName, index) => (
          <option key={index} value={mealName}>{mealName}</option>
        ))}
      </select>
      {error && <div>Error: {error}</div>}
    </div>
  );
}

export default MyComponent;
