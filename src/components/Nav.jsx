import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom';

function Nav() {
 

  const [products] = useContext(ProductContext)


  let distinct_category = products && products.reduce((acc,cv)=> [...acc, cv.category ],[]);

  distinct_category = [...new Set(distinct_category)];

  console.log(distinct_category)


  
  const color = () => {

    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`;

  }




  return (
    <nav className="h-full w-[15%] bg-zinc-200 p-2 flex flex-col items-center   ">
        <button className="px-3 py-1 border border-blue-300 text-blue-400 rounded mt-5 ">
          Add New Product
        </button>

        <hr className="w-[80%] my-4" />

        <h1 className="w-[80%] text-2xl  font-semibold  ">Category</h1>



        <div className="w-[80%] mt-3">


          {distinct_category.map((c , i)=>
            <Link key={i} to={`/?category=${c}`} className="flex items-center mb-2">

              <span style={{backgroundColor:color()}} className="w-4.5 h-4.5 rounded-full bg-blue-200 mr-2"></span>
              {c}
            </Link>

          )}



        

         
        </div>

      </nav>
  )
}

export default Nav
