import React from 'react';
// import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Carousel } from 'antd';
const { Header } = Layout;

const contentStyle = {
	height: '500px',
	color: '#fff',
	lineHeight: '500px',
	textAlign: 'center',
	background: '#364d79',
};

function App() {
	return (
		<>
			<Layout>
				<Header className='header'>
					<div className='logo' />
					<Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
						<Menu.Item key='1'>nav 1</Menu.Item>
						<Menu.Item key='2'>nav 2</Menu.Item>
						<Menu.Item key='3'>nav 3</Menu.Item>
					</Menu>
				</Header>
			</Layout>
			<Carousel effect='fade'>
				<div>
					<h3 style={contentStyle}>1</h3>
				</div>
				<div>
					<h3 style={contentStyle}>2</h3>
				</div>
				<div>
					<h3 style={contentStyle}>3</h3>
				</div>
				<div>
					<h3 style={contentStyle}>4</h3>
				</div>
			</Carousel>
		</>
	);
}

export default App;
