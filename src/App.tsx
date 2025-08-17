import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Banner from "./components/banners/Banner";
import Banner2 from "./components/banners/Banner2";
import Banner3 from "./components/banners/Banner3";
import Footer from "./components/footer/Footer";

const App = () => {
	return (
		<>
			<main className="overflow-x-hidden">
				<Navbar/>
				<Hero/>
				<Services/>
				<Banner/>
				<Banner2/>
				<Banner3/>
				<Footer/>
			</main>
		</>
	);
};
export default App;
  
  
  


 

