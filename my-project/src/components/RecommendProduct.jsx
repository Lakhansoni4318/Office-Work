import { styled } from "styled-components";
import { Products } from "../../Product_data";

const RecommendProduct = () => {
  return (
    <Wrapper>
      {Products.map((element, index) => (
        <div className="product" key={index}>
          <div className="product-image">
            <img src={element.image} alt="" />
          </div>
          <div className="product-details">
            <h3>{element.title}</h3>
            <p>{element.discount}%</p>
            <div className="btn">
              <button>Get Deal</button>
            </div>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default RecommendProduct;
