import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	padding: 2rem;
`;

export const Title = styled.h1`
	color: #29bbad;
	font-size: 3rem;
	margin-bottom: 2rem;
`;

export const Form = styled.form`
	margin: 1rem;
	padding: 1rem;
	background-color: #f1f1f1;
	height: 60%;
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	box-shadow: 0.1em 0.1em 1em rgba(0, 0, 0, 0.4);
`;
