import React, { useState } from 'react';
import './LandingPage.styles.css';
import { useProducts, PRODUCT_PER_PAGE } from '../../hooks/useProducts';
import Loader from '../../components/Loader/Loader.component';
import Sort from '../../components/Sort/Sort.component';
import Pagination from '../../components/Pagination/Pagination.component';
import SpecialOfferBanner from '../../components/SpecialOfferBanner/SpecialOfferBanner.component';
import ProductsView from '../../components/ProductsView/ProductsView.component';
import Modal from '../../components/Modal/Modal.component';

export default function LandingPage() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  function openModal() {
    setmodalIsOpen(true);
  }
  function testFunction() {
    console.log('test');
  }

  const [sortingPreferences, setSortingPreferences] = useState({
    sortKey: 'name',
    sortOrder: 'asc',
  });
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const { isLoading, error, products, totalCount } = useProducts({
    ...sortingPreferences,
    currentPage: currentPageIndex,
  });

  const maxNumberOfPages = Math.ceil(totalCount / PRODUCT_PER_PAGE);

  return (
    <div>
      <SpecialOfferBanner />
      <button type="button" onClick={openModal}>
        test
      </button>
      {modalIsOpen && (
        <Modal
          modalIsOpen={setmodalIsOpen}
          text="Kindly check your email to reset your password"
          cornerClose={true}
          btnLabel="Try To Log-In Again"
          // eslint-disable-next-line react/jsx-no-bind
          btnFunction={testFunction}
        />
      )}
      <Sort
        sortingPreferences={sortingPreferences}
        setSortingPreferences={setSortingPreferences}
        setCurrentPage={setCurrentPageIndex}
      />
      {isLoading && <Loader />}
      {!!products && products.length > 0 && (
        <ProductsView products={products} />
      )}
      {totalCount > 0 && (
        <Pagination
          currentPageIndex={currentPageIndex}
          pageCount={maxNumberOfPages}
          setCurrentPageIndex={setCurrentPageIndex}
        />
      )}
      {error && <h1>Error occurred while fetching products: {error}</h1>}
    </div>
  );
}
