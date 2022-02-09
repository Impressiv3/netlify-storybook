import { number, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import React from 'react';

import Product from './Product';

import imageFile from '../../assets/images/image_28.png';

export default {
  title: 'components / specialOffers ',
  component: Product,
  argTypes: {
    onClick: { action: 'clicked' },
    addToFavorites: { action: 'clicked' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const ProductModel = () => (
  <Product
    image={imageFile}
    discount={number('discount', 20)}
    name={text('Name', 'Crocosmia Mistral8')}
    price={number('Price', 85)}
    discountPrice={number('discountPrice', 68)}
    currency={text('Currency', 'DKK')}
    onClick={action('You have clicked the add to cart button')}
    addToFavorites={action('You have clicked the add to favorites button')}
  />
);
