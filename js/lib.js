/*Mã nguồn Javascript*/
//Khai báo một đối tượng
const products = [
    {
        id:"1",
        name:"BMW-i8",
        price:"5.699.000.000",
        description:"BMW 3 Series mới mang đến diện mạo nổi bật cho một chiếc sedan mang đậm phong cách thể thao....",
        image:"../assets/img/BMW-i8.jpg",
        link:"http://bmw.vn/vi/"
    },
    {
        id: "2",
        name: "Mercedes-Benz C200",
        price: "1.729.000.000",
        description: "Mercedes-Benz C-Class thế hệ mới sở hữu thiết kế sang trọng hiện đại....",
        image: "../assets/img/mercedes-c200.jpg", // Bạn thay đổi đường dẫn ảnh cho đúng nhé
        link: "https://www.mercedes-benz.com.vn/vi/passengercars.html"
    },
    {
        id: "3",
        name: "Audi A4 Sedan",
        price: "1.800.000.000",
        description: "Audi A4 mang phong cách thể thao mạnh mẽ, trải nghiệm lái tuyệt vời....",
        image: "../assets/img/audi-a4.jpg", // Bạn thay đổi đường dẫn ảnh cho đúng nhé
        link: "https://www.audi.vn/vi/"
    },
    {
        id: "4",
        name: "VinFast VF 9",
        price: "2.300.000.000 VNĐ",
        description: "VinFast VF 9 là dòng xe SUV điện không gian rộng rãi cùng công nghệ thông minh vượt trội....",
        image: "../assets/img/vinfast-vf9.jpg", // Bạn đổi lại tên file ảnh trong thư mục img cho đúng nhé
        link: "https://shop.vinfastauto.com/vn_vi/dat-coc-xe-vf9.html"
    }
];



function inBCC(n)
{
    let result = "";
    let i = 1;
    while(i<=10)
    {
        result += `${n} x ${i} = ${n*i} <br>`;
        i++;
    }
    document.getElementById("result").innerHTML = result;
}
function addItem(name, price, description, linkProduct)
{
    //Tạo khung chứa container-item
    const item = document.createElement("div"); //<div></div>
    item.setAttribute("class", "container-item");
    item.innerHTML = "hehehe";

    //Đưa khung chứa container-product-list vào container
    document.getElementById("container-product-list").appendChild(item);
}
function inBCC(n)
{
}

function addItem(name, price, description, link, image)
{
    //Tạo khung chứa container-item
    const item = document.createElement("div"); //<div></div>
    item.setAttribute("class", "container-item");

    //Trong 1 item có khung chứa container-image và container-info

    //Tạo khung chứa container-image
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "container-image");

    //Tạo 1 ảnh
    const imageProduct = document.createElement("img");
    imageProduct.setAttribute("src", image); //truyền tham số image
    imageProduct.setAttribute("alt", name);
    imageProduct.setAttribute("style", "width:100%; max-width:150px;");

    //Chèn đối tượng ảnh vào khung chứa ảnh
    containerImage.appendChild(imageProduct);

    //Tạo khung chứa container-info
    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "container-info");

    //Tạo 4 đứa con
    const nameProduct = document.createElement("p");
    nameProduct.innerHTML = name;

    const priceProduct = document.createElement("p");
    priceProduct.innerHTML = price;

    const descProduct = document.createElement("p");
    descProduct.innerHTML = description;

    const linkProduct = document.createElement("a");
    linkProduct.innerHTML = "Xem chi tiết";
    linkProduct.setAttribute("href", link);

    //Thêm con vào khung chứa info
    containerInfo.appendChild(nameProduct);
    containerInfo.appendChild(priceProduct);
    containerInfo.appendChild(descProduct);
    containerInfo.appendChild(linkProduct);

    //Đưa khung ảnh vào item
    item.appendChild(containerImage);
    //Đưa khung info vào item
    item.appendChild(containerInfo);
    //Đưa khung chứa container-product-list vào container
    document.getElementById("container-product-list").appendChild(item);
}

function addItemV2(obj) {
    const list = document.getElementById("product-list");
    list.innerHTML += `
        <div class="col">
            <div class="card product-item">
                <div class="product-image">
                    <img class="card-img-top" src="${obj.image}" alt="${obj.name}">
                </div>
                <div class="card-body bg-light product-info">
                    <h4 class="card-title">${obj.name}</h4>
                    <h5 class="card-text">${obj.price}</h5>
                    <p class="card-text">${obj.description}</p>
                    <a class="btn btn-info" href="${obj.link}">Xem chi tiết</a>
                </div>
            </div>
        </div>
    `;
}

// Hàm duyệt qua mảng để tải tất cả sản phẩm
function loadAllProducts(array) {
    let i = 0;
    while (i < array.length) {
        addItemV2(array[i]);
        i++;
    }
}
