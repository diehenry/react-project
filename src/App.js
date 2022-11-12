import { HashRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import TrySome from './TrySome';
import Another from './Another';
import Layout from './Layout';
function App() {
	return (
		<div className="App" style={{ backgroundColor: 'white' }}>
			<header>
				<HashRouter>
					<Layout />
					<Routes>
						<Route exact path="/" element={<Home />}></Route>
						<Route exact path="/trySome" element={<TrySome />}></Route>
						<Route exact path="/another" element={<Another />}></Route>
					</Routes>
				</HashRouter>
			</header>
		</div>
	);
}

export default App;
