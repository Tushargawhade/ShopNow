import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

function Details() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const getSingleproduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleproduct();
  }, []);

  return product ? (
    <div className="h-full w-[70%] m-auto  flex  justify-between items-center p-[10%]">
      <img
        className=" w-[40%] h-[90%] object-contain "
        src={`${product.image}`}
        alt=""
      />

      <div className="content w-[55%]">
        <h1 className="text-3xl font-semibold ">{product.title}</h1>
        <h3 className="text-zinc-400 py-1">{product.category}</h3>
        <h2 className="text-red-400 py-1">$ {product.price}</h2>
        <p className="text-sm pb-[6%]">{product.description}</p>

        <Link className="px-3 py-1 border border-blue-300 text-blue-400 rounded mt-5 mr-4 ">
          Edit
        </Link>
        <Link className="px-3 py-1 border border-red-300 text-red-400 rounded mt-5 ">
          Delete
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Details;
