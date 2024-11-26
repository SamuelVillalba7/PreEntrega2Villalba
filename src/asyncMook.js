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
    }
  
]
export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find((product) => product.Id === Number(id));
            console.log(product)
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