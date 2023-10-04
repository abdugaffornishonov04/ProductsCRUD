import { Fragment } from "react";
import PropTypes from "prop-types";

const ProductsCard = ({
  products,
  editProduct,
  deleteProduct,
  search,
  allCategory,
  allPrice,
}) => {
  let results = products.filter((el) => el.name.toLowerCase().includes(search));
  if (allCategory !== "All Categories") {
    results = results.filter((el) => el.category === allCategory);
  }
  if (allPrice !== "All Price") {
    if (allPrice == "expensive") {
      results.sort((a, b) => b.price - a.price);
    } else {
      results.sort((a, b) => a.price - b.price);
    }
  }

  return (
    <Fragment>
      {results.length != 0
        ? results.map((product, i) => {
            return (
              <div key={i} id={product.id} className="products-card">
                <div className="card-image">
                  <img
                    src={`${
                      product.image
                        ? product.image
                        : "https://picsum.photos/200/300"
                    }`}
                    alt="no image or server error"
                  />
                  <span className="text-light">{product.category}</span>
                </div>
                <div className="product-name-quantity">
                  <p className="product-name">{product.name}</p>
                  <p className="product-quantity">
                    {product.quantity} <span>ta</span>
                  </p>
                </div>
                <p className="product-price">
                  price: <span>{product.price}$</span>
                </p>
                <p className="product-description">{product.description}</p>
                <div className="product-edit-delete">
                  <button
                    className="btn btn-primary product-edit"
                    onClick={() => editProduct(product.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger product-delete"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        : "No products"}
    </Fragment>
  );
};

//

ProductsCard.propTypes = {
  products: PropTypes.array,
  editProduct: PropTypes.func,
  deleteProduct: PropTypes.func,
  search: PropTypes.string,
  allCategory: PropTypes.string,
  allPrice: PropTypes.string,
};

export default ProductsCard;

// category filter and search done 11332456789

/// all done 
