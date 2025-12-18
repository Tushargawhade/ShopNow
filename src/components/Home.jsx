import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>

    <Nav/>

    <div className="h-full w-[85%] bg-zinc-200 p-8 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">

        <Link to={"/details/1"} className="card w-[19%] h-[35vh] flex flex-col justify-center items-center mr-3 mb-3 border shadow  ">
          <div
            className="w-full h-[75%] bg-contain bg-no-repeat bg-center mb-3 hover:scale-110"
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png)",
            }}
          ></div>
          <h1 className="hover:text-blue-300">Lorem dolor sit amet.</h1>
        </Link>

      </div>
    
    
    
    </>
    
  )
}

export default Home
