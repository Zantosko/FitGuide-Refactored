import React from 'react';
import {
	Nav,
	NavLinkContainer,
	NavLink,
	NavLeft,
	NavRight,
} from './Styled-Components/NavbarStyles';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
	return (
		<>
			<Nav>
				<NavLeft></NavLeft>
				<NavRight>
					<NavLinkContainer>
						<NavLink>Home</NavLink>
						<NavLink>Calorie Needs</NavLink>
						<NavLink>Recipes</NavLink>
						<NavLink>Plan Your Workout</NavLink>
					</NavLinkContainer>
				</NavRight>
			</Nav>
		</>
	);
};
