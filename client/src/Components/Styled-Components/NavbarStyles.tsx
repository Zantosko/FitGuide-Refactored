import styled from 'styled-components';

export const Nav = styled.header`
	width: 100vw;
	height: 75px;
	background-color: #333;
	opacity: 0.95;
	box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.2rem;
	/* position: fixed; */
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
	padding: 0.5rem 0.2rem;
	transition: all 0.3s ease;

	&:hover {
		cursor: pointer;
		color: #29bbad;
	}
`;

export const Logo = styled.h1`
	color: #fff;

	&:hover {
		cursor: pointer;
	}
`;

export const Logo2 = styled.h1`
	color: #fff;
	font-size: 3rem;
	margin-bottom: 2rem;

	&:hover {
		cursor: pointer;
	}
`;

export const Special = styled.span`
	color: #29bbad;
`;

export const Overlay = styled.div`
	height: 100vh;
	width: 100vw;
	background: #333;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 50;
`;

export const MenuContainer = styled.div`
	height: 80%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Line = styled.div`
	background-color: #fff;
	width: 200px;
	height: 1px;
`;

export const MenuItems = styled.p`
	color: #fff;
	font-size: 18.5px;
	margin: 1rem;
	transition: all 0.3s ease;

	&:hover {
		cursor: pointer;
		color: #29bbad;
	}
`;

export const IconSizer = styled.span`
	font-size: 30px;
	text-align: right;
	display: flex;
	justify-content: flex-end;
	padding: 1.5rem;
	color: #fff;
	transition: all 0.3s ease;

	&:hover {
		color: #29bbad;
		cursor: pointer;
	}
`;

export const IconSizer2 = styled.span`
	font-size: 24px;
	color: #fff;
	transition: all 0.3s ease;

	&:hover {
		cursor: pointer;
		color: #29bbad;
	}
`;
