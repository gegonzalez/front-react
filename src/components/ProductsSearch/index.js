import React, { useState, useEffect } from 'react';
import { AppBar, InputBase, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';

import Products from '../Products';

import './style.css';

const ProductsSearch = () => {
  const MIN_FILTER_LENGTH = 3;
  const [filterText, setfilterText] = useState('');
  const [productsResults, setProductsResults] = useState([]);
  const URL = 'http://localhost:8080/products/';

  const fetchById = async () => {
    try {
      const { data } = await axios.get(`${URL}${filterText}`);
      setProductsResults([data]);
    } catch (error) {
      setProductsResults([]);
    }
  };

  const fetchByBrandOrDescription = async () => {
    try {
      const { data } = await axios.get(`${URL}search?filter=${filterText}`);
      setProductsResults(data);
    } catch (error) {
      setProductsResults([]);
    }
  };

  useEffect(() => {
    if (isNaN(+filterText)) {
      if (MIN_FILTER_LENGTH <= filterText.length) {
        fetchByBrandOrDescription();
      }
    } else if (filterText) {
      fetchById();
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
              placeholder="Search..."
              onChange={({ target }) => setfilterText(target.value)}
              value={filterText}
              data-testid="input-search"
            />
          </div>
        </Toolbar>
      </AppBar>
      {filterText && <Products productsList={productsResults} />}
    </>
  );
};

export default ProductsSearch;
