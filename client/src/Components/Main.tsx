import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { CalorieNeeds } from './CalorieNeeds';
import { Recipes } from './Recipes';
import { WorkoutPlans } from './WorkoutPlans';

export const Main: React.FC = () => {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/calorie-needs' component={CalorieNeeds} />
				<Route exact path='/recipes' component={Recipes} />
				<Route exact path='/workout-plans' component={WorkoutPlans} />
			</Switch>
		</>
	);
};
