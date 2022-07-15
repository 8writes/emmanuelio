import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const contact = () => {
  return (
    <Layout>
      <div className="main">
        <Seo title="Contact" />

        <h1 className="font-righteous">Contact Me</h1>
        <div className="flex justify-between">
          <div className="hover:scale-125 ease-out duration-200">
            <Link to="/technology">
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-x-9 gap-y-9 text-center mt-24  md:mt-24 font-righteous text-2xl">
          <div className="">
            <a href="https://github.com/8writes" target="_blank">
              Github
            </a>
          </div>
          
          <div className="">
            <a href="https://twitter.com/8mmanuel_" target="_blank">
              Twitter
            </a>
          </div>
           <div className="">
          <a>Resume</a>
        </div>
        </div>
      </div>
      <div class="grid text-center mt-24  md:mt-24 font-righteous text-2xl">
        <div className="">
          <a href="mailto: mailemmanuel00@gmail.com" target="_blank">
            Leave me an Email
          </a>
        </div>

       
      </div>
    </Layout>
  )
}

export default contact
