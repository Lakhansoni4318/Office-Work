import styled from "styled-components";
import { useState, useEffect } from "react";
import Popup from "./Popup";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Fetch product data from the API using Axios
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
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
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px;
    display: flex;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  .product-image img {
    width: 150px;
    height: 150px;
  }

  .product-details {
    margin-top: 10px;
    margin-left: 20px;
    p {
      font-size: 1.2rem;
      margin-top: 5px;
    }

    .btn {
      margin-top: 20px;
      button {
        background-color: #57bb63;
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 450px) {
    .product {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .product-details {
        font-size: 2vh;
        width: 80%;
      }
    }
  }
`;

export default Product;
