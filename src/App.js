import './App.css';
import bg from './background.svg';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Posts from './components/posts/Posts';



function App() {
	return (
		<div className="app">
			<div className="background-image">
				<img src={bg} alt="background-image" />
			</div>
			<div className="content">
				<Navbar />
				<Posts />
				<Footer />
			</div>
		</div>
	);
}

export default App;
