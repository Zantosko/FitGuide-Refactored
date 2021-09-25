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
} from './Styled-Components/CalorieNeedsStyles';
import { Modal } from 'antd';

interface CalorieNeedsProps {}

type FormData = {
	gender: boolean;
	height: number;
};

export const CalorieNeeds: React.FC<CalorieNeedsProps> = () => {
	const [isModalVisible, setIsModalVisible] =
		useState<boolean>(false);
	const { register, handleSubmit } = useForm<FormData>();

	//* Modal Methods
	const showModal = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();

		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<Container>
			<Title>Calorie Calculator</Title>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<RadioContainer>
					<label htmlFor='gender'>
						<Radio type='radio' name='gender' value={1} />
						<Span>Male</Span>
					</label>
					<label htmlFor='gender'>
						<Radio type='radio' name='gender' value={2} />
						<Span>Female</Span>
					</label>
				</RadioContainer>
				<Label htmlFor='height'>Height</Label>
				<Input
					type='number'
					placeholder='Enter height in inches (1ft = 12in)'
					{...register('height')}
				/>
				<Label htmlFor='weight'>Weight</Label>
				<Input
					type='number'
					name='weight'
					placeholder='Enter weight in pounds (1kg = 2.2lbs)'
				/>
				<Label htmlFor='age'>Age</Label>
				<Input
					type='number'
					name='age'
					placeholder='How old are you?'
				/>
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
					<FormButton onClick={(e) => showModal(e)}>
						Calculate
					</FormButton>
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
