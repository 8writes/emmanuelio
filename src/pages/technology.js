import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const technology = () => {
  return (
    <Layout>
      <div className="main">
        <Seo title="Technology" />

        <h1 className="font-righteous">Technologies</h1>
        <div className="flex justify-between">
          <div className="hover:scale-125 ease-out duration-200">
            <Link to="/projects">
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
            <Link to="/contact">
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
        <div class="grid grid-cols-1 md:grid-cols-4 gap-x-9 gap-y-9 text-center mt-24 md:mt-36 font-righteous text-2xl">
          <div className="bg-orange-500 md:hover:scale-110 ease-out duration-200">
            HTML
          </div>
          <div className="bg-blue-500 md:hover:-translate-y-1 ease-out duration-200">
            CSS
          </div>
          <div className="bg-yellow-500 md:hover:scale-110 ease-out duration-200">
            JAVASCRIPT
          </div>
          <div className="bg-cyan-500 md:hover:-translate-y-1 duration-200">
            REACTJS
          </div>
          <div className="bg-violet-500 md:hover:-translate-y-1 ease-out duration-200">
            GATSBYJS
          </div>
          <div className="bg-neutral-900 md:hover:scale-110 duration-200">
            NEXTJS
          </div>
          <div className="bg-cyan-700  md:hover:-translate-y-1 duration-200">
            TAILWINDCSS
          </div>
          <div className="bg-pink-500 md:hover:scale-110 ease-out duration-200">
            SASS
          </div>
          <div className="bg-fuchsia-500 md:hover:-translate-y-1 ease-out duration-200">
            STYLED-C
          </div>
          <div className="bg-zinc-800  md:hover:scale-110 duration-200">
            GITHUB
          </div>
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:hover:-translate-y-1 ease-out duration-200">
            FIGMA
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default technology
