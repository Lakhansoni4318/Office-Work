import { styled } from "styled-components";

const BrandLogo = () => {
  return (
    <Wrapper>
      <a href="/">
        <img
          src="https://cdn1.desidime.com/ddb/festival-logo/Desidime-Desktop-logo.png"
          alt="Brand Logo"
        />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  img {
    height: 10vh;
  }

  @media (max-width: 460px) {
    img {
      height: 6vh;
    }
  }
`;

export default BrandLogo;
