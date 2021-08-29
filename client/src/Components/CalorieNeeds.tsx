import React from 'react';
import {
	Container,
	Title,
	Form,
} from './Styled-Components/CalorieNeedsStyles';

interface CalorieNeedsProps {}

export const CalorieNeeds: React.FC<CalorieNeedsProps> = () => {
	return (
		<Container>
			<Title>Calorie Calculator</Title>
			<Form action=''>
				<div>
					<label htmlFor='gender'>
						<input type='radio' name='gender' />
						<span>Male</span>
					</label>
					<label htmlFor='gender'>
						<input type='radio' name='gender' />
						<span>Female</span>
					</label>
				</div>
				<input type='text' />
				<input type='text' />
				<select name='' id=''>
					<option value=''></option>
					<option value=''></option>
					<option value=''></option>
					<option value=''></option>
					<option value=''></option>
				</select>
			</Form>
		</Container>
	);
};
