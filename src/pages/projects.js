import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const projects = () => {
  return (
    <Layout>
      <div className="main">
        <Seo title="Projects" />

        <h1 className="font-righteous">Projects</h1>
        <div className="flex justify-between">
          <div className="hover:scale-125 ease-out duration-200">
            <Link to="/about">
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
            </Link>
          </div>
          <div className="hover:scale-125 ease-out duration-200">
            <Link to="/">
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Link>
          </div>
          <div className="hover:scale-125 ease-out duration-200">
            <Link to="/technology">
              {" "}
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div class="bg-neutral-900 rounded-lg overflow-hidden hover:scale-105 ease-out duration-200 font-righteous">
            <div class="m-5">
              <h1 class="text-xl leading-relaxed text-lime-400">
                THIS WEBSITE
              </h1>
              <p class="text-base leading-relaxed text-white ">
                This is my personal website built with gatsby.
              </p>
              <div className="flex gap-5 ml-3 ">
                <a className="cursor-not-allowed">Visit</a>
                <a
                  className=""
                  href="https://github.com/8writes/emmanuelio"
                  target="blank"
                >
                  GitHub
                </a>
                <div className="ml-2 md:ml-6 pt-1 text-xs text-gray-400">
                  <a>GATSBY</a>-<a>TAILWIND</a>-<a>SASS</a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-neutral-800 rounded-lg overflow-hidden hover:scale-105 ease-out duration-200 font-righteous">
            <div class="m-5">
              <h3 class="text-xl leading-relaxed text-lime-400">
                ZEDDPAY REDESIGNED
              </h3>
              <p class="text-base leading-relaxed text-white">
                Here I redesigned a bit of the landing page of the Zeddpay
                Company.
              </p>
              <div className="flex gap-5 ml-3 ">
                <a
                  className=""
                  href="https://zeddpay.gatsbyjs.io"
                  target="blank"
                >
                  Visit
                </a>
                <a
                  className=""
                  href="https://github.com/8writes/zeddpay"
                  target="blank"
                >
                  GitHub
                </a>
                <div className="ml-2 md:ml-6 pt-1 text-xs text-gray-400">
                  <a>GATSBY</a>-<a>TAILWIND</a>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-neutral-800 rounded-lg overflow-hidden hover:scale-105 ease-out duration-200 font-righteous">
            <div class="m-5">
              <h3 class="text-xl leading-relaxed text-lime-400">
               Abavo Construction
              </h3>
              <p class="text-base leading-relaxed text-white ">
                This is a company website built with bootstrap.
              </p>
              <div className="flex flex-col-2 gap-5 ml-3 ">
                <a  className=""
                  href="https://abavoconstruction.com"
                  target="blank">Visit</a>
                <a className="cursor-not-allowed">GitHub</a>
                <div className="ml-2 md:ml-6 pt-1 text-xs text-gray-400">
                  <a>HTML</a>-<a>BOOTSTRAP</a>-<a>SASS</a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-neutral-900 rounded-lg overflow-hidden hover:scale-105 ease-out duration-200 font-righteous">
            <div class="m-5">
              <h3 class="text-xl leading-relaxed text-lime-400">
                Nothing here to see.
              </h3>
              <p class="text-base leading-relaxed text-white ">
                I will add a project here once I have one! , but for now Lorem
                ipsum dolor sit amet. :) .
              </p>
              <div className="flex gap-5 ml-3 ">
                <a className="cursor-not-allowed">Visit</a>
                <a className="cursor-not-allowed">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default projects
