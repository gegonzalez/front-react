import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { searchProducts, findProductById } from '../../clients/productsClient';

import Products from '../Products';

import './style.css';

const ProductsSearch = () => {
  const MIN_FILTER_LENGTH = 3;
  const [filterText, setfilterText] = useState('');
  const [productsResults, setProductsResults] = useState([]);

  useEffect(() => {
    if (Number.isNaN(filterText)) {
      if (MIN_FILTER_LENGTH <= filterText.length) {
        setProductsResults(searchProducts(filterText));
      }
    } else {
      const resulta = findProductById(filterText);
      setProductsResults(resulta);
    }
  }, [filterText]);

  return (
    <>
      <AppBar position="static">
        <Toolbar className="appbar">
          <Typography variant="h6" color="inherit">
            Company
          </Typography>
          <div className="main-container">
            <div className="container-icon">
              <SearchIcon />
            </div>
            <InputBase
              id="filterText"
              label="filterText"
              placeholder="Search…"
              style={{ width: '100%' }}
              onChange={({ target }) => setfilterText(target.value)}
              value={filterText}
              data-testid="input-search"
            />
          </div>
        </Toolbar>
      </AppBar>
      <Products productsList={productsResults} />
    </>
  );
};

export default ProductsSearch;
