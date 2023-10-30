import React from 'react'
import { CartState } from '../context/Context'
import ProductCard from './ProductCard'
import Filters from './Filter'

const Home = () => {
    
  const {state : {products} , filterState : {
    sort,
    byStock,
    byFastDelivery,
    byRating,
    searchQuery
} } = CartState()

  const FliteredProducts = () => {
    let filteredProducts = products;

    if (sort) {
      filteredProducts = filteredProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      filteredProducts = filteredProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      filteredProducts = filteredProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      filteredProducts = filteredProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return filteredProducts;
  }

  return (
    <div className='home'>
        <Filters />
        <div className='productContainer'>
            {FliteredProducts().map((prod)=> <ProductCard prod={prod} key={prod.id}  /> )}
        </div>
    </div>
  )
}

export default Home