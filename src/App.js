import React from 'react';
import './App.css';
import NewsTicker from 'react-advanced-news-ticker';

function App() {
	var arr = ['Movie', 'Novel', 'Comic Book', 'TV Series', 'Video Game'];
	return (
		<div id='outer-div'>
			<div id='top-div'>
				<h4>Find and vote on genre, sub-genre and tags of any</h4>
				<NewsTicker
					rowHeight={100}
					maxRows={1}
					speed={300}
					duration={3000}
					autoStart={true}
					pauseOnHover={true}
					id='nt-example2'
				>
					{arr.map((item, i) => (
						<h4 key={i}>{item}</h4>
					))}
				</NewsTicker>
				<button>Get Started</button>
			</div>
			<div id='bottom-div'></div>
		</div>
	);
}

export default App;
