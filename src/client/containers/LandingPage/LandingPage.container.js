import React, {useState} from 'react';
import './LandingPage.styles.css';
import { useProducts } from '../../hooks/useProducts';
import Loader from '../../components/Loader/Loader.component';
import Sort from '../../components/Sort/Sort.component';
import Pagination from '../../components/Pagination/Pagination.component';
import SpecialOfferBanner from '../../components/SpecialOfferBanner/SpecialOfferBanner.component';

export default function LandingPage() {
  const { products, isLoading, error } = useProducts();
  const [sortProducts, setSortProducts] = useState(products);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <>
          <SpecialOfferBanner />
          <Sort products={products} setSortedProducts={setSortProducts} />
          <Pagination productsPerPage={8} />
        </>
      )}
      {error && <h1>Error occurred while fetching products: {error}</h1>}
    </div>
  );
}
