import styled from 'styled-components';

export const Nav = styled.header`
	width: 100vw;
	height: 90px;
	background-color: #333;
	opacity: 0.95;
	box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem;
	position: fixed;
`;

export const NavLeft = styled.div``;

export const NavRight = styled.div``;

export const NavLinkContainer = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-between;
	color: #fff;
`;

export const NavLink = styled.li`
	margin-right: 1rem;
	font-size: 15.5px;
	color: inherit;
	padding: 0.5rem 0.5rem;
	transition: all 0.3s ease;

	&:hover {
		cursor: pointer;
		color: #29bbad;
	}
`;
