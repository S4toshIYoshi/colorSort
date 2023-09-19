import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './components/screens/start/Start';
import NotFound from './routing/NotFound';
import MainLayout from './components/layout/MainLayout';
import Game from './components/screens/game/Game';
import End from './components/screens/end/End';
import Levels from './components/screens/levels/Levels';
import { links } from './data/links';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={links[1]} element={<MainLayout />}>
					<Route index={true} element={<Start />} />
					<Route path='game/:id' element={<Game />} />
					<Route path='end' element={<End />} />
					<Route path='levels' element={<Levels />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
