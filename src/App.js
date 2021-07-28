import React from 'react';
import 'antd/dist/antd.css';
import './App.css';

import { Layout, Menu, Carousel } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
const { Header } = Layout;

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
			<Carousel
				arrows
				nextArrow={<RightOutlined />}
				prevArrow={<LeftOutlined />}
			>
				<div className='carousel-div'>
					<h2>heading 1</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
						alias similique, quas nostrum soluta sed quaerat aut excepturi,
						assumenda explicabo mollitia distinctio, voluptatibus praesentium.
						Non, nam at! Odit, assumenda quis?
					</p>
				</div>
				<div className='carousel-div'>
					<h2>heading 2</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
						alias similique, quas nostrum soluta sed quaerat aut excepturi,
						assumenda explicabo mollitia distinctio, voluptatibus praesentium.
						Non, nam at! Odit, assumenda quis?
					</p>
				</div>
				<div className='carousel-div'>
					<h2>heading 3</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
						alias similique, quas nostrum soluta sed quaerat aut excepturi,
						assumenda explicabo mollitia distinctio, voluptatibus praesentium.
						Non, nam at! Odit, assumenda quis?
					</p>
				</div>
				<div className='carousel-div'>
					<h2>heading 4</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
						alias similique, quas nostrum soluta sed quaerat aut excepturi,
						assumenda explicabo mollitia distinctio, voluptatibus praesentium.
						Non, nam at! Odit, assumenda quis?
					</p>
				</div>
			</Carousel>
		</>
	);
}

export default App;
