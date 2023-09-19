import { Outlet } from 'react-router-dom';
import FooterLayout from './FooterLayout';

const MainLayout = () => {
	return (
		<div>
			<Outlet />
			<FooterLayout />
		</div>
	);
};

export default MainLayout;
