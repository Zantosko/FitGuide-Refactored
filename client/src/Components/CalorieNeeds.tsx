import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
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
	FormButton,
	ErrorMessage,
} from './Styled-Components/CalorieNeedsStyles';
import { Modal } from 'antd';

interface CalorieNeedsProps {}

interface FormData {
	gender: string;
	height: number;
	weight: number;
	age: number;
	activityLevel: ActivityEnum;
}

enum ActivityEnum {
	sedentary = 'sedentary',
	lightlyActive = 'lightlyActive',
	moderatelyActive = 'moderatelyActive',
	veryActive = 'veryActive',
	superActive = 'superActive',
}

export const CalorieNeeds: React.FC<CalorieNeedsProps> = () => {
	const [isModalVisible, setIsModalVisible] =
		useState<boolean>(false);

	//* Allows access to react-hook-form methods
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	//* Modal Methods
	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	//* Handle Form Submission
	const onSubmit: SubmitHandler<FormData> = (data) => {
		console.log(data);
		showModal();
	};

	return (
		<Container>
			<Title>Calorie Calculator</Title>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Label htmlFor='gender'>Gender</Label>
				{errors.gender && (
					<ErrorMessage>This field is required</ErrorMessage>
				)}
				<RadioContainer>
					<label htmlFor='gender'>
						<Radio
							type='radio'
							value='male'
							{...register('gender', { required: true })}
						/>
						<Span>Male</Span>
					</label>
					<label htmlFor='gender'>
						<Radio
							type='radio'
							value='female'
							{...register('gender', { required: true })}
						/>
						<Span>Female</Span>
					</label>
				</RadioContainer>
				<Label htmlFor='height'>Height</Label>
				{errors.height && (
					<ErrorMessage>This field is required</ErrorMessage>
				)}
				<Input
					type='number'
					placeholder='Enter height in inches (1ft = 12in)'
					{...register('height', { required: true })}
				/>
				<Label htmlFor='weight'>Weight</Label>
				{errors.weight && (
					<ErrorMessage>This field is required</ErrorMessage>
				)}
				<Input
					type='number'
					placeholder='Enter weight in pounds (1kg = 2.2lbs)'
					{...register('weight', { required: true })}
				/>
				<Label htmlFor='age'>Age</Label>
				{errors.age && (
					<ErrorMessage>This field is required</ErrorMessage>
				)}
				<Input
					type='number'
					placeholder='How old are you?'
					{...register('age', { required: true })}
				/>
				<Label htmlFor='activity'>Activity Level</Label>
				<Select
					id=''
					{...register('activityLevel', { required: true })}
				>
					<option value='' disabled>
						How active are you?
					</option>
					<option value='sedentary'>
						Sedentary (little or no exercise)
					</option>
					<option value='lightlyActive'>
						Lightly Active (light exercise or sports 1-3 days/week)
					</option>
					<option value='moderatelyActive'>
						Moderately Active (moderate exercise 3-5 days/week)
					</option>
					<option value='veryActive'>
						Very Active (hard exercise 6-7 days/week)
					</option>
					<option value='superActive'>
						Super Active (very hard exercise & physical job)
					</option>
				</Select>
				<ButtonContainer>
					<FormButton>Calculate</FormButton>
				</ButtonContainer>

				<Modal
					title='Calorie Requirements'
					visible={isModalVisible}
					onOk={handleOk}
					onCancel={handleCancel}
					bodyStyle={{ height: '50vh' }}
				>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Modal>
			</Form>
		</Container>
	);
};
