import React from 'react';
import { faLinkedin, faGithub, faDiscord, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className="flex flex-col w-full text-white items-center justify-center py-5 bg-[#02060c]">
      <p className="mt-3 justify-between">❤️ Made with Love for Food by Ketan 💛</p>
      <div className="my-3 flex items-center justify-center">
        <a
          className="ml-3 text-4xl transition-all hover:text-linkedIn"
          href=""
          target="_blank"
          title="Ketan Mehta Linkedin Profile"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className="ml-3 text-4xl transition-all hover:text-github"
          href=""
          target="_blank"
          title="Ketan Mehta GitHub repo"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className="ml-3 text-3xl transition-all hover:text-twitter"
          href=""
          target="_blank"
          title="Ketan Mehta Twitter Profile"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a
          className="ml-3 text-3xl transition-all hover:text-discord"
          href=""
          target="_blank"
          title="Ketan Mehta Discord Profile"
        >
          <FontAwesomeIcon icon={faDiscord} />
        </a>
      </div>
      <p className="pb-10" title="Just Kiddin' There is no Copyright for this">
        ©️ 2023 Tasty Food
      </p>
    </div>
  );
};

export default Footer;
