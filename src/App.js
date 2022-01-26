import './App.css';
import bg from './background.svg';
import Navbar from './components/Navbar';
import Posts from './components/Posts';



function App() {
	return (
		<div className="app">
			<div className="background-image">
				<img src={bg} alt="background-image" />
			</div>
			<div className="content">
				<Navbar />
				<Posts />
			</div>
		</div>
	);
}

export default App;
