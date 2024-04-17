// import React, { useState } from "react";
// import ProductData from "./ProductData";
// import { FaWindowClose } from "react-icons/fa";
// const Product = () => {
//   const [detail, setDetail] = useState([]);
//   const [close, setClose] = useState(false);

//   const detailPage = (Product) => {
//     setDetail([{ ...Product }]);
//     setClose(true);
//     console.log("Detail:", detail); // Debugging
//     console.log("Close:", close);
//   };
//   const handleClose = () => {
//     setClose(false);
//     console.log("Close Button Clicked"); // Debugging
//   };

//   return (
//     <>
//       {close ? (
//         <div className="detail_container">
//           <div className="detail_content">
//             <button className="close" onClick={handleClose}>
//               <FaWindowClose />
//             </button>

//             {detail.map((el) => {
//               return (
//                 <>
//                   <div className="detail_info" key={el.id}>
//                     <div className="img-box">
//                       <img src={el.image} alt={el.title} />
//                     </div>
//                     <div className="product_detail">
//                       <h2>{el.title}</h2>
//                       <h3>${el.price}</h3>
//                       <p>{el.description}</p>
//                       <button>Add to Cart</button>
//                     </div>
//                   </div>
//                 </>
//               );
//             })}
//           </div>
//         </div>
//       ) : null}

//       <div className="container">
//         {ProductData.map((curEl) => (
//           <div className="box" key={curEl.id}>
//             <div className="content">
//               <div className="img-box">
//                 <img
//                   src={curEl.image}
//                   alt={curEl.title}
//                   style={{ width: "200px", height: "200px" }}
//                 />
//               </div>
//               <div className="detail">
//                 <div className="info">
//                   <h2>{curEl.title}</h2>
//                   <h3>${curEl.price}</h3>
//                 </div>
//                 <button onClick={() => detailPage(curEl)} className="view">
//                   View
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Product;
import React from "react";

const ProductList = () => {
 const ProductData = [
   {
     id: 1,
     title: "Orange Rancher Hat",
     price: 45,
     inventory: 2,
     images: [
       {
         type: "defaultRect",
         src: "/img/OIP (2).jpeg",
       },
       {
         type: "defaultSquare",
         src: "/img/OIP (2).jpeg",
       },
       {
         type: "alt1Rect",
         src: "/img/OIP (2).jpeg",
       },
       {
         type: "alt1Square",
         src: "/img/OIP (2).jpeg",
       },
       {
         type: "alt2Rect",
         src: "/img/OIP (2).jpeg",
       },
       {
         type: "alt2Square",
         src: "/img/OIP (2).jpeg",
       },
       {
         type: "alt3Rect",
         src: "/img/OIP (2).jpeg",
       },
       {
         type: "alt3Square",
         src: "/img/OIP (2).jpeg",
       },
     ],
     description:
       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
   },
   {
     id: 2,
     title: "Flashy Heels",
     price: 60,
     inventory: 20,
     images: [
       {
         type: "defaultRect",
         src: "/img/OIP (1).jpeg",
       },
       {
         type: "defaultSquare",
         src: "/img/OIP (1).jpeg",
       },
       {
         type: "alt1Rect",
         src: "/img/OIP (1).jpeg",
       },
       {
         type: "alt1Square",
         src: "/img/OIP (1).jpeg",
       },
       {
         type: "alt2Rect",
         src: "/img/OIP (1).jpeg",
       },
       {
         type: "alt2Square",
         src: "/img/OIP (1).jpeg",
       },
       {
         type: "alt3Rect",
         src: "/assets/flashy-heels/alt-3-rt.jpg",
       },
       {
         type: "alt3Square",
         src: "/assets/flashy-heels/alt-3-sq.jpg",
       },
     ],
     description:
       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
   },
   {
     id: 3,
     title: "Black Shades",
     price: 54.99,
     inventory: 0,
     images: [
       {
         type: "defaultRect",
         src: "/img/OIP.jpeg",
       },
       {
         type: "defaultSquare",
         src: "/img/OIP.jpeg",
       },
       {
         type: "alt1Rect",
         src: "/img/OIP.jpeg",
       },
       {
         type: "alt1Square",
         src: "/img/OIP.jpeg",
       },
       {
         type: "alt2Rect",
         src: "/img/OIP.jpeg",
       },
       {
         type: "alt2Square",
         src: "/img/OIP.jpeg",
       },
       {
         type: "alt3Rect",
         src: "/img/OIP.jpeg",
       },
       {
         type: "alt3Square",
         src: "/img/OIP.jpeg",
       },
     ],
     description:
       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
   },
   {
     id: 4,
     title: "Gold and Leather Watch",
     price: 250,
     inventory: 99,
     images: [
       {
         type: "defaultRect",
         src: "/img/R.jpeg",
       },
       {
         type: "defaultSquare",
         src: "/img/R.jpeg",
       },
       {
         type: "alt1Rect",
         src: "/img/R.jpeg",
       },
       {
         type: "alt1Square",
         src: "/img/R.jpeg",
       },
       {
         type: "alt2Rect",
         src: "/img/R.jpeg",
       },
       {
         type: "alt2Square",
         src: "/img/R.jpeg",
       },
       {
         type: "alt3Rect",
         src: "/img/R.jpeg",
       },
       {
         type: "alt3Square",
         src: "/img/R.jpeg",
       },
     ],
     description:
       "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
   },
 ];

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {ProductData.map((product) => (
        <div
          key={product.id}
          style={{
            width: "300px",
            margin: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <h2>{product.title}</h2>
          <img
            src={product.images[0].src}
            alt={product.title}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>
            {product.inventory > 0
              ? `In stock: ${product.inventory}`
              : "Out of stock"}
          </p>
          <p>Description: {product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;