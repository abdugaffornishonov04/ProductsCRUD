import ProductsCard from "../components/Cards/ProductsCard";

import { Col, Row } from "react-bootstrap";
import PpProductsForm from "../components/Forms/PpProductsForm";
import ProductsHeader from "../components/Header/ProductsHeader";
import { useState } from "react";
import { v4 } from "uuid";

const ProductsPage = () => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  const [product, setProduct] = useState({
    image: "",
    name: "",
    price: "",
    category: "All Categories",
    quantity: "",
    description: "",
  });

  const [validated, setValidated] = useState(false);

  const [selected, setSelected] = useState(null);

  const [search, setSearch] = useState("");

  const [allCategory, setAllCategory] = useState("All Categories");

  const [allPrice, setAllPrice] = useState("All Price");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity()) {
      let veryNewProduct = { ...product, id: v4() };
      let newProducts;

      if (selected === null) {
        newProducts = [...products, veryNewProduct];
      } else {
        newProducts = products.map((product) => {
          if (product.id === selected) {
            return veryNewProduct;
          } else {
            return product;
          }
        });
      }

      setProducts(newProducts);
      localStorage.setItem("products", JSON.stringify(newProducts));
      setProduct({
        image: "",
        name: "",
        price: "",
        category: "All Categories",
        quantity: "",
        description: "",
      });
      setSelected(null);
    } else {
      setValidated(true);
    }
  };

  const handleProduct = (e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
  };

  const editProduct = (id) => {
    let product = products.find((p) => p.id === id);
    setProduct(product);
    setSelected(id);
  };

  const resetProduct = () => {
    setProduct({
      image: "",
      name: "",
      price: "",
      category: "All Categories",
      quantity: "",
      description: "",
    });
  };

  const deleteProduct = (e) => {
    let newProducts = products.filter((product) => product.id !== e);
    setProducts(newProducts);

    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  // console.log(product);

  return (
    <div className="products-page">
      <div className="theContainer">
        <h1 className="text-center mb-3">Products</h1>
        <Row>
          <Col className="pp-form-left" md="4">
            <PpProductsForm
              selected={selected}
              product={product}
              validated={validated}
              handleSubmit={handleSubmit}
              handleProduct={handleProduct}
              resetProduct={resetProduct}
              className="pp-form-of-left"
            />
          </Col>
          <Col md="8" className="pp-products-wrapper mt-3 pp-cards-right">
            <ProductsHeader
              setSearch={setSearch}
              search={search}
              allCategory={allCategory}
              setAllCategory={setAllCategory}
              allPrice={allPrice}
              setAllPrice={setAllPrice}
            />

            <div className="pp-cards-wrapper">
              <ProductsCard
                allCategory={allCategory}
                allPrice={allPrice}
                search={search}
                editProduct={editProduct}
                deleteProduct={deleteProduct}
                products={products}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductsPage;

//some big things worked out

// search is done 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18

// category filter and search is done 1 2 3 4 5

// all done
