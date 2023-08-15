import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 80%;
  width: 400px;

  .product-details {
    img {
      width: 100%;
      max-height: 200px;
      object-fit: contain;
    }

    h3 {
      font-size: 1.5rem;
      margin-top: 10px;
    }

    p {
      font-size: 1.2rem;
      margin-top: 5px;
    }

    p.price {
      color: #3877cc;
    }

    p.discount {
      color: #e74c3c;
    }
  }
`;

const CloseButton = styled.button`
  font-size: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Popup = ({ product, onClose }) => {
  return (
    <PopupOverlay>
      <PopupContent>
        <CloseButton onClick={onClose}>
          <AiFillCloseCircle />
        </CloseButton>
        <div className="product-details">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p className="price">₹{product.price}</p>
          <p className="discount">{product.discount}% off</p>
        </div>
      </PopupContent>
    </PopupOverlay>
  );
};

Popup.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Popup;
