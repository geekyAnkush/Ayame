import React from "react";
import Image from "../shared/image";
import Link from "next/link";
import logo from "../../../public/ayame.webp";
import { AiFillGithub } from "react-icons/ai";
import { BsMessenger, BsTwitter, BsLinkedin } from "react-icons/bs";

const LINKS = [
  {
    title: "github",
    Icon: AiFillGithub,
    href: "https://github.com/geekyAnkush",
  },
  {
    title: "email",
    Icon: BsMessenger,
    href: "mailto:000.kumarankush@gmail.com",
  },
  {
    title: "linkedin",
    Icon: BsLinkedin,
    href: "https://linkedin.com/in/kumar-ankush-57596118b",
  },
  {
    title: "twitter",
    Icon: BsTwitter,
    href: "https://twitter.com/geekyAnkush",
  },
];

const Footer = () => {
  return (
    <footer className="mt-20 px-[4%] py-8">
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <Link href="/">
            <span className="flex items-center justify-center text-white ">
              <div className="flex">
                <Image
                  containerclassname="relative h-[24px] w-[24px] md:h-[30px] md:w-[30px] mr-2"
                  layout="fill"
                  src={logo}
                  alt="Ayame"
                  priority
                />
              </div>
              <span className="text-sm md:text-[20px] 2xl:[30px] font-semibold uppercase">
                Ayame
              </span>
            </span>
          </Link>
          <div className="flex gap-2">
            {LINKS.map((link) => (
              <ContactItem
                key={link.title}
                title={link.title}
                Icon={link.Icon}
                href={link.href}
              />
            ))}
          </div>
          <p className="max-w-[850px] w-full text-slate-300 text-sm">
            Ayame is not affiliated with or endorsed by any of the anime studios
            behind the creation of the anime presented on this site. This
            website is only an user interface presenting/linking various
            self-hosted files across the internet by other third-party providers
            for easy access.
          </p>
          <p className="text-slate-300 text-sm">
            © Ayame 2023 | Built with Consumet and Enime API
          </p>
        </div>
      </div>
    </footer>
  );
};

interface ContactItemProps {
  Icon: React.ComponentType<any>;
  href: string;
  title: string;
}

const ContactItem = ({ Icon, href, title }: ContactItemProps): JSX.Element => (
  <a href={href} target="_blank" rel="noreferrer" aria-label={`go to ${title}`}>
    <Icon className="w-6 h-6 hover:text-[#6a55fa] text-white" />
  </a>
);

export default Footer;
