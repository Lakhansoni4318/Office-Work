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
  padding: 1.25rem;
  img {
    height: 5rem;
  }
`;

export default BrandLogo;
