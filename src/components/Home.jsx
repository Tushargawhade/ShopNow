import React, { useContext } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

function Home() {
  const [products] = useContext(ProductContext);

  return products ? (
    <>
      <Nav />

      <div className="h-full w-[85%] bg-zinc-50 p-8 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {products.map((p, i) => (
          <Link
            to={"/details/1"}
            className="card w-[19%] h-[38vh] flex flex-col justify-center items-center mr-3 mb-3 border shadow  "
          >
            <div
              className="w-[80%] h-[65%] bg-contain bg-no-repeat bg-center mb-3 hover:scale-105"
              style={{
                backgroundImage: `url(${p.image})`,
              }}
            ></div>
            <h1 className="hover:text-blue-300 px-2">{p.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
