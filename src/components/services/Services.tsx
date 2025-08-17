import Fruit1 from "../../assets/fruits/apple1.png";
import Fruit2 from "../../assets/fruits/pepper.png";
import Fruit3 from "../../assets/fruits/broccoli.png";
import Fruit4 from "../../assets/fruits/blackberry.png";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";

const ServicesData = [
  {
    id: 1,
    title: " Red Apples",
    link: "#",
    price: "$3.99",
    desc: "Lorem ipsum dolor sit amet consectetur radicalising elit. Redundancy iusto minima ad ut id eos accusation aut, material quits incident!",
    img: Fruit1,
    icon: "https://placehold.co/50x50",
    delay: 0.3,
  },
  {
    id: 2,
    title: " Sweet Peppers",
    link: "#",
    price: "$4.99",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    img: Fruit2,
    icon: "https://placehold.co/50x50",
    delay: 0.6,
  },
  {
    id: 3,
    title: " Tasty Broccoli",
    link: "#",
    price: "$5.99",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    img: Fruit3,
    icon: "https://placehold.co/50x50",
    delay: 0.9,
  },
  {
    id: 4,
    title: "Delicious Berries",
    link: "#",
    price: "$2.99",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
    img: Fruit4,
    icon: "https://placehold.co/50x50",
    delay: 1.2,
  },
];
const Services = () => {
  return (
    <>
      <section className="">
        <div className="container mx-auto pt-12 pb-20">
          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl font-bold text-left pb-10 uppercase"
          >
            Rescuing Surplus Produce
          </motion.h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
            {ServicesData.map((item) => (
              <motion.div
                variants={FadeLeft(item.delay)}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.1 }}
                key={item.id}
                className="bg-white rounded-3xl shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center px-4 py-2"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[60px] mb-4 scale-125 transform -translate-y-6"
                />
                <div>
                  <h1 className="text-lg font-semibold">{item.title}</h1>
                  <p className="text-lg font-semibold text-secondary">
                    {item.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;