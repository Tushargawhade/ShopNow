import React from "react";
import { Link } from "react-router-dom";

function Details() {
  return (
    <div className="h-full w-[70%] m-auto  flex  justify-between items-center p-[10%]">
        <img
            className=" w-[40%] h-[90%] object-contain "
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
            alt=""
        />

        <div className="content w-[55%]">
            <h1 className="text-3xl font-semibold ">
                Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </h1>
            <h3 className="text-zinc-400 py-1">men's clothing</h3>
            <h2 className="text-red-400 py-1">$ 109.95</h2>
            <p className="text-sm pb-[6%]">
                Your perfect pack for everyday use and walks in the forest. Stash your
                laptop (up to 15 inches) in the padded sleeve, your everyday
            </p>

            <Link className="px-3 py-1 border border-blue-300 text-blue-400 rounded mt-5 mr-4 ">
                Edit
            </Link>
            <Link className="px-3 py-1 border border-red-300 text-red-400 rounded mt-5 ">
                Delete
            </Link>
        </div>
    </div>
  );
}

export default Details;
