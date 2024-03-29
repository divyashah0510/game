import { faGithub, faInstagram, faLinkedin, faThreads } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-2 bg-transparent">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center bg-transparent">
        <p className="text-white mb-1 md:mb-0 bg-transparent">
          © 2023 YourWebsite. All rights reserved.
        </p>

        {/* <!-- Social Media Links --> */}
        <div className="flex space-x-4 bg-transparent">
          <a
            href="https://www.instagram.com/divya_shah2206/"
            className="bg-transparent hover:text-gray-800"
          >
            <FontAwesomeIcon
              className="bg-transparent h-8 w-8 instagramIcon m-3"
              fill="currentColor"
              icon={faInstagram}
            />
          </a>
          <a
            href="https://www.threads.net/@divya_shah2206"
            className="bg-transparent hover:text-gray-800"
          >
            <FontAwesomeIcon
              className="bg-transparent h-8 w-8 threadIcon m-3"
              fill="currentColor"
              icon={faThreads}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/divya-d-shah"
            className="bg-transparent text-gray-800 hover:text-blue-600"
          >
            <FontAwesomeIcon
              className="bg-transparent h-8 w-8 LinkedinIcon m-3"
              fill="currentColor"
              icon={faLinkedin}
            />
          </a>
          <a
            href="https://www.github.com/divyashah0510"
            className="bg-transparent text-gray-800 hover:text-blue-600"
          >
            <FontAwesomeIcon
              className="bg-transparent h-8 w-8 GitHubIcon m-3"
              fill="currentColor"
              icon={faGithub}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
