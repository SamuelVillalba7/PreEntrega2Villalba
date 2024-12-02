const products=[
    {
        "Id": 1,
        "Nombre": "monitor",
        "Category": "monitor",
        "Precio": 100,
        "Stock": 10,
        "Imagen": "https://noblex.com.ar/media/catalog/product/cache/c8f6a96bef9e9f64cd4973587df2520f/m/k/mk24x7100__iafbso0001_1200x922.jpg"
    },
    {
        "Id": 2,
        "Nombre": "mouse",
        "Category": "mouse",
        "Precio": 20,
        "Stock": 15,
        "Imagen": "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-mouse/promouse-gallery-5.png?v=1"
    },
    {
        "Id":3, 
        "Nombre": "teclado",
        "Category":"teclado" , 
        "Precio": 30, 
        "Stock": 6,
        "Imagen":"https://spacegamer.com.ar/img/Public/1058-producto-teclado-mecanico-inalambrico-redragon-draconic-white-6359.jpg"
    },
    {
        "Id":4, 
        "Nombre": "parlante",
        "Category": "parlante" , 
        "Precio": 25, 
        "Stock": 12,
        "Imagen":"https://http2.mlstatic.com/D_NQ_NP_988435-MLA41011746105_032020-O.webp"
    },
    {
        "Id":5, 
        "Nombre": "laptop",
        "Category": "laptop" , 
        "Precio": 120, 
        "Stock": 0,
        "Imagen":"https://i5.walmartimages.com/seo/Lenovo-Ideapad-5-14-1080p-Touchscreen-Laptop-AMD-Ryzen-7-5700U-8GB-RAM-512GB-SSD-Windows-11Home-Graphite-Grey-82LM00UEUS_bd7e44d5-ecc2-492a-9fe7-56c8599372bd.31d4c74bec047ea8f7dd7939c4e7801b.jpeg"
    },
    {
        "Id":6, 
        "Nombre": "BenQ Zowie XL2566K ",
        "Category": "monitor" , 
        "Precio": 120, 
        "Stock": 0,
        "Imagen":"https://imgs.search.brave.com/9TaY0bc8tddqAd_7WBypdNvJlZmYTQZTZbwZ5A0o-Lk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzQxYmlnOVpsOWVM/LmpwZw"
    },
    {
        "Id":7, 
        "Nombre": "razer viper",
        "Category": "mouse" , 
        "Precio": 120, 
        "Stock": 0,
        "Imagen":"https://imgs.search.brave.com/w0x9bRjSQ-XW1RJrzJSOxJql7k6El_X6pOjVM-PVOAo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mdWxs/aDRyZC5jb20uYXIv/aW1nL3Byb2R1Y3Rv/cy8xNC9tb3VzZS1n/YW1lci1yYXplci12/aXBlci1hbWJpZGV4/dHJvdXMtd2lyZWQt/MC5qcGc"
    },
    {
        "Id":8, 
        "Nombre": "blackwidow v3 green switch",
        "Category": "teclado" , 
        "Precio": 120, 
        "Stock": 0,
        "Imagen":"https://imgs.search.brave.com/NmFvUlzqBrLK3zHBaS1lmLxLaCe7Js8M3_FK0WjlOB4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mdWxs/aDRyZC5jb20uYXIv/aW1nL3Byb2R1Y3Rv/cy84L3RlY2xhZG8t/Z2FtZXItcmF6ZXIt/YmxhY2t3aWRvdy12/My1ncmVlbi1zd2l0/Y2gtZXNwYW9sLTAu/anBn"
    },
    {
        "Id":9, 
        "Nombre": "JBL Bloutooth",
        "Category": "parlante" , 
        "Precio": 120, 
        "Stock": 0,
        "Imagen":"https://imgs.search.brave.com/W2ugMmr9hRS4_GWn7oy-dhgajj9vn_inWAx9naRoIIc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFLLTVhQUdLaEwu/anBn"
    },
    {
        "Id":10, 
        "Nombre": "MacBook Pro 13",
        "Category": "laptop" , 
        "Precio": 120, 
        "Stock": 0,
        "Imagen":"https://imgs.search.brave.com/CNxGWTPg7dwp35EFWE7e01RJhv4LEOZsjb1Sg42z3BM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXhp/bXN0b3JlLmNvbS9f/bmV4dC9pbWFnZT91/cmw9aHR0cHM6Ly9i/YWNrLm1heGltc3Rv/cmUuY29tL3N0YXRp/Yy9pbWFnZXMvYTNi/NjQxNzAtYzkwYy00/NDAyLWI1MzAtZTRl/NTRmZjNmNTY2LnBu/ZyZ3PTM4NDAmcT03/NQ"
    }
  
]
export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find((product) => product.Id === Number(id));
            
            resolve(product);
        }, 1000);
    });
};


export const getProducts=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products);
        },1000);
    });
}





export const getProductsByCategory=(category)=>{
   
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(
                products.filter((product)=>{
                    return product.Category=== category
                   
                })
            )
        },1000)   
    })
}