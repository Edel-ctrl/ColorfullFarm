import {motion} from "framer-motion";
import {FadeLeft} from "../../utility/animation";
import BannerPng from "../../assets/back3.jpg";

const bgStyle = {
	backgroundImage: `url(${BannerPng})`,
	backgroundPosition: "center",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
}

const Banner3 = () => {
	return (
		<>
			{/* <section className="bg-secondary/10"> */}
			<section className="container mx-auto mb-12 ">
				<div
					style={bgStyle}
					className="container mx-auto grid grid-cols-1 md:grid-cols-2
        space-y-6 md:space-y-0 py-14 rounded-3xl 
        backdrop-blur-sm shadow-2xl ">

					{/* blank div */}
					<div>
					</div>

					{/* Banner Info */}
					<div className="flex flex-col justify-center">
						<div className="text-center md:text-left space-y-4
            lg:max-w-[400px]">
							<motion.h1
								variants={FadeLeft(0.5)}
								initial="hidden"
								whileInView="visible"
								viewport={{once: true}}
								className="text-3xl lg:text-6xl text-secondary font-bold
                uppercase"
							>Farm <span className="text-black">Sharing</span>
							</motion.h1>
							<motion.p
								variants={FadeLeft(0.7)}
								initial="hidden"
								whileInView="visible"
								viewport={{once: true}}
							>
								Rising costs and broken supply chains leave much of Israel's harvest unused.

							</motion.p>
							<motion.p
								variants={FadeLeft(0.9)}
								initial="hidden"
								whileInView="visible"
								viewport={{once: true}}
							>
								To help local farmers, we have launched:
								<br/>
								<span className="text-secondary font-bold">Farm </span>
								<span className="font-bold">- Sharing</span> is a digital platform that connects
								farmers directly with customers
							</motion.p>

							{/* Button section */}
							<motion.button
								variants={FadeLeft(0.9)} // animation with delay 0.9с
								initial="hidden"
								whileInView="visible"
								viewport={{once: true}}
								className="primary-btn"
							>
								Order Now
							</motion.button>
						</div>
					</div>
				</div>
			</section>
		</>

	);
};

export default Banner3;