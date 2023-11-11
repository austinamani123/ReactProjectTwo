import { useState } from 'react';
import './index.css';
import { useEffect } from 'react';
import Table from './Table';

function App() {
	const [apiUrl, setApiUrl] = useState('https://jsonplaceholder.typicode.com/users');
	const [items, setItems] = useState([]);

	const handleClick1 = () => {
		setApiUrl('https://jsonplaceholder.typicode.com/posts');
	};
	const handleClick2 = () => {
		setApiUrl('https://jsonplaceholder.typicode.com/comments');
	};
	const handleClick3 = () => {
		setApiUrl('https://jsonplaceholder.typicode.com/users');
	};

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch(apiUrl);
				const listItems = await response.json();
				setItems(listItems);
				console.log(listItems);
			} catch (err) {
				console.log(err.stack);
			}
		};
		fetchItems();
	}, [apiUrl]);

	return (
		<div className="App">
			<main className="main">
				<div className="buttons">
					<button onClick={handleClick3} className="usersButton">
						users
					</button>
					<button onClick={handleClick1} className="postsButton">
						posts
					</button>
					<button onClick={handleClick2} className="commentsButton">
						comments
					</button>
				</div>
				<div className="ItemList">
					{/* <ItemList items={items} /> */}
					<Table items={items} />
				</div>
			</main>
		</div>
	);
}

export default App;
