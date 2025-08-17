import {motion, AnimatePresence} from "framer-motion";
import {NavbarMenu} from "./Navbar";

interface ResponsiveMenuProps {
	open: boolean;
}

const ResponsiveMenu = ({open}: ResponsiveMenuProps) => {
	return (
		<AnimatePresence mode="wait">
			{open && (
				<motion.div
					initial={{opacity: 0, y: -100}}
					animate={{opacity: 1, y: 0}}
					exit={{opacity: 0, y: -100}}
					transition={{duration: 0.2}}
					className="absolute top-20 left-0 w-full h-screen z-20 sm:top-16 md:top-20"
					//className="absolute top-20 left-0 w-full h-screen z-20"
				>
					<div
						className="text-xl font-semibold uppercase bg-[#de2c4d] text-white backdrop-blur-md py-10 m-6 rounded-3xl">
						<ul className="flex flex-col items-center gap-10">
							{NavbarMenu.map((item) => (
								<li key={item.id}>
									<a href={item.link} className="hover:text-gray-200">
										{item.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ResponsiveMenu;