import React, { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import {
	Nav,
	NavLinkContainer,
	NavLink,
	NavLeft,
	NavRight,
	Logo,
	Logo2,
	Special,
	Overlay,
	MenuContainer,
	MenuItems,
	Line,
	IconSizer,
	IconSizer2,
} from './Styled-Components/NavbarStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

interface NavbarProps {}

export const Navbar = (props: NavbarProps) => {
	const [showMenu, setShowMenu] = useState<boolean>(false);

	const size = useWindowSize();

	let menu;

	if (showMenu) {
		menu = (
			<Overlay>
				<IconSizer>
					<FontAwesomeIcon
						icon={faTimes}
						onClick={() => setShowMenu(!showMenu)}
					/>
				</IconSizer>
				<MenuContainer>
					<Link to='/' className='link'>
						<Logo2>
							Fit<Special>Guide</Special>
						</Logo2>
					</Link>
					<Line />
					<Link to='/' className='link'>
						<MenuItems>HOME</MenuItems>
					</Link>
					<Line />
					<Link to='/calorie-needs' className='link'>
						<MenuItems>CALORIE NEEDS</MenuItems>
					</Link>
					<Line />
					<Link to='/recipes' className='link'>
						<MenuItems>RECIPES</MenuItems>
					</Link>
					<Line />
					<Link to='/workout-plans' className='link'>
						<MenuItems>PLAN YOUR WORKOUT</MenuItems>
					</Link>
					<Line />
				</MenuContainer>
			</Overlay>
		);
	}

	return (
		<>
			<Nav>
				<NavLeft>
					<Link to='/' className='link'>
						<Logo>
							Fit<Special>Guide</Special>
						</Logo>
					</Link>
				</NavLeft>
				<NavRight>
					<NavLinkContainer>
						{size.width > 800 ? (
							<>
								<Link to='/' className='link'>
									<NavLink>Home</NavLink>
								</Link>
								<Link to='/calorie-needs' className='link'>
									<NavLink>Calorie Needs</NavLink>
								</Link>
								<Link to='/recipes' className='link'>
									<NavLink>Recipes</NavLink>
								</Link>
								<Link to='/workout-plans' className='link'>
									<NavLink>Plan Your Workout</NavLink>
								</Link>
							</>
						) : (
							<IconSizer2>
								<FontAwesomeIcon
									icon={faBars}
									onClick={() => setShowMenu(!showMenu)}
								/>
							</IconSizer2>
						)}
					</NavLinkContainer>
				</NavRight>
				{menu}
			</Nav>
		</>
	);
};
