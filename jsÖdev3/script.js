
const menu = [
    {
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc3QXpDE4onykWd2UN1pd93bsdv8kKO6SuibShMyrNUyrQLbsz0epqBMVe1whI",
      name: "Bibimbap",
      price: "19.99",
      descriptionEn: "Rice mixed with vegetables, meat and egg",
      descriptionTr: "Sebzeli, etli ve yumurtalı pirinç",
      country: "Korea",
      category: "Main Course"
    },  
    {
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHGFJifgDUpgk3GyH6yRyZ7goonyyppEeVnQ&usqp=CAU",
        name: "Kimchi",
        price: "9.99",
        descriptionEn: "Fermented cabbage and spices",
        descriptionTr: "Fermente lahana ve baharatlar",
        country: "Korea",
        category: "Salad"
      },
      {
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShk0_tJ_rJUMt_0Kn3g7TqPfL5glMvR6odcQ&usqp=CAU",
        name: "Tteokbokki",
        price: "14.99",
        descriptionEn: "Spicy rice cakes, serving with fish cake",
        descriptionTr: "Acılı pirinç keki ve sebzeler",
        country: "Korea",
        category: "Appetizer"
      },
      {
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-EX4KeWPN5bOk1qksyJ9iAxeXDEf79BSQA&usqp=CAU",
        name: "Hotteok",
        price: "14.99",
        descriptionEn: "Sweet pancake filled with brown sugar, honey, chopped peanuts and cinnamon",
        descriptionTr: "Tatlı hamur kızartması",
        country: "Korea",
        category: "Dessert"
      },
      {
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtKdk1Meg4FbyJArzrLbrgCaYhoRIllMQcEQ&usqp=CAU",
        name: "Ramen",
        price: "19.99",
        descriptionEn: "Noodle soup with meat, vegetables and egg",
        descriptionTr: "Etli, sebzeli ve yumurtalı erişte çorbası",
        country: "Japan",
        category: "Main Course"
      },
      {
        photo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmdIY7KEp0_0_RuHYVaGAFK9OD5q0bDDYTUqOniBopj0tcug_dGcSBwVGulDgc",
        name: "Sushi",
        price: "14.99",
        descriptionEn: "Rice, seaweed, and fresh fish wrapped in a delicious roll",
        descriptionTr: "Çiğ balıklı pirinç",
        country: "Japan",
        category: "Main Course"
      },
     {
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZwo0OBh-iJBHf7dSW9_VR2sge7NyD0cgn8g8-GJeNTjhwATnjYATjRbm5SeWf",
        name: "Onigiri",
        price: "9.99",
        descriptionEn: "Rice ball filled with salmon",
        descriptionTr: "Üçgen şeklinde pirinç topları",
        country: "Japan",
        category: "Appetizer"
      },
      {
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_JY9rJhf0N92A9p3H4WLiOpiDV8H58YJp4A&usqp=CAU",
        name: "Mochi",
        price: "14.99",
        descriptionEn: "Sweet rice cake",
        descriptionTr: "Pirinç unundan yapılmış yumuşak tatlı",
        country: "Japan",
        category: "Dessert"
      },
      {
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QYPLWiXcpxiUS71OsMqzQxH2K22Ufty4nw&usqp=CAU",
        name: "Dumplings",
        price: "14.99",
        descriptionEn: "Steamed or fried filled with meat and vegetables",
        descriptionTr:"Etli, sebzeli ve soslu buharda pişirilmiş mantı",
        country: "China",
        category: "Appetizer"
      },
      {
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGns1BOYoiHfmIjGNOWlK2fagoqAYPd5VNTA&usqp=CAU",
        name: "Beijing Kao Ya",
        price: "19.99",
        descriptionEn: "Peking duck with hoisin sauce and pancakes",
        descriptionTr: "Pekin ördeği, hoisin sosu ve pirinç ekmek ile servis edilir",
        country: "China",
        category: "Main Course"
      },
      {
        photo: "https://blog.biletbayi.com/wp-content/uploads/2018/02/Spring-Rolls-696x464.jpg",
        name: "Spring Rolls",
        price: "9.99",
        descriptionEn: "Fried rolled filled with vegetables or meat",
        descriptionTr: "Sebzeli veya etli kızarmış hamur ruloları",
        country: "China",
        category: "Appetizer"
      },
      {
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW00EsuoTZDtQWjNfDAtHmgUnWyW8fipwQgA&usqp=CAU",
        name: "Fortune Cookies",
        price: "14.99",
        descriptionEn: "Cookie with a piece of paper inside",
        descriptionTr: "İçinde fal kağıdı olan kurabiye",
        country: "China",
        category: "Main Course"
      },
      {
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-6rBbteuQaI-KGQkiBBYTieJ1CgSF3-OxA&usqp=CAU",
        name: "Pad Thai",
        price: "19.99",
        descriptionEn: "Stir-fried rice noodles with shrimp, egg, and vegetables",
        descriptionTr: "Tavuklu, karidesli ve fıstıklı pirinç eriştesi",
        country: "Thailand",
        category: "Main Course"
      },
      {
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlXYLlwqkbhSb6mUI0m9DGqiWRw0Sn9cGq2w&usqp=CAU",
        name: "Tom Yum",
        price: "14.99",
        descriptionEn: "Spicy and sour shrimp soup",
        descriptionTr: "Acılı ve ekşi karides çorbası",
        country: "Thailand",
        category: "Soup"
      },
      {
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxgKIevPt4Qg9doKssvPDuV0CNWCn6hzPmyA&usqp=CAU",
        name: "Som Tam",
        price: "9.99",
        descriptionEn: "Green papaya salad",
        descriptionTr: "Yeşil papaya salatası",
        country: "Thailand",
        category: "Salad"
      },
      {
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQscwothnAg0RhRh0SRW2aIs4UF9Kl_3ZHTYw&usqp=CAU",
        name: "Mango Sticky Rice",
        price: "14.99",
        descriptionEn: "Mango and coconut sticky rice",
        descriptionTr: "Mango ve hindistan cevizli yapışkan pirinç",
        country: "Thailand",
        category: "Dessert"
      },
      {
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLUsVIpq9b38-qPAkl_uHHrv9nSZ9CsBr8PQ&usqp=CAU",
        name: "Pho",
        price: "19.99",
        descriptionEn: "Beef, vegetable and spicy rice noodle soup",
        descriptionTr: "Etli, sebzeli ve baharatlı pirinç eriştesi çorbası",
        country: "Vietnam",
        category: "Main Course"
      },
      {
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvFshu6BzOOpALwlcnrQem9c9roFKmEk1zoA&usqp=CAU",
        name: "Banh Mi",
        price: "14.99",
        descriptionEn: "Sandwich with meat, vegetables and sauce",
        descriptionTr: "Etli, sebzeli ve soslu sandviç",
        country: "Vietnam",
        category: "Appetizer"
      },
      {
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqhzY3vqzF1X-7sMJ9A3TqjZYHDtwoV4z0fQ&usqp=CAU",
        name: "Goi Cuon",
        price: "9.99",
        descriptionEn: "Rice paper rolls with shrimp, vegetables, and herbs",
        descriptionTr: "Karidesli, sebzeli ve fıstıklı pirinç kağıdı sarması",
        country: "Vietnam",
        category: "Appetizer"
      },
      {
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtkDUU2HFb-s8PWAaSH38H6NNMZbM-AvXzxw&usqp=CAU",
        name: "Che",
        price: "14.99",
        descriptionEn: "Sweet, milky, and jelly dessert",
        descriptionTr: "Meyveli, sütlü ve jöleli tatlı",
        country: "Vietnam",
        category: "Dessert"
      }
    ];
  
   
  const button = document.querySelector(".btn-container");
  
  
  button.innerHTML = `
  <nav class="navbar">
  <button class="btn btn-outline-dark btn-lg btn-item All" data-id="All">All</button>
  <button class="btn btn-outline-dark btn-lg btn-item Korea" data-id="Korea">Korea</button>
  <button class="btn btn-outline-dark btn-lg btn-item Japan" data-id="Japan">Japan</button>
  <button class="btn btn-outline-dark btn-lg btn-item China" data-id="China">China</button>
  <button class="btn btn-outline-dark btn-lg btn-item Thailand" data-id="Thailand">Thailand</button>
  <button class="btn btn-outline-dark btn-lg btn-item Vietnam" data-id="Vietnam">Vietnam</button>
  <button class="btn btn-outline-secondary btn-sm btn-item atistirmalik" data-id="atistirmalik">Appetizer</button>
  <button class="btn btn-outline-secondary btn-sm btn-item corba" data-id="corba">Soup</button>
  <button class="btn btn-outline-secondary btn-sm btn-item salata" data-id="salata">Salad</button>
  <button class="btn btn-outline-secondary btn-sm btn-item ana-yemek" data-id="ana-yemek">Main Course</button>
  <button class="btn btn-outline-secondary btn-sm btn-item tatli" data-id="tatli">Dessert</button>
  </nav>`;
  
  
  const menuContainer = document.querySelector(".section-center");
  
  
  const createObject = (x) => {
      return `<div class="menu-items col-lg-6 col-sm-12">
      <img src="${x.photo}" alt="${x.name}" class="photo" />
      <div class="menu-info">
          <div class="menu-title">
          <h4>${x.name}</h4>
          <h5 class="country">${x.country}</h5>
          <h5 class="category">${x.category}</h5>
          <h4 class="price">${x.price}</h4>
          </div>
          <div class="menu-text">
          <p>En- ${x.descriptionEn}</p>
          <h6>Tr- ${x.descriptionTr}</h6>
          </div>
      </div>
      </div>`;
  }
  
  
  const listAllFoods = () => {
      let allMenu = "";
      menu.map((x) => {
          allMenu += createObject(x);
      });
      menuContainer.innerHTML = allMenu;
  }   
  
  const listKoreanFoods = () => {
      let allMenu = "";
      menu.map((x) => {
          if (x.country == "Korea") {
              allMenu += createObject(x);
          }
      });
      menuContainer.innerHTML = allMenu;
  }   
  
  const listJapanFoods = () => {
      let allMenu = "";
      menu.map((x) => {
          if (x.country == "Japan") {
              allMenu += createObject(x);
          }
      });
      menuContainer.innerHTML = allMenu;
  }   
  
  const listChinaFoods = () => {
      let allMenu = "";
      menu.map((x) => {
          if (x.country == "China") {
              allMenu += createObject(x);
          }
      });
      menuContainer.innerHTML = allMenu;
  }   
  
  const listThailandFoods = () => {
      let allMenu = "";
      menu.map((x) => {
          if (x.country == "Thailand") {
              allMenu += createObject(x);
          }
      });
      menuContainer.innerHTML = allMenu;
  }   
  
  const listVietnamFoods = () => {
      let allMenu = "";
      menu.map((x) => {
          if (x.country == "Vietnam") {
              allMenu += createObject(x);
          }
      });
      menuContainer.innerHTML = allMenu;
  } 
  
  const listCorbaFoods = () => {
      let allMenu = "";
      menu.map((x) => {
          if (x.category == "Soup") {
              allMenu += createObject(x);
          }
      });
      menuContainer.innerHTML = allMenu;
  }
  
  const listSalataFoods = () => {
      let allMenu = "";
      menu.map((x) => {
          if (x.category == "Salad") {
              allMenu += createObject(x);
          }
      });
      menuContainer.innerHTML = allMenu;
  }   
  
  const listTatliFoods = () => {  
      let allMenu = "";
      menu.map((x) => {
          if (x.category == "Dessert") {
              allMenu += createObject(x);
          }
      });
      menuContainer.innerHTML = allMenu;
  }   
  
  const listAnaYemekFoods = () => {
      let allMenu = "";
      menu.map((x) => {
          if (x.category == "Main Course") {
              allMenu += createObject(x);
          }
      });
      menuContainer.innerHTML = allMenu;
  }   
  
  const listAtistirmalikFoods = () => {
      let allMenu = "";
      menu.map((x) => {
          if (x.category == "Appetizer") {
              allMenu += createObject(x);
          }
      });
      menuContainer.innerHTML = allMenu;
  }   
  
  
  document.querySelector(".All").addEventListener("click", listAllFoods);
  
  document.querySelector(".Korea").addEventListener("click", listKoreanFoods);
  
  document.querySelector(".Japan").addEventListener("click", listJapanFoods);
  
  document.querySelector(".China").addEventListener("click", listChinaFoods);
  
  document.querySelector(".Thailand").addEventListener("click", listThailandFoods);
  
  document.querySelector(".Vietnam").addEventListener("click", listVietnamFoods);
  
  document.querySelector(".corba").addEventListener("click", listCorbaFoods);
  
  document.querySelector(".salata").addEventListener("click", listSalataFoods);
  
  document.querySelector(".tatli").addEventListener("click", listTatliFoods);
  
  document.querySelector(".ana-yemek").addEventListener("click", listAnaYemekFoods);
  
  document.querySelector(".atistirmalik").addEventListener("click", listAtistirmalikFoods);
  
  
  listAllFoods();