import React from 'react';
import {
	Container,
	Title,
	Form,
	Radio,
	RadioContainer,
	Input,
	Select,
	Span,
	Label,
	ButtonContainer,
	Button,
} from './Styled-Components/CalorieNeedsStyles';

interface CalorieNeedsProps {}

export const CalorieNeeds: React.FC<CalorieNeedsProps> = () => {
	return (
		<Container>
			<Title>Calorie Calculator</Title>
			<Form action=''>
				<RadioContainer>
					<label htmlFor='gender'>
						<Radio type='radio' name='gender' />
						<Span>Male</Span>
					</label>
					<label htmlFor='gender'>
						<Radio type='radio' name='gender' />
						<Span>Female</Span>
					</label>
				</RadioContainer>
				<Label htmlFor='height'>Height</Label>
				<Input type='text' name='height' />
				<Label htmlFor='weight'>Weight</Label>
				<Input type='text' name='weight' />
				<Label htmlFor='age'>Age</Label>
				<Input type='text' name='age' />
				<Label htmlFor='activity'>Activity Level</Label>
				<Select name='' id=''>
					<option value='' disabled selected>
						How active are you?
					</option>
					<option value='1'>Sedentary (little or no exercise)</option>
					<option value='2'>
						Lightly Active (light exercise or sports 1-3 days/week)
					</option>
					<option value='3'>
						Moderately Active (moderate exercise 3-5 days/week)
					</option>
					<option value='4'>
						Very Active (hard exercise 6-7 days/week)
					</option>
					<option value='5'>
						Super Active (very hard exercise & physical job)
					</option>
				</Select>
				<ButtonContainer>
					<Button>Calculate</Button>
				</ButtonContainer>
			</Form>
		</Container>
	);
};
