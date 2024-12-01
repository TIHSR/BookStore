import React from 'react';
function Cards({item}) {
    
  return (
    <>
    <div>
    <div className="card w-92 bg-base-100 shadow-xl ">
  <figure>
    <img
      src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1728469664~exp=1728473264~hmac=1a2c8e6969826463780bd35c862dff58ac3f443757cc59850f1d6110fbcef228&w=740"
      alt="Book"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>provide knowledge, information, and entertainment to the reader. </p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards