// import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { productCategories } from "../data/categoriesData";
import PropTypes from "prop-types";

const PpProductsForm = ({
  validated,
  handleSubmit,
  product,
  handleProduct,
  selected,
  resetProduct
}) => {
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="image">
        <Form.Label className="text-light">Product image (optional)</Form.Label>
        <Form.Control
          // required
          onChange={handleProduct}
          value={product.image}
          type="text"
        />
        <Form.Control.Feedback type="invalid">
          Please leave us the product image!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label className="text-light">Product name</Form.Label>
        <Form.Control
          required
          onChange={handleProduct}
          value={product.name}
          type="text"
        />
        <Form.Control.Feedback type="invalid">
          Please enter the product name!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label className="text-light">Price</Form.Label>
        <Form.Control
          required
          onChange={handleProduct}
          value={product.price}
          type="number"
        />
        <Form.Control.Feedback type="invalid">
          Please enter the price amount!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="category">
        <Form.Label className="text-light">Category</Form.Label>
        <Form.Select onChange={handleProduct} value={product.category}>
          <option>All Categories</option>
          {productCategories.map((category, i) => (
            <option value={category} key={i}>
              {category}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Please enter the category of the product!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="quantity">
        <Form.Label className="text-light">Quantity</Form.Label>
        <Form.Control
          required
          onChange={handleProduct}
          value={product.quantity}
          type="number"
        />
        <Form.Control.Feedback type="invalid">
          Please enter the quantity of the product!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label className="text-light">Description</Form.Label>
        <Form.Control
          required
          onChange={handleProduct}
          value={product.description}
          type="text"
          as="textarea"
        />
        <Form.Control.Feedback type="invalid">
          Please enter the quantity of the product!
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary me-3" type="submit">
        {selected === null ? "Add product" : "Modify product"}
      </Button>
      <Button variant="info" onClick={resetProduct}>
        Reset
      </Button>
    </Form>
  );
};

// };

PpProductsForm.propTypes = {
  validated: PropTypes.bool,
  handleSubmit: PropTypes.func,
  product: PropTypes.object,
  handleProduct: PropTypes.func,
  selected: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  resetProduct: PropTypes.func,
};

export default PpProductsForm;


//some big things workeed
/// search is done 1 2 3 4 5  67 