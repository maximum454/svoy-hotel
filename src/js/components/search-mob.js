const  searchMobInput = document.querySelector('.js-search-mob');
const  searchMobClean = document.querySelector('.js-search-mob-clean');
const  searchMobOften = document.querySelector('.search-mob__often');
const  searchMobProducts = document.querySelector('.search-mob .products');

searchMobInput.addEventListener('keyup', (event)=>{
    
    if(searchMobInput.value){
        searchMobOften.style.display = 'none';
        searchMobProducts.style.display = 'block';
    }else{
        searchMobOften.style.display = 'block';
        searchMobProducts.style.display = 'none';
    }
})

searchMobClean.addEventListener('click', ()=>{
    searchMobInput.value = '';
    searchMobOften.style.display = 'block';
    searchMobProducts.style.display = 'none';
})

