// // bài 1: 
// /*
// Khởi tạo một biến có tên là sản phẩm,
// chứa một mảng sản phẩm,
// mỗi sản phẩm có tên, giá, thương hiệu, danh mục và màu sắc.
// */
// let products = [
//     {
//         id: 1,
//         name: 'Xiaomi portable charger 20000mah',
//         brand: 'Xiaomi',
//         price: 428,
//         color: 'White',
//         category: 'Charger'
//     },
//     {
//         id: 2,
//         name: 'VSmart Active 1',
//         brand: 'VSmart',
//         price: 5487,
//         color: 'Black',
//         category: 'Phone'
//     },
//     {
//         id: 3,
//         name: 'IPhone X',
//         brand: 'Apple',
//         price: 21490,
//         color: 'Gray',
//         category: 'Phone'
//     },
//     {
//         id: 4,
//         name: 'Samsung Galaxy A9',
//         brand: 'Samsung',
//         price: 8490,
//         color: 'Blue',
//         category: 'Phone',
//     }
// ];

// // 1. in ra tên và giá của các sản phẩm
// // for(let i of products)
// // {
// //     console.log(i.name);
// //     console.log(i.price);
// // }


// // 2. in ra màn hình id + tên +giá mối sản phẩm
// // cho người dùng nhập vào id sản phẩm họ muốn xem và in ra màn hình
// // for(let i of products)
// // {
// //     console.log(i.id);
// //     console.log(i.name);
// //     console.log(i.price);
// // }
// // while(1)
// // {
// //     let id = Number(prompt('Nhập id sản phẩm bạn muốn xem:'));
// //     if( id < 1 || id > 4 )  alert('id không hợp lệ, mời nhập lại!');
// //     else
// //     {
// //         for(let i of products)
// //         {
// //             if( id === i.id )
// //             {
// //                 console.log(i);
// //             }
            
// //         }
// //         break;
// //     }
// // }


3. nhập vào danh mục, in ra tên + giá các sản phẩm theo danh mục
let category = prompt('Nhập vào danh mục bạn muốn xem:');
for(let i of products)
{
    if( i.category === category )
    {
        console.log('Name: ' + i.name);
        console.log('Price: ' + i.price);
    }
}


// // 4. thêm nhà cung cấp vào mỗi sản phẩm
// let arrProvider = ['Phukienzero dientuccc', 'tgdd', 'tgdd', 'tgdd'];
// let iter = 0;
// for(let i of products)
// {
//     i.providers = arrProvider[iter];
//     iter++;
// }
// // for(let i of products)
// // {
// //     console.log(i.id + '.' + i.name + '\n  Price: ' + i.price + '\n  Providers:' + i.providers);
// // }


// // 5. Tìm kiếm các sản phẩm
// // dựa trên nhà cung cấp mong muốn do người dùng nhập
// // let nameProvider = prompt('Nhập tên nhà cung cấp:');
// // for(let i of products)
// // {
// //     if( i.providers == nameProvider )
// //     {
// //         console.log(i)
// //     }
// // }
// bai1:
let products = [
    {
        id: 1,
        name: 'Xiaomi portable charger 20000ma',
        brand: 'Xiaomi',
        price: '428',
        colour: 'White',
        category: 'Charger',
   },
   {
    id: 2,
    name: 'VSmart Active 1',
    brand: 'VSmart',
    price: '45487',
    colour: 'Black',
    category: 'Phone',
   },
   {
    id: 3,
    name: 'IPhone X',
    brand: 'Apple',
    price: '21490',
    colour: 'Gray',
    category: 'Phone',
   },
   {
    id: 1,
    name: 'Samsung Galaxy A9',
    brand: 'Samsung',
    price: '4348',
    colour: 'White',
    category: 'CPhone',
   },
];
//1.1 in ra name va price
for( let i of products){
    console.log(i.name);
    console.log(i.price);
}
//1.2 nhập vào 1 id muốn xem , và nêu các thông tin liên quan tới id đó
for( let i of products){
    
}