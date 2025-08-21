import {motion} from "framer-motion";
import BannerPng from "../../assets/veg-splash.png";
import {FadeUp} from "../../utility/animation";

const Banner = () => {
	return (
		<>
			<section className="-mx-1 md:-mx-8 lg:-mx-16 bg-secondary/10">
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-2
        space-y-6 md:space-y-0 py-14">

					{/* Banner Image <-Left Column */}
					<div className="flex justify-center items-center">
						<motion.img
							initial={{opacity: 0, scale: 0.5}}
							whileInView={{opacity: 1, scale: 1}}
							transition={{type: "spring", stiffness: 100, delay: 0.2}}
							viewport={{once: true}}
							src={BannerPng}
							alt=""
							className="w-[400px] md:max-w-[600px] h-full
            object-cover"
						/>
					</div>

					{/* Banner Info */}
					<div className="flex flex-col justify-center">
						<div className="text-center md:text-left space-y-4
            lg:max-w-[400px]">
							<motion.h1
								variants={FadeUp(0.5)}
								initial="hidden"
								whileInView="visible"
								viewport={{once: true}}
								className="text-3xl lg:text-6xl text-shadow-black font-bold
                uppercase"
							>Helping Growers With <span className="text-secondary">Sustainable </span>Farming
							</motion.h1>
							<motion.p
								variants={FadeUp(0.7)}
								initial="hidden"
								whileInView="visible"
								viewport={{once: true}}
							>
								Rising costs and broken supply chains leave much of Israel’s harvest unused.
								We stand with Israeli farmers — rescuing their surplus produce and delivering
								it ripe and ready to consumers at prices they can afford
							</motion.p>
							<motion.p
								variants={FadeUp(0.9)}
								initial="hidden"
								whileInView="visible"
								viewport={{once: true}}
							>
								To help local farmers, we have launched:
								<br/>
								<span className="text-secondary font-bold">Farm </span>
								<span className="font-bold">- Sharing</span> is a digital platform that connects
								farmers directly with customers, providing fair prices,
								transparency and support for Israeli agriculture
							</motion.p>

							{/* Button section (Контейнер для кнопки) */}
							<motion.button
								variants={FadeUp(1.1)} // анимация с задержкой 1.1с
								initial="hidden"
								whileInView="visible"
								viewport={{once: true}}
								className="primary-btn"
							>
								Learn More
							</motion.button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Banner;