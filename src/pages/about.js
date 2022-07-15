import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const about = () => {
  return (
    <Layout>
      <div className="main">
        <Seo title="About" />

        <h1 className="font-righteous">About Me</h1>
        <div className="flex justify-between">
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div class="flex">
        <div class="whitespace-normal mt-20 text-center tracking-wide leading-loose font-semibold font-open text-xl mr-2 ml-2 md:mr-8 md:ml8 ">
          <p>
            I'm a Frontend Developer, building exciting{" "}
            <a class="text-red-300">web apps</a> that are easy to navigate &
            functional.
          </p>
          <p>
            I work with technologies like{" "}
            <a class="text-blue-300">GatsbyJs</a>, <a class="text-zinc-300">NextJs</a>, 
             <a class="text-cyan-700	">Tailwindcss</a>.
          </p>
          <p>
            I'm drawn to visual aspects of programming and enjoy spending my
            time working on the Frontend side of things.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default about
