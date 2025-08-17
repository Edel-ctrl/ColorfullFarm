import {useState} from "react";
import {IoBagHandleOutline, IoStorefrontOutline} from "react-icons/io5";
import HeroPng from "../../assets/fruit-plate.png";
import LeafPng from "../../assets/leaf.png";
import {motion} from "framer-motion";
import {FadeRight} from "../../utility/animation";

const Hero = () => {
	const [activeButton, setActiveButton] = useState("primary");
	return (
		<section>
			<div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[650px]">

				{/* Content <- Side Column */}
				<div className="relative flex flex-col justify-center py-14 md:py-0  z-10">

					{/* Brand Info */}
					<div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
						{/* Primary Heading Text + Animation */}
						<motion.h1
							variants={FadeRight(0.6)}
							initial="hidden"
							animate="visible"
							className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia"
						>
							Healthy
							<br/>
							From <span className="text-secondary">Farm!</span>
						</motion.h1>

						{/* H2 Heading Text + Animation */}
						<motion.p
							variants={FadeRight(0.9)}
							initial="hidden"
							animate="visible"
							className="text-2xl tracking-wider"
						>
							High Quality, Fair Price, Zero Waste
						</motion.p>

						{/* Info Text + Animation */}
						<motion.p
							variants={FadeRight(1.2)}
							initial="hidden"
							animate="visible"
							className="text-gray-500"
						>
							Connect directly with local farmers.
							Help reduce food waste -
							<br/>
							Order now and get premium quality rescued produce
							at 30-40% below market price, while supporting your community!

						</motion.p>

						{/* Btn Section + Animation*/}
						<motion.div
							variants={FadeRight(1.5)}
							initial="hidden"
							animate="visible"
							className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
						>
							{/* Primary Button */}
							<button
								className={`primary-btn ${activeButton === "glass" ? "inactive" : ""} flex items-center gap-2`}
								onClick={() => setActiveButton("primary")}
							>
								<span><IoBagHandleOutline/></span>
								Order Now
							</button>

							{/* Glass morphism Button */}
							<button
								className={`glass-btn ${activeButton === "glass" ? "active" : ""} flex items-center gap-2`}
								onClick={() => setActiveButton("glass")}
							>
								<span><IoStorefrontOutline/></span>
								Start Selling
							</button>
						</motion.div>
					</div>
				</div>

				{/* Image -> Side Column*/}
				<div className="flex justify-center items-center">

					{/* Hero Image */}
					<motion.img
						initial={{opacity: 0, x: 200, rotate: 75}}
						animate={{opacity: 1, x: 0, rotate: 0}}
						transition={{duration: 1, delay: 0.2}}
						src={HeroPng}
						alt=""
						className="w-[350px] md:w-[550px] drop-shadow"
					/>
				</div>
				{/* Leaf Image */}
				<div className="absolute top-14 md:top-0 right-1/2 blur-sm opacity-90 rotate-40">
					<motion.img
						initial={{opacity: 0, y: -200, rotate: 75}}
						animate={{opacity: 1, y: 0, rotate: 0}}
						transition={{duration: 1, delay: 1.5}}
						src={LeafPng}
						alt=""
						className="w-full md:max-w-[300px]"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;