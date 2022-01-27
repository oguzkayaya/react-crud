import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import bg from './background.svg';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Posts from './components/posts/Posts';
import PostDetail from './components/postsDetail/PostDetail';
import Profile from './components/profile/Profile';



function App() {
	return (
		<div className="app">
			<div className="background-image">
				<img src={bg} alt="background-image" />
			</div>
			<div className="content">
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Posts />} />
						<Route path="/post/:id" element={<PostDetail />} />
						<Route path="/profile/:id" element={<Profile />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
