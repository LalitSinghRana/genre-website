import React from 'react';
import './App.css';
import NewsTicker from 'react-advanced-news-ticker';

function App() {
	var arr = ['Movie', 'Novel', 'Comic Book', 'TV Series', 'Video Game'];
	return (
		<div id='outer-div'>
			<div id='top-div'>
				<p>Vote on genre, sub-genre and tags of any</p>
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
						<p key={i}>{item}</p>
					))}
				</NewsTicker>
				<button>Get Started</button>
			</div>
			<div id='bottom-div'>
				<div className='que-div'>
					<h6>The public voting</h6>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
						quidem quis eligendi fuga ab expedita nostrum ullam pariatur
						placeat? Quasi soluta voluptatibus amet voluptas ipsa blanditiis
						fugit perferendis rerum laudantium.
					</p>
				</div>
				<div className='que-div'>
					<h6>The public voting</h6>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
						quidem quis eligendi fuga ab expedita nostrum ullam pariatur
						placeat? Quasi soluta voluptatibus amet voluptas ipsa blanditiis
						fugit perferendis rerum laudantium.
					</p>
				</div>
				<div className='que-div'></div>
			</div>
		</div>
	);
}

export default App;
