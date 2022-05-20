import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { categoryActions } from '../../../features/customer/page/home/HomeSlice';
import customerRoutes from '../../../features/customer/page/routes';
import { loadCss, loadScript } from '../../../index';
import Footer from './layout/footer/Footer';
import Header from './layout/header/Header';

function CustomerLayout() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(categoryActions.getCategory());
	}, [dispatch]);

	const renderPages = () => {
		return customerRoutes.map((route, index) => {
			return <Route key={index} path={route.url} exact={route.isExact} element={route.element()} />;
		});
	};

	loadCss(false);
	loadScript(false);
	return (
		<>
			<Header />
			<main className='main'>
				<Routes>{renderPages()}</Routes>
			</main>
			<Footer />
			<div id='preloader-active'>
				<div className='preloader d-flex align-items-center justify-content-center'>
					<div className='preloader-inner position-relative'>
						<div className='text-center'>
							<img src='assets/customer/imgs/theme/loading.gif' alt='' />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CustomerLayout;
