import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { services } from '@/utils/services';

const Hero: React.FC = () => {
  return (
    <div
      id="home"
      className="flex h-[90vh] w-full flex-col items-center justify-center p-4 text-center md:p-0"
    >
      <Link href="#" className="flex flex-row items-center">
        <img src="/assets/images/home/logo.png" className="h-16" alt="Logo" />
        <h1 className="text-5xl font-semibold text-white">TAWAJI</h1>
      </Link>
      <h2 className="my-[30px] text-[14px] text-white/80 md:text-[24px]">
        L’entreprise qui vous offre des servces de qualite
      </h2>
      <div className="mt-[40px] grid grid-cols-3 gap-16">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.name}
              className="flex flex-col items-center justify-center rounded-lg bg-white px-12 py-8"
            >
              <IconComponent className="text-[36px] text-primary-700" />
              <h2 className="my-[24px] text-[22px] font-semibold text-primary-700">
                {service.name}
              </h2>
              <Link
                href={service.link}
                className="flex flex-row items-center gap-2 rounded-lg bg-primary-700 px-8 py-1 text-[11px] text-white md:text-sm"
              >
                <span>Visiter</span>
                <IoIosArrowForward />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Hero };
