import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="main ">
      <Seo title="Home" />

      <div>
        <h1 className="font-lucky text-center text-6xl md:text-7xl ml-0 hover:scale-105 ease-out duration-200">
          Emmanuel Chisom
        </h1>
        <div className="flex justify-center">
          <h2 className="text-center font-righteous  text-3xl md:text-4xl ml-0 hover:scale-105 ease-out duration-200">
            Frontend Developer.
          </h2>

          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex gap-10 justify-center mt-16 md:mt-28 ">
        <div>
          <Link to="/about">
            <button className="bg-transparent animate-bounce hover:text-white font-semibold font-open text-gray-300 py-2 px-4 border border-white-500 rounded w-40">
              About Me
            </button>
          </Link>
        </div>
        <div>
          <Link to="/projects">
            <button className="bg-transparent animate-bounce hover:text-white font-semibold font-open text-gray-300 py-2 px-4 border border-white-500 rounded w-40">
              Projects
            </button>
          </Link>
        </div>
      </div>

      <div className="flex gap-10 mt-6 justify-center ">
        <div>
          <Link to="technology">
            <button className="bg-transparent animate-bounce hover:text-white font-semibold font-open text-gray-300 py-2 px-4 border border-white-500 rounded w-40">
              Technologies
            </button>
          </Link>
        </div>
        <div>
          <Link to="contact">
            <button className="bg-transparent animate-bounce hover:text-white font-semibold font-open text-gray-300 py-2 px-4 border border-white-500 rounded w-40">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
