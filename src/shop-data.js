const SHOP_DATA = [
  {
    title: 'Hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 25,
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 18,
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 35,
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        price: 25,
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 18,
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14,
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 18,
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14,
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16,
      },
    ],
  },
  {
    title: 'Sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 220,
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280,
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110,
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160,
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160,
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160,
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190,
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200,
      },
    ],
  },
  {
    id: 3,
    title: 'Jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125,
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90,
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90,
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165,
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185,
      },
    ],
  },
  {
    id: 4,
    title: 'Womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25,
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20,
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80,
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80,
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45,
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135,
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20,
      },
    ],
  },
  {
    id: 5,
    title: 'Mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325,
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20,
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25,
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25,
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40,
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25,
      },
    ],
  },
];

// const SHOP_DATA = {
//   "hats": [
//       {
//           "id": 1,
//           "name": "Brown Brim",
//           "imageUrl": "https://i.ibb.co/ZYW3VTp/brown-brim.png",
//           "price": 25
//       },
//       {
//           "imageUrl": "https://i.ibb.co/ypkgK0X/blue-beanie.png",
//           "id": 2,
//           "name": "Blue Beanie",
//           "price": 18
//       },
//       {
//           "id": 3,
//           "name": "Brown Cowboy",
//           "imageUrl": "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
//           "price": 35
//       },
//       {
//           "imageUrl": "https://i.ibb.co/RjBLWxB/grey-brim.png",
//           "name": "Grey Brim",
//           "price": 25,
//           "id": 4
//       },
//       {
//           "price": 18,
//           "id": 5,
//           "imageUrl": "https://i.ibb.co/YTjW3vF/green-beanie.png",
//           "name": "Green Beanie"
//       },
//       {
//           "imageUrl": "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
//           "price": 14,
//           "id": 6,
//           "name": "Palm Tree Cap"
//       },
//       {
//           "id": 7,
//           "price": 18,
//           "imageUrl": "https://i.ibb.co/bLB646Z/red-beanie.png",
//           "name": "Red Beanie"
//       },
//       {
//           "price": 14,
//           "imageUrl": "https://i.ibb.co/1f2nWMM/wolf-cap.png",
//           "id": 8,
//           "name": "Wolf Cap"
//       },
//       {
//           "imageUrl": "https://i.ibb.co/X2VJP2W/blue-snapback.png",
//           "name": "Blue Snapback",
//           "id": 9,
//           "price": 16
//       }
//   ],
//   "jackets": [
//       {
//           "imageUrl": "https://i.ibb.co/XzcwL5s/black-shearling.png",
//           "id": 18,
//           "name": "Black Jean Shearling",
//           "price": 125
//       },
//       {
//           "name": "Blue Jean Jacket",
//           "price": 90,
//           "id": 19,
//           "imageUrl": "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png"
//       },
//       {
//           "id": 20,
//           "price": 90,
//           "name": "Grey Jean Jacket",
//           "imageUrl": "https://i.ibb.co/N71k1ML/grey-jean-jacket.png"
//       },
//       {
//           "name": "Brown Shearling",
//           "id": 21,
//           "price": 165,
//           "imageUrl": "https://i.ibb.co/s96FpdP/brown-shearling.png"
//       },
//       {
//           "price": 185,
//           "imageUrl": "https://i.ibb.co/M6hHc3F/brown-trench.png",
//           "id": 22,
//           "name": "Tan Trench"
//       }
//   ],
//   "mens": [
//       {
//           "imageUrl": "https://i.ibb.co/xJS0T3Y/camo-vest.png",
//           "id": 30,
//           "price": 325,
//           "name": "Camo Down Vest"
//       },
//       {
//           "imageUrl": "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
//           "name": "Floral T-shirt",
//           "price": 20,
//           "id": 31
//       },
//       {
//           "price": 25,
//           "name": "Black & White Longsleeve",
//           "id": 32,
//           "imageUrl": "https://i.ibb.co/55z32tw/long-sleeve.png"
//       },
//       {
//           "name": "Pink T-shirt",
//           "imageUrl": "https://i.ibb.co/RvwnBL8/pink-shirt.png",
//           "price": 25,
//           "id": 33
//       },
//       {
//           "imageUrl": "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
//           "id": 34,
//           "price": 40,
//           "name": "Jean Long Sleeve"
//       },
//       {
//           "imageUrl": "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
//           "price": 25,
//           "name": "Burgundy T-shirt",
//           "id": 35
//       }
//   ],
//   "sneakers": [
//       {
//           "imageUrl": "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
//           "name": "Adidas NMD",
//           "price": 220,
//           "id": 10
//       },
//       {
//           "imageUrl": "https://i.ibb.co/dJbG1cT/yeezy.png",
//           "id": 11,
//           "price": 280,
//           "name": "Adidas Yeezy"
//       },
//       {
//           "price": 110,
//           "name": "Black Converse",
//           "id": 12,
//           "imageUrl": "https://i.ibb.co/bPmVXyP/black-converse.png"
//       },
//       {
//           "price": 160,
//           "name": "Nike White AirForce",
//           "imageUrl": "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
//           "id": 13
//       },
//       {
//           "price": 160,
//           "name": "Nike Red High Tops",
//           "imageUrl": "https://i.ibb.co/QcvzydB/nikes-red.png",
//           "id": 14
//       },
//       {
//           "price": 160,
//           "imageUrl": "https://i.ibb.co/fMTV342/nike-brown.png",
//           "name": "Nike Brown High Tops",
//           "id": 15
//       },
//       {
//           "name": "Air Jordan Limited",
//           "id": 16,
//           "price": 190,
//           "imageUrl": "https://i.ibb.co/w4k6Ws9/nike-funky.png"
//       },
//       {
//           "price": 200,
//           "imageUrl": "https://i.ibb.co/Mhh6wBg/timberlands.png",
//           "name": "Timberlands",
//           "id": 17
//       }
//   ],
//   "womens": [
//       {
//           "price": 25,
//           "name": "Blue Tanktop",
//           "id": 23,
//           "imageUrl": "https://i.ibb.co/7CQVJNm/blue-tank.png"
//       },
//       {
//           "price": 20,
//           "name": "Floral Blouse",
//           "imageUrl": "https://i.ibb.co/4W2DGKm/floral-blouse.png",
//           "id": 24
//       },
//       {
//           "price": 80,
//           "imageUrl": "https://i.ibb.co/KV18Ysr/floral-skirt.png",
//           "id": 25,
//           "name": "Floral Dress"
//       },
//       {
//           "id": 26,
//           "imageUrl": "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
//           "name": "Red Dots Dress",
//           "price": 80
//       },
//       {
//           "id": 27,
//           "imageUrl": "https://i.ibb.co/KmSkMbH/striped-sweater.png",
//           "price": 45,
//           "name": "Striped Sweater"
//       },
//       {
//           "imageUrl": "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
//           "id": 28,
//           "price": 135,
//           "name": "Yellow Track Suit"
//       },
//       {
//           "id": 29,
//           "price": 20,
//           "imageUrl": "https://i.ibb.co/qBcrsJg/white-vest.png",
//           "name": "White Blouse"
//       }
//   ]
// }

 export default SHOP_DATA;
