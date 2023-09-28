var man=[
    {
        id:1,
        name:"The Cosmo (Đen)",
        code:"TC1025011BA",
        price:"250.000",
        image:"https://tse3.mm.bing.net/th?id=OIP.WnQc6cczy0tcoot_Ynv5EgHaHa&pid=Api&P=0&h=180"
    },
    {
        id:2,
        name:"Quan baggy đen",
        code:"TC1025011BA",
        price:"390.000",
        image:"https://tse1.mm.bing.net/th?id=OIP.ViX3V0_IZ63gbnmlyBSPRAHaHa&pid=Api&P=0&h=180"
    },
    {
        id:3,
        name:"blue Polo gợi cảm",
        code:"TC1025011BA",
        price:"590.000",
        image:"https://tse4.mm.bing.net/th?id=OIP.QnklYocV6Opc6GmDMIWEFQHaJ4&pid=Api&P=0&h=180"
    },
    {
        id:4,
        name:"white T-shirt thanh lịch",
        code:"TC1202202BA",
        price:"200.000",
        image:"https://bizweb.dktcdn.net/100/350/935/files/ao-so-mi-trang-voi-quan-short-nam.jpg?v=1567228889211"
    }
];
var women=[
    {
        id:1,
        name:"Váy Fashion",
        code:"TC1202202BA",
        price:"250.000",
        image:"https://tse4.explicit.bing.net/th?id=OIP.3XLVwWTLSu0ttZSd-hR5lAHaIj&pid=Api&P=0&h=180"
    },
    {
        id:2,
        name:"Áo thun phối váy ngắn",
        code:"TC1202202BA",
        price:"250.000",
        image:"https://tse3.mm.bing.net/th?id=OIP.wcweFQS0q8QzDy1syui-bAHaLG&pid=Api&P=0&h=180"
    },
    {
        id:3,
        name:"Áo khoác",
        code:"TC202204PP",
        price:"299.999",
        image:"https://tse3.mm.bing.net/th?id=OIP.l49c6ZS3Ir_hb-ZeW8J6vgHaHa&pid=Api&P=0&h=180"
    },
    {
        id:4,
        name:"Áo thun",
        code:"TC202204PP",
        price:"399.999",
        image:"https://tanphuong.vn/wp-content/uploads/2020/04/ao-thun-thoi-trang-he-2020-yourtee-tpx65-3.jpg"
    }
]
function listProducts(){
    for(let i=0;i<man.length;i++){
        var demo ='<div class="col-3">';
            demo +='<div class="card" style="width: 18rem;">';
            demo += '<img src="'+man[i].image+'" class="card-img-top" alt="...">';
            demo += '<div class="card-body">';
            demo += '<h5 class="card-title">'+man[i].name+'</h5>';
            demo +='<p class="card-text">'+man[i].price+'</p>';
            demo+='<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
            demo+='</div>';
            demo+='</div>';
            demo+='</div>';
            console.log(demo);
            document.getElementById("man").innerHTML +=demo;
    }
    // women
    for(let i=0;i<women.length;i++){
        var demo ='<div class="col-3">';
            demo +='<div class="card" style="width: 18rem;">';
            demo += '<img src="'+women[i].image+'" class="card-img-top " alt="...">';
            demo += '<div class="card-body">';
            demo += '<h5 class="card-title">'+women[i].name+'</h5>';
            demo +='<p class="card-text">'+women[i].price+'</p>';
            demo+='<a href="#" class="btn btn-primary bg-danger border-0" onclick="order()">Đặt mua</a>';
            demo+='</div>';
            demo+='</div>';
            demo+='</div>';
            console.log(demo);
            document.getElementById("women").innerHTML +=demo;
    }
    
}