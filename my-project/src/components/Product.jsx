import styled from "styled-components";
import { useState, useEffect } from "react";
import Popup from "./Popup";
import axios from "axios";
import { ProductData } from "../../Product_data";
const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => {
        setProducts(ProductData);
      });
  }, []);

  const openPopup = (index) => {
    setSelectedProduct(index);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <Wrapper>
      {products.map((element, index) => (
        <div className="product" key={index}>
          <div className="product-image">
            <img src={element.image} alt="" />
          </div>
          <div className="product-details">
            <h3>{element.title}</h3>
            <p>{element.description}</p>
            <p style={{ color: "#3877CC" }}>₹{element.price}</p>
            <p>{element.discount}%</p>
            <div className="btn">
              <button onClick={() => openPopup(index)}>Get Deal</button>
            </div>
          </div>
        </div>
      ))}
      {selectedProduct !== null && (
        <Popup product={products[selectedProduct]} onClose={closePopup} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .product {
    border: 0.0625rem solid #ccc;
    padding: 1.25rem;
    margin: 0.625rem;
    display: flex;
    box-shadow: 0 0 0.3125rem rgba(0, 0, 0, 0.1);
  }

  .product-image img {
    width: 9.375rem;
    height: 9.375rem;
  }

  .product-details {
    margin-top: 0.625rem;
    margin-left: 1.25rem;
    p {
      font-size: 1.2rem;
      margin-top: 0.3125rem;
    }

    .btn {
      margin-top: 1.25rem;
      button {
        background-color: #57bb63;
        color: white;
        border: none;
        padding: 0.625rem;
        cursor: pointer;
        font-size: 1.2rem;
      }
    }
  }
`;

export default Product;
