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
	font-size: 2.4rem;
	font-weight: bold;
	margin-bottom: 2rem;
`;

export const Form = styled.form`
	margin: 1rem;
	padding: 1.3rem;
	background-color: #f1f1f1;
	height: 75vh;
	width: 60vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	box-shadow: 0.1em 0.1em 1em rgba(0, 0, 0, 0.4);
`;

export const RadioContainer = styled.div`
	width: 150px;
	display: flex;
	justify-content: space-between;
	margin-bottom: 2rem;
`;

export const Radio = styled.input`
	background-color: #29bbad;
	&:focus {
		outline-color: #29bbad;
	}
`;

export const Input = styled.input`
	margin-bottom: 2rem;
	background-color: inherit;
	border: none;
	border-bottom: 1px solid gray;
	height: 30px;
	padding: 0.5rem;

	&:focus {
		outline: none;
		border-bottom: 1px solid #29bbad;
	}
`;

export const Select = styled.select`
	height: 30px;
	margin-bottom: 3rem;
	border: none;
	border-radius: 4px;
	background-color: inherit;

	&:focus {
		outline-color: #29bbad;
	}
`;

export const Span = styled.span`
	margin-left: 0.75rem;
`;

export const Label = styled.label`
	margin-bottom: 0.75rem;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

export const FormButton = styled.button`
	padding: 0.55rem;
	width: 200px;
	border: none;
	border-radius: 4px;
	background-color: black;
	color: #fff;
	font-size: 15px;
	font-weight: bold;
	transition: all 0.3s ease;

	&:hover {
		cursor: pointer;
		background-color: #29bbad;
	}
`;

export const ErrorMessage = styled.span`
	color: #fa4343;
	font-size: 12px;
`;
