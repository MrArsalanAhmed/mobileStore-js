const cardContainer = document.querySelector(".card-container");

const phones = [

    {

        brand: 'Apple',
        img:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg",
        model: 'Iphone 14 Pro Max',
        ram: 6,
        rom: 256,
        camera: '48 megapixel',
        price:590000,
    },
    {
        brand: 'Samsung',
        img:"https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg",
        model: 'S23 Ultra',
        ram: 12,
        rom: 512,
        camera: '200 megapixel',
        price:380000,
    },
    {
        brand: 'Google',
        img:"https://fdn2.gsmarena.com/vv/bigpic/google-pixel7-pro-new.jpg",
        model: 'Pixel 7 Pro',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price:290000,
    },
    {
        brand: 'Xiomi',
        img:"https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note10-5g.jpg",
        model: 'Redmi Note 10 Pro',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 34999,
    },
    {
        brand: 'Infinix',
        img:"https://rakistan.pk/wp-content/uploads/2021/11/infinix-zero-x-pro-pakistan-priceoye-im0ai-500x500-1.webp",
        model: 'Z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 38999,
    },
    {
        brand: 'Tecno',
        img:"https://images.priceoye.pk/tecno-spark-10-pakistan-priceoye-2144l.jpg",
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 45999 ,
    },
    {
        brand: 'Samsung',
        img:"https://m.media-amazon.com/images/I/41KRhotx+PL.jpg",
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price:159000,
    },
    {
        brand: 'Oppo',
        img:"https://cf.shopee.com.my/file/cfb2a159ee8d06bc3d0a0046ec34d060",
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 35999,
    },
    {
        brand: 'Vivo',
        img:"https://newglacier.pk/wp-content/uploads/2022/09/y20.jpg",
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price:28999 ,
    },
    {
        brand: 'Huawei',
        img:"https://mobiles.dailypakistan.com.pk/wp-content/uploads/2020/08/HUAWEIP3-600x600.jpg",
        model: 'P30 Pro',
        ram: 8,
        rom: 512,
        camera: '40 megapixel',
        price:31999 ,
    },
];

for (let i = 0; i < phones.length; i++) {
    cardContainer.innerHTML += `<div class="card">
    <div class="card-content">
        <h3>${phones[i].brand}</h3>
        <p> ${phones[i].model} </p>
        <p> Ram: ${phones[i].ram} Gb</p>
        <p> Rom: ${phones[i].rom} Gb </p>
        <p> Camera: ${phones[i].camera} </p>
        <p> Price: ${phones[i].price} PKR</p>
        <button class="cart">Add To Cart</button>
    </div>
    <div class="card-image">
        <img src="${phones[i].img}" class="image">
    </div>
    
</div>`;
}


