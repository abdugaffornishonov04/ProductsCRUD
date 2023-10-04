import { Form, InputGroup } from "react-bootstrap";
import { productCategories } from "../data/categoriesData";
import PropTypes from "prop-types";


const ProductsHeader = ({setSearch, search, allCategory, setAllCategory, allPrice, setAllPrice}) => {
  return (
    <div>
      <InputGroup className="mb-3 bg-transparent  ">
        <Form.Control
          value={search}
          onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
          className="me-2"
          placeholder="Search for products..."
        />
        <div className="header-select-category me-2">
          <Form.Select
            value={allCategory}
            onChange={(e) => setAllCategory(e.target.value)}
          >
            <option>All Categories</option>
            {productCategories.map((category, i) => (
              <option value={category} key={i}>
                {category}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="header-price-category">
          <Form.Select value={allPrice} onChange={(e) => setAllPrice(e.target.value)}>
            <option> All Price</option>
            <option value="expensive">Expensive</option>
            <option value="cheap">Cheap</option>
          </Form.Select>
        </div>
      </InputGroup>
    </div>
  );
};

ProductsHeader.propTypes = {
  setSearch: PropTypes.func,
  search: PropTypes.string,
  allCategory: PropTypes.string,
  setAllCategory: PropTypes.func,
  allPrice: PropTypes.string,
  setAllPrice: PropTypes.func
}

export default ProductsHeader;

// category filter and search done 1 23 4 5 6 7 

// all done
