import React from 'react';
import {
	Container,
	Title,
	Form,
	RadioContainer,
	Input,
} from './Styled-Components/CalorieNeedsStyles';

interface CalorieNeedsProps {}

export const CalorieNeeds: React.FC<CalorieNeedsProps> = () => {
	return (
		<Container>
			<Title>Calorie Calculator</Title>
			<Form action=''>
				<RadioContainer>
					<label htmlFor='gender'>
						<input type='radio' name='gender' />
						<span>Male</span>
					</label>
					<label htmlFor='gender'>
						<input type='radio' name='gender' />
						<span>Female</span>
					</label>
				</RadioContainer>
				<label htmlFor='height'>Height</label>
				<Input type='text' name='height' />
				<label htmlFor='weight'>Weight</label>
				<Input type='text' name='weight' />
				<label htmlFor='age'>Age</label>
				<Input type='text' name='age' />
				<label htmlFor='activity'>Activity Level</label>
				<select name='' id=''>
					<option value=''></option>
					<option value=''></option>
					<option value=''></option>
					<option value=''></option>
					<option value=''></option>
				</select>
				<button>Calculate</button>
			</Form>
		</Container>
	);
};
