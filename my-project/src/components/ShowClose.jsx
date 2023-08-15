import { styled } from "styled-components";
import { GrFormClose } from "react-icons/gr";
import { useState } from "react";

const ShowClose = () => {
  const [show, setShow] = useState(true);

  const hundleClose = () => {
    setShow(false);
  };
  return (
    show && (
      <Wrapper>
        <p>Best Online Deals, Coupons & Offers</p>
        <span onClick={hundleClose}>
          <GrFormClose />
        </span>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  background-color: #2f2f2f;
  padding: 15px;
  color: white;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    background-color: white;
    padding: 5px;
    cursor: pointer;
  }
  @media (max-width: 640px) {
    p {
      font-size: 0.8rem;
    }
  }
`;

export default ShowClose;
