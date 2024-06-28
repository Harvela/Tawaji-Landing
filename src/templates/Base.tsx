import { Navbar } from '@/navigation/Navbar';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Team } from './Team';

const backgroundImages = [
  '/assets/images/home/background.jpg',
  '/assets/images/home/background2.jpg',
  'https://res.cloudinary.com/dzj9hndxv/image/upload/v1718123404/6f5f2598-b63c-4a65-b34a-f319c42321e3_cqxcyc.jpg',
];

const Base = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div className="relative h-[100vh]">
        <div className="grid h-full grid-cols-3">
          {backgroundImages.map((image, index) => (
            <div key={index} className="group relative h-full overflow-hidden">
              <img
                src={image}
                alt={`background-${index}`}
                className="object-fit absolute left-0 top-0 h-full w-full transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute left-0 top-0 h-full w-full bg-primary-700/80 transition-all duration-500 group-hover:opacity-90 ${
                  index === 1
                    ? 'border-x-2 border-primary-700 bg-primary-700/70'
                    : ''
                }`}
              />
              <div className="absolute left-0 top-0 h-full w-full transition-all duration-500 group-hover:z-10 group-hover:scale-105"></div>
            </div>
          ))}
        </div>
        <div className="absolute left-0 top-0 mt-[60px] flex h-[100vh] w-full flex-col justify-between">
          <Navbar />
          <Hero />
        </div>
      </div>
      {/* <WhyUs />
      <Services /> */}
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export { Base };
