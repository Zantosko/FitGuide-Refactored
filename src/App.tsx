import React from 'react';
import './App.css';
import { Main } from './Components/Main';
import { Navbar } from './Components/Navbar';

const App: React.FC = () => {
	return (
		<div className='App'>
			<Navbar />
			<Main />
		</div>
	);
};

export default App;
