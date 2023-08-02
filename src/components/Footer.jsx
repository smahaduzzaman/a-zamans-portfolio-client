import React from 'react';
import github from '../assets/images/Icons/github.svg';
import linkedIn from '../assets/images/Icons/linkedIn.svg';
import facebook from '../assets/images/Icons/facebook.svg';
import netlify from '../assets/images/Icons/netlify.svg';
import leetcode from "../assets/images/Icons/leetcode.svg";
import behance from "../assets/images/Icons/behance.svg";

const Footer = () => {
  return (
    <footer className="dark:bg-black-800 dark:text-gray-50">
      <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
        <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          <li>
            <a href="/" target="_blank">
              Home
            </a>
          </li>
          <li>
            <a href="/about" target="_blank">
              About
            </a>
          </li>
          <li>
            <a href="/blog" target="_blank">
              Blog
            </a>
          </li>
          <li>
            <a href="/skills" target="_blank">
              Skills
            </a>
          </li>
          <li>
            <a href="/services" target="_blank">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" target="_blank">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <div className="flex justify-center space-x-4">
            <a
              rel="noopener noreferrer"
              href="https://github.com/smahaduzzaman"
              target="_blank"
              title="GitHub"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-[white] text-[#06223F]"
            >
              <img className="w-2/3" src={github} alt="GitHub" />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/s-m-ahaduzzaman-b5a727199/"
              target="_blank"
              title="LinkedIn"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-[white] text-[#06223F]"
            >
              <img className="w-2/3" src={linkedIn} alt="linkedIn" />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.facebook.com/sm.ahaduzzaman.10"
              target="_blank"
              title="Facebook"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-[white] text-[#06223F]"
            >
              <img className="w-2/3" src={facebook} alt="Facebook" />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://app.netlify.com/teams/smahaduzzaman/sites"
              target="_blank"
              title="Netlify"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-[white] text-[#06223F]"
            >
              <img className="w-2/3" src={netlify} alt="Netlify" />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://leetcode.com/smahaduzzaman"
              target="_blank"
              title="Leetcode"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-[white] text-[#06223F]"
            >
              <img className="w-2/3" src={leetcode} alt="Leetcode" />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.behance.net/smahaduzzaman"
              title="Behance"
              target="_blank"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-[white] text-[#06223F]"
            >
              <img className="w-2/3" src={behance} alt="Behance" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;