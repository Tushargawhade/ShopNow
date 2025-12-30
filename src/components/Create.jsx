import React, { useState } from 'react'

const Create = () => {

    const [tittle, settittle] =  useState("");
    const [image, setimage] =  useState("");
    const [category, setcategory] =  useState("");
    const [price, setprice] =  useState("");
    const [description, setdescription] =  useState("");

    const AddProductHandler = (e) =>{
        e.preventDefault();
        const product ={
            tittle,
            image,
            category,
            price,
            description,
        }

          console.log(product);
    }
  



  return (
    <form onSubmit={AddProductHandler} className='p-[5%] w-screen h-screen flex flex-col items-center '>

        <h1 className='text-3xl w-1/2 mb-3 font-semibold '>Add New Product</h1>

        <input 
            type="url" 
            placeholder='image link' 
            className='text-1xl bg-zinc-100 rounded p-1 w-1/2 mb-2'
            onChange={(e)=> setimage(e.target.value)} 
            value={image}
        />

        <input 
            type="text" 
            placeholder='tittle' 
            className='text-1xl bg-zinc-100 rounded p-1 w-1/2 mb-2'
            onChange={(e)=> settittle(e.target.value)} 
            value={tittle}
        />

        <div className='w-1/2 flex justify-between'>

        <input 
            type="text" 
            placeholder='category' 
            className='text-1xl bg-zinc-100 rounded p-1 w-[49%] mb-2'
            onChange={(e)=> setcategory(e.target.value)} 
            value={category}
        />

        <input 
            type="number" 
            placeholder='price' 
            className='text-1xl bg-zinc-100 rounded p-1 w-[49%] mb-2 '
            onChange={(e)=> setprice(e.target.value)} 
            value={price}
        />
        </div>

        <textarea 
            rows={10}
            className='text-1xl bg-zinc-100 rounded p-1 w-1/2 mb-3'
            placeholder='enter product description here'
            onChange={(e)=> setdescription(e.target.value)} 
            value={description}
        ></textarea>

        <div className='w-1/2'>
            <button className=" px-3 py-1 border border-blue-300 text-blue-400 rounded ">
                Add New Product
            </button>
        </div>
       
      
    </form>
  )
}

export default Create
