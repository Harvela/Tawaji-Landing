import Link from 'next/link';
import { FaPhoneVolume } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';

const links = {
  grid1: [
    { title: 'Tawaji Construction', link: 'home' },
    { title: 'Tawaji Travel', link: 'about' },
    { title: 'Tawaji Security', link: 'categories' },
  ],
  grid2: [
    {
      title: "Termes et conditions d'utilisation",
      link: 'https://helpful-vermicelli-00f.notion.site/Termes-et-conditions-d-utilisation-ebd469acacd945ebaabf6476041ac772?pvs=4',
    },
    {
      title: 'Politique de confidentialité',
      link: 'https://helpful-vermicelli-00f.notion.site/Politique-de-confidentialit-316f5dd689e84deeb7c05022335ad6f0?pvs=4',
    },
  ],
};

const Footer = () => (
  <footer className="bg-primary-700 p-4 py-8 md:p-16">
    <div className="text-text flex flex-col-reverse justify-between dark:bg-gray-800 md:flex-row ">
      <div className="mb-6 w-[100%] md:mb-0 md:w-[40%]">
        <Link href="#" className="flex flex-row items-center">
          <img
            src="/assets/images/home/logo.png"
            className="h-10 rounded-lg bg-white"
            alt="Logo"
          />
          <h1 className="pl-5 text-2xl font-bold text-white">TAWAJI</h1>
        </Link>

        <p className="mt-8 text-[12px] text-white md:text-[16px] ">
          Le collaborateur idéal pour vos projets de construction qui propose
          des équipements de qualité, comprenant des machines robustes, des
          camions performants, et des outils de construction innovants pour
          garantir l&apos;efficacité et la durabilité de vos travaux.
        </p>
      </div>
      <div>
        <h2 className="mb-6 mt-12 text-[16px] font-bold uppercase text-white md:mt-0 md:text-[20px] ">
          Liens utiles
        </h2>
        <ul className="text-white dark:text-gray-400">
          {links.grid1.map((grid, key) => (
            <li key={key} className="mb-4">
              <a href={grid.link} target="_blank" className="hover:underline">
                {grid.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="mb-6 mt-12 text-[16px] font-bold uppercase text-white md:mt-0 md:text-[20px]">
          Nous contacter
        </h2>

        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center gap-6 rounded-md bg-primary-700 text-white">
            <FaPhoneVolume className="text-[14px] text-white md:text-[16px]" />
            <p className="text-[14px] md:text-[16px]">+243 997455238</p>
          </div>
          <div className="flex flex-row items-center gap-6 rounded-md bg-primary-700 text-white">
            <MdMail className="text-[14px] text-white md:text-[16px]" />
            <a
              href="mailto:tawaji.congo@gmail.com"
              className="text-[14px] md:text-[16px]"
            >
              tawaji.congo@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export { Footer };
