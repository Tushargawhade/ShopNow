import React from 'react'

function Nav() {
  return (
    <nav className="h-full w-[15%] bg-zinc-100 p-2 flex flex-col items-center   ">
        <button className="px-3 py-1 border border-blue-300 text-blue-400 rounded mt-5 ">
          Add New Product
        </button>

        <hr className="w-[80%] my-4" />

        <h1 className="w-[80%] text-2xl  font-semibold  ">Category</h1>

        <ul className="w-[80%] mt-3">
          <li className="flex items-center mb-2">
            <span className="w-4.5 h-4.5 rounded-full bg-blue-200 mr-2"></span>
            cat 1
          </li>

          <li className="flex items-center mb-2">
            <span className="w-4.5 h-4.5 rounded-full bg-pink-200 mr-2"></span>
            cat 1
          </li>

          <li className="flex items-center mb-2">
            <span className="w-4.5 h-4.5 rounded-full bg-green-200 mr-2"></span>
            cat 1
          </li>
        </ul>
      </nav>
  )
}

export default Nav
