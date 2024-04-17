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
        src: "/public/img/OIP (2).jpeg",
      },
      {
        type: "alt1Rect",
        src: "/public/img/OIP (2).jpeg",
      },
      {
        type: "alt1Square",
        src: "/public/img/OIP (2).jpeg",
      },
      {
        type: "alt2Rect",
        src: "/public/img/OIP (2).jpeg",
      },
      {
        type: "alt2Square",
        src: "/public/img/OIP (2).jpeg",
      },
      {
        type: "alt3Rect",
        src: "/public/img/OIP (2).jpeg",
      },
      {
        type: "alt3Square",
        src: "/public/img/OIP (2).jpeg",
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
        src: "/public/img/OIP (1).jpeg",
      },
      {
        type: "defaultSquare",
        src: "/public/img/OIP (1).jpeg",
      },
      {
        type: "alt1Rect",
        src: "/public/img/OIP (1).jpeg",
      },
      {
        type: "alt1Square",
        src: "/public/img/OIP (1).jpeg",
      },
      {
        type: "alt2Rect",
        src: "/public/img/OIP (1).jpeg",
      },
      {
        type: "alt2Square",
        src: "/public/img/OIP (1).jpeg",
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
        src: "/public/img/OIP.jpeg",
      },
      {
        type: "defaultSquare",
        src: "/public/img/OIP.jpeg",
      },
      {
        type: "alt1Rect",
        src: "/public/img/OIP.jpeg",
      },
      {
        type: "alt1Square",
        src: "/public/img/OIP.jpeg",
      },
      {
        type: "alt2Rect",
        src: "/public/img/OIP.jpeg",
      },
      {
        type: "alt2Square",
        src: "/public/img/OIP.jpeg",
      },
      {
        type: "alt3Rect",
        src: "/public/img/OIP.jpeg",
      },
      {
        type: "alt3Square",
        src: "/public/img/OIP.jpeg",
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
        src: "/public/img/R.jpeg",
      },
      {
        type: "defaultSquare",
        src: "/public/img/R.jpeg",
      },
      {
        type: "alt1Rect",
        src: "/public/img/R.jpeg",
      },
      {
        type: "alt1Square",
        src: "/public/img/R.jpeg",
      },
      {
        type: "alt2Rect",
        src: "/public/img/R.jpeg",
      },
      {
        type: "alt2Square",
        src: "/public/img/R.jpeg",
      },
      {
        type: "alt3Rect",
        src: "/public/img/R.jpeg",
      },
      {
        type: "alt3Square",
        src: "/public/img/R.jpeg",
      },
    ],
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
];
// const ProductData = [
//   {
//     id: 1,
//     title: "Stud Earrings",
//     price: 2500,
//     inventory: 99,
//     description:
//       "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
//     image:
//       "https://media.kohlsimg.com/is/image/kohls/1836888?wid=500&hei=500&op_sharpen=1",
//   },
//   {
//     id: 2,
//     title: "Ring",
//     price: 2500,
//     inventory: 99,
//     description:
//       "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
//     image: "https://jooinn.com/images/wedding-rings-1.jpg",
//   },
//   {
//     id: 3,
//     title: "Gold Bracelet",
//     price: 1290,
//     inventory: 99,
//     description:
//       "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
//     image:
//       "https://dih7d64txoyuh.cloudfront.net/ProductImages/original/89009_1.jpg",
//   },
//   {
//     id: 4,
//     title: "Silver Earrings",
//     price: 90,
//     inventory: 99,
//     description:
//       "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
//     image:
//       "https://th.bing.com/th/id/OIP.omAjl4hCpzf0msX-qhcfBwHaHa?rs=1&pid=ImgDetMain",
//   },
//   {
//     id: 5,
//     title: "Pendant",
//     price: 390,
//     inventory: 49,
//     description:
//       "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
//     image:
//       "https://palmbeachjewelry.scene7.com/is/image/PalmBeachJewelry/49814_1.jpg",
//   },
// ];

// export default ProductData;
