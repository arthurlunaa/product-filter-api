// decl
const productList = document.getElementById ('product-list')
const filterInput = document.getElementById('filter-input')
let products = []
//  consumo da api 
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        products = await response.json()
        
    } catch (error){
        productList.innerHTML = `<p> Erro ao carregar os produtos . tente novamente  ${error}</p>`
    }
    
    
}
// função para exibir produto 
function displayProducts(filteredProducts){
    productList.innerHTML = ''
    if (filteredProducts.lenght ===0) {
          productList.innerHTML ='<p> nenhum produto encontrado   </p>'
    }
   // percorrendo todos os items do produto 
    filteredProducts.array.forEach((product) => {
        //criando uma div com js um 
        const productElement = document.createElement('div')
        // adicionando uma classe com js
        productElement.className('product')
    });

}