import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

import './style.css';

const getFormattedPrice = amount => `$${amount}`;

const Products = ({ productsList }) => (
  <div className="results-page">
    {productsList && productsList.length > 0 ? (
      <section className="card-container">
        {productsList.map((product, key) => (
          <Card key={key} className="card">
            <CardMedia
              component="img"
              className="card-media"
              image={`http://${product.image}`}
              title={product.description}
            />
            <CardContent>
              <Typography component="h5" variant="h5" className="card-brand" display="inline" color="textPrimary">
                {`${product.brand} `}
              </Typography>
              <Typography component="h5" variant="h5" display="inline">
                {product.description}
              </Typography>
              <br />
              <Typography component="h5" variant="h5" display="inline">
                {`${getFormattedPrice(product.finalPrice)} `}
              </Typography>
              {product?.discount && (
                <>
                  <Typography component="h5" variant="h5" color="secondary" display="inline">
                    {`${product.discount.percentage}%`}
                  </Typography>
                  <Typography component="h5" variant="h6" className="card-original-price">
                    {getFormattedPrice(product.price)}
                  </Typography>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </section>
    ) : (
      <Typography variant="h5" component="h3" className="page-message">
        There are no results
      </Typography>
    )}
  </div>
);

Products.propTypes = {
  productsList: PropTypes.array,
};

Products.defaultProps = {
  productsList: [],
};

export default Products;
