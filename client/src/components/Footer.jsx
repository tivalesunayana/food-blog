import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

import React from "react";

export default function FooterComponent() {
  return (
    <Footer
      container
      className="border border-t-8 border-purple-600 bg-green-50"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div>
          {" "}
          <div className="mt-5">
            <Link to="/">
              <span className="self-center whitespace-nowrap p-3 bg-gradient-to-r from-blue-400 via-grren-900 to-pink-200 rounded-lg outline text-white">
                Food blog
              </span>
            </Link>
          </div>
          <div className="w-full flex gap-x-8 md:justify-center">
            <div>
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/"
                  className="text-black text-sm font-semibold"
                >
                  Home
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/about"
                  className="text-black text-sm font-semibold"
                >
                  About
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/projects"
                  className="text-black text-sm font-semibold"
                >
                  Projects
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/tivalesunayana"
                  className="text-black text-sm font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <Footer.Divider />
          <div className="flex">
            <div className="w-full mt-5 sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright
                href="#"
                by="Food Blog"
                year={new Date().getFullYear()}
                className="text-black"
              />
            </div>
            <div className="flex gap-6 sm:mt-0 mt-8  ">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon
                href="https://github.com/tivalesunayana"
                icon={BsGithub}
              />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
