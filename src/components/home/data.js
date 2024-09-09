const data = [
    {
        hero: {
            id: Data.now(),
            img: "./assets/hero.svg",
            btnLeft: `<i class="fa-solid fa-chevron-left" style="color: #000000;"></i>`,
            btnRight: `<i class="fa-solid fa-chevron-left fa-rotate-180" style="color: #000000;"></i>`
        },


        categories: [
            {
                id: Data.now(),
                img: "./assets/iphone14.svg",
                title: "Smartfonlar"
            },

            {
                id: Data.now(),
                img: "./assets/macbook.svg",
                title: "Kompyuterlar va notebooklar"
            },

            {
                id: Data.now(),
                img: "./assets/monitor.svg",
                title: "Televizorlar"
            },

            {
                id: Data.now(),
                img: "./assets/Iwatch.svg",
                title: "Aqilli soatlar"
            },

            {
                id: Data.now(),
                img: "./assets/airpods.svg",
                title: "Quloqchinlar"
            },

            {
                id: Data.now(),
                img: "./assets/konditsioner.svg",
                title: "Konditsioner"
            },

            {
                id: Data.now(),
                img: "./assets/haladelnek.svg",
                title: "Sovutkichlar"
            },

            {
                id: Data.now(),
                img: "./assets/kirmashina.svg",
                title: "Kir yuvish mashinalari"
            }
        ],



        bestSell: [
            {
                id: Data.now(),
                img: "./assets/macbookBSeller.svg",
                like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
                price: "299 000 so'm",
                discription: "Apple Airpods Pro simsiz quloqchin , Oq rangda",
                sale: "1230 ta buyurtma",
                btn: "Sotib olish",
                cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`
            },

            {
                id: Data.now(),
                img: "./assets/macbookBSeller.svg",
                topSale: "Top sale",
                like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
                price: "16 114 285 so'm",
                discription: "Apple Macbook Pro 13" 2.4 2019 Intel core i5 DDR3 8 GB SSD 256 GB",
                sale: "230 ta buyurtma",
                btn: "Sotib olish",
                cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`
            },

            {
                id: Data.now(),
                img: "./assets/macbookBSeller.svg",
                news: "Yangilik",
                like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
                price: "4 234 000 so'm",
                discription: "Apple watch 4 ",
                sale: "543 ta buyurtma",
                btn: "Sotib olish",
                cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`
            },

            {
                id: Data.now(),
                img: "./assets/macbookBSeller.svg",
                like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
                price: "1 340 000 so'm",
                discription: "Robot - tozalagich Xiaomi Mi Robot",
                sale: "876 ta buyurtma",
                btn: "Sotib olish",
                cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`
            },

            {
                id: Data.now(),
                img: "./assets/macbookBSeller.svg",
                news: "Yangilik",
                like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
                price: "1 345 000 so'm",
                discription: "Oynali Fotoaparat Canon EOS 6D Body",
                sale: "565 ta buyurtma",
                btn: "Sotib olish",
                cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`
            },

            {
                id: Data.now(),
                img: "./assets/macbookBSeller.svg",
                news: "Yangilik",
                like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
                price: "299 000 so'm",
                discription: "Apple Airpods Pro simsiz quloqchin , Oq rangda",
                sale: "1230 ta buyurtma",
                btn: "Sotib olish",
                cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`
            },

            {
                id: Data.now(),
                img: "./assets/macbookBSeller.svg",
                like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
                price: "16 114 285 so'm",
                discription: "Apple Macbook Pro 13" 2.4 2019 Intel core i5 DDR3 8 GB SSD 256 GB",
                sale: "230 ta buyurtma",
                btn: "Sotib olish",
                cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`
            },

            {
                id: Data.now(),
                img: "./assets/macbookBSeller.svg",
                like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
                price: "4 234 000 so'm",
                discription: "Apple watch 4 ",
                sale: "543 ta buyurtma",
                btn: "Sotib olish",
                cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`
            },

            {
                id: Data.now(),
                img: "./assets/macbookBSeller.svg",
                topSale: "Top sale",
                like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
                price: "1 340 000 so'm",
                discription: "Robot - tozalagich Xiaomi Mi Robot",
                sale: "876 ta buyurtma",
                btn: "Sotib olish",
                cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`
            },

            {
                id: Data.now(),
                img: "./assets/macbookBSeller.svg",
                like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
                price: "1 345 000 so'm",
                discription: "Oynali Fotoaparat Canon EOS 6D Body",
                sale: "565 ta buyurtma",
                btn: "Sotib olish",
                cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`
            }
        ],



        domVasheyBanner: {
            id: Data.now(),
            img: "./assets/domVasheyBanner.svg",
            btnLeft: `<i class="fa-solid fa-chevron-left" style="color: #000000;"></i>`,
            btnRight: `<i class="fa-solid fa-chevron-left fa-rotate-180" style="color: #000000;"></i>`
        },




        popular: [
            {
                id: Data.now(),
                img: "./assets/macbookBSeller.svg",
                like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
                price: "299 000 so'm",
                discription: "Apple Airpods Pro simsiz quloqchin , Oq rangda",
                sale: "1230 ta buyurtma",
                btn: "Sotib olish",
                cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`
            },

            {
                id: Data.now(),
                img: "./assets/macbookBSeller.svg",
                like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
                price: "16 114 285 so'm",
                discription: "Apple Macbook Pro 13" 2.4 2019 Intel core i5 DDR3 8 GB SSD 256 GB",
                sale: "230 ta buyurtma",
                btn: "Sotib olish",
                cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`
            },

            {
                id: Data.now(),
                img: "./assets/macbookBSeller.svg",
                like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
                price: "4 234 000 so'm",
                discription: "Apple watch 4 ",
                sale: "543 ta buyurtma",
                btn: "Sotib olish",
                cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`
            },

            {
                id: Data.now(),
                img: "./assets/macbookBSeller.svg",
                like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
                price: "1 340 000 so'm",
                discription: "Robot - tozalagich Xiaomi Mi Robot",
                sale: "876 ta buyurtma",
                btn: "Sotib olish",
                cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`
            },

            {
                id: Data.now(),
                img: "./assets/macbookBSeller.svg",
                like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
                price: "1 345 000 so'm",
                discription: "Oynali Fotoaparat Canon EOS 6D Body",
                sale: "565 ta buyurtma",
                btn: "Sotib olish",
                cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`
            },

            {
                id: Data.now(),
                img: "./assets/macbookBSeller.svg",
                like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
                price: "299 000 so'm",
                discription: "Apple Airpods Pro simsiz quloqchin , Oq rangda",
                sale: "1230 ta buyurtma",
                btn: "Sotib olish",
                cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`
            },

            {
                id: Data.now(),
                img: "./assets/macbookBSeller.svg",
                like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
                price: "16 114 285 so'm",
                discription: "Apple Macbook Pro 13" 2.4 2019 Intel core i5 DDR3 8 GB SSD 256 GB",
                sale: "230 ta buyurtma",
                btn: "Sotib olish",
                cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`
            },

            {
                id: Data.now(),
                img: "./assets/macbookBSeller.svg",
                like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
                price: "4 234 000 so'm",
                discription: "Apple watch 4 ",
                sale: "543 ta buyurtma",
                btn: "Sotib olish",
                cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`
            },

            {
                id: Data.now(),
                img: "./assets/macbookBSeller.svg",
                like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
                price: "1 340 000 so'm",
                discription: "Robot - tozalagich Xiaomi Mi Robot",
                sale: "876 ta buyurtma",
                btn: "Sotib olish",
                cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`
            },

            {
                id: Data.now(),
                img: "./assets/macbookBSeller.svg",
                like: `<i class="fa-regular fa-heart" style="color: #74C0FC;"></i>`,
                price: "1 345 000 so'm",
                discription: "Oynali Fotoaparat Canon EOS 6D Body",
                sale: "565 ta buyurtma",
                btn: "Sotib olish",
                cart: `<i class="fa-solid fa-cart-shopping" style="color: #6c757d;"></i>`
            }
        ],



        brends: [
            {
                id: Data.now(),
                img: "./assets/HP.svg"
            },

            {
                id: Data.now(),
                img: "./assets/ACER.svg"
            },

            {
                id: Data.now(),
                img: "./assets/ASUS.svg"
            },

            {
                id: Data.now(),
                img: "./assets/SAMSUNG.svg"
            },

            {
                id: Data.now(),
                img: "./assets/APPLE.svg"
            },

            {
                id: Data.now(),
                img: "./assets/MSI.svg"
            },

            {
                id: Data.now(),
                img: "./assets/MI.svg"
            },

            {
                id: Data.now(),
                img: "./assets/VIVO.svg"
            },

            {
                id: Data.now(),
                img: "./assets/CHESSTABLE.svg"
            },

            {
                id: Data.now(),
                img: "./assets/CHESSTABLE.svg"
            },

            {
                id: Data.now(),
                img: "./assets/CHESSTABLE.svg"
            },

            {
                id: Data.now(),
                img: "./assets/CHESSTABLE.svg"
            },

            {
                id: Data.now(),
                img: "./assets/CHESSTABLE.svg"
            },

            {
                id: Data.now(),
                img: "./assets/CHESSTABLE.svg"
            },

            {
                id: Data.now(),
                img: "./assets/CHESSTABLE.svg"
            }
        ],


        markets: [
            {
                id: Data.now(),
                img: "./assets/elmakon.svg"
            },

            {
                id: Data.now(),
                img: "./assets/texnomart.svg"
            },

            {
                id: Data.now(),
                img: "./assets/mediapark.svg"
            },

            {
                id: Data.now(),
                img: "./assets/sandiq.svg"
            },

            {
                id: Data.now(),
                img: "./assets/goodzone.svg"
            },

            {
                id: Data.now(),
                img: "./assets/CHESSTABLE.svg"
            },

            {
                id: Data.now(),
                img: "./assets/CHESSTABLE.svg"
            },

            {
                id: Data.now(),
                img: "./assets/CHESSTABLE.svg"
            },

            {
                id: Data.now(),
                img: "./assets/CHESSTABLE.svg"
            },

            {
                id: Data.now(),
                img: "./assets/CHESSTABLE.svg"
            },

            {
                id: Data.now(),
                img: "./assets/CHESSTABLE.svg"
            },

            {
                id: Data.now(),
                img: "./assets/CHESSTABLE.svg"
            }
        ]





    }
]