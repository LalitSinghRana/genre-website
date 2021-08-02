import React, { useState } from 'react';
import './App.css';
import NewsTicker from 'react-advanced-news-ticker';

function App() {
	var arr = ['movie', 'book', 'comic', 'TV series', 'games'];
	return (
		<div id='outer-div'>
			<div id='top-div'>
				<div id='top-div-1'>
					<h4>Find Sub-Genre of any</h4>
					<NewsTicker
						rowHeight={60}
						maxRows={1}
						speed={600}
						duration={10000}
						autoStart={true}
						pauseOnHover={true}
						id='nt-example2'
					>
						{arr.map((item, i) => (
							<h4 className='hour'>{item}</h4>
						))}
					</NewsTicker>
				</div>
			</div>
			<div id='bottom-div'></div>
		</div>
	);
}

export default App;
