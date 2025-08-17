import {TiSocialFacebookCircular} from "react-icons/ti";
import {TiSocialInstagramCircular} from "react-icons/ti";
import {TiSocialLinkedinCircular} from "react-icons/ti";
import {TiSocialYoutubeCircular} from "react-icons/ti";
import {TiSocialTwitterCircular} from "react-icons/ti";
import {PiFarmThin} from "react-icons/pi";
import {motion} from "framer-motion";
import {CiLocationOn} from "react-icons/ci";


const Footer = () => {
	return (
		<>
			<footer className="-mx-1 md:-mx-8 lg:-mx-16 bg-primary/10 py-12 mt-12">
				{/* Animation Section */}
				<motion.div
					initial={{opacity: 0}}
					whileInView={{opacity: 1}}
					transition={{duration: 1, delay: 0.2}}
					className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

					{/* Logo Section */}
					<div className="text-2xl flex items-center gap-2 font-bold">
						<p className="text-secondary">FARM</p>
						<PiFarmThin/>
						<p className="">SHARING</p>
					</div>

					{/* Social Icons Section */}
					<div className="text-2xl flex items-center gap-4 text-gray-700">
						<TiSocialFacebookCircular/>
						<TiSocialInstagramCircular/>
						<TiSocialLinkedinCircular/>
						<TiSocialYoutubeCircular/>
						<TiSocialTwitterCircular/>
						<CiLocationOn/>
					</div>
				</motion.div>
			</footer>
		</>
	);
}

export default Footer;