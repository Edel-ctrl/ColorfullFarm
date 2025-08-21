import {motion} from "framer-motion"
import {FadeUp} from "../../utility/animation"
import BannerPng from "../../assets/fruit-plate2.png"

const Banner2 = () => {
	return (
		<>
			<section className=" ">
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-2
        space-y-6 md:space-y-0 py-14 md:py-24">
					{/* Brand Info <-Left Column */}
					<div className="flex flex-col justify-center">
						<div className="text-center md:text-left space-y-4
                    lg:max-w-[400px]">
							<motion.h1
								variants={FadeUp(0.5)}
								initial="hidden"
								whileInView="visible"
								viewport={{once: true}}
								className="text-3xl lg:text-6xl text-black font-bold
                        uppercase"
							>
								{""}
								Growing a <span className="text-secondary font-bold">Stronger </span>Tomorrow
							</motion.h1>
							<motion.p
								variants={FadeUp(0.7)}
								initial="hidden"
								whileInView="visible"
								viewport={{once: true}}
							>

								We provide our growers with the best quality products available
							</motion.p>

							{/* Button section (Контейнер для кнопки) */}
							<motion.button
								variants={FadeUp(1.1)}
								initial="hidden"
								animate="visible"
								className="primary-btn"
							>
								Explore now
							</motion.button>
						</div>
					</div>
					{/* Banner Image ->Right Column */}
					<div className="flex justify-center items-center">
						<motion.img
							initial={{opacity: 0, x: 200, rotate: 75}}
							whileInView={{opacity: 1, x: 0, rotate: 0}}
							transition={{duration: 1, delay: 0.2}}
							viewport={{once: true}}
							src={BannerPng}
							alt=""
							className="w-[500px] max-w-[600px] h-full
                    object-cover drop-shadow"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Banner2;