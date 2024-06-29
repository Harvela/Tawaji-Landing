import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Team } from './Team';

const Base = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export { Base };
