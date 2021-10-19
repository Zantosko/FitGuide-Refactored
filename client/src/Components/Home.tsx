import React from 'react';
import { Title, HomeButton } from './Styled-Components/HomeStyles';

interface HomeProps {}

export const Home = (props: HomeProps) => {
	return (
		<div className='hero'>
			<Title>FitGuide</Title>
			<HomeButton>Get Started</HomeButton>
		</div>
	);
};
