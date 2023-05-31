const getFeaturedProductsDetailsController=(req,res)=>{
    res.send([{
        id: 1,
        catagory: "Accessories",
        name: "Apple AirPod Pro",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861342000",
        price: "₹18,000",
        oPrice: "₹20,499",
        quantity : "3",
    },
    {
        id: 2,
        catagory: "Accessories",
        name: "Apple AirPod 2nd Gen",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/7120GgUKj3L._SL1500_.jpg",
        price: "₹15,000",
        oPrice: "₹17,499",
        quantity : "6",   
    },
    {
        id: 3,
    
        catagory: "Accessories",
        name: "Apple AirPod Pro A2084",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://images.esellerpro.com/2131/I/252/394/DSC_5962_2.jpg",
        price: "₹20,000",
        oPrice: "₹25,000",
        quantity : "34",   
    },
    {
        id: 4,
        catagory: "Ipad",
        name: "Ipad Air 3rd Gen",
        ratting:
          "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/61pKdiWVerL._AC_SS450_.jpg",
        price: "58,900",
        oPrice: "₹62,900",
        quantity: "31",
      },
      {
        id: 5,
        catagory: "Ipad",
        name: "Ipad 11 Pro",
        ratting:
          "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image:
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-11-select-202104_GEO_IN_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1617865122000",
        price: "₹60,500",
        oPrice: "₹63,000",
        quantity: "17",
      },
      {
        id: 6,
        catagory: "Ipad",
        name: "Ipad Pro 10",
        ratting:
          "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image:
          "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1647446307-ipad-pro-1647446296.png?crop=1xw:1xh;center,top&resize=480%3A%2A",
        price: "₹75,000",
        oPrice: "₹82,499",
        quantity: "12",
      },
      {
        id: 7,
        catagory: "Ipad",
        name: "Ipad Pro M1",
        ratting:
          "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image:
          "https://img.poorvika.com/cdn-cgi/image/width=450,height=450,quality=75/1600_JPG/Tabs/Apple/Apple-IPad-Pro-With-Apple-M1-Chip-11-Inch-WiFi-3rd-Generation/Apple-iPad-Pro-With-Apple-M1-Chip-11-Inch-WiFi-128GB-Space-Grey-MHQR3HN-A-3rd-Generation1.jpg",
        price: "₹1,75,500",
        oPrice: "₹1,83,000",
        quantity: "29",
      },
      {
        id: 8,
        catagory: "macbook",
        name: "MacBook Air",
        ratting:
          "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image:
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1633027804000",
        price: "₹98,000",
        oPrice: "₹1,02,499",
        quantity: "3",
      },
      {
        id: 9,
        catagory: "macbook",
        name: "Apple MacBook Pro",
        ratting:
          "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg",
        price: "₹92,000",
        oPrice: "₹1,02,499",
        quantity: "89",
      },
      {
        id: 10,
        catagory: "macbook",
        name: "Apple MacBook 12",
        ratting:
          "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image:
          "https://www.cnet.com/a/img/resize/582394e3d3c2a8e0a066cc4d3a51be08665cd2de/2016/04/19/7ce2b064-00fe-4d9a-9a93-6e540c1be1a1/apple-macbook-2016-18.jpg?auto=webp&fit=crop&height=675&width=1200",
        price: "₹68,000",
        oPrice: "₹75,499",
        quantity: "29",
      },
      {
        id: 11,
        type: "Mobile",
        name: "OnePlus 9",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
        price: "₹22,000",
        oPrice: "₹23,900",
        quantity : "23"
    },
    {
        id: 12,
        type: "Mobile",
        name: "OnePlus 10 Pro",
        ratting: "https://t4.ftcdn.net/jpg/02/74/86/39/360_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
        image: "https://m.media-amazon.com/images/I/61mIUCd-37L._SL1500_.jpg",
        price: "₹19,500",
        oPrice: "₹21,000",
        quantity : "13"
    }
    ])
}

module.exports = {getFeaturedProductsDetailsController }