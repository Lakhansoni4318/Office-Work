import { styled } from "styled-components";
import { FaFilter, FaListUl } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import { BsTextCenter } from "react-icons/bs";

const FilterProductNav = () => {
  return (
    <Wrapper>
      <div className="filter">
        <p>Sort By</p>
        <ul>
          <li>Hot</li>
          <li>New</li>
          <li>Commented</li>
        </ul>
      </div>
      <div className="wrap-product">
        <button>
          <span>
            <FaFilter />
          </span>
          <p>By Merchants</p>
        </button>
        <div className="wrap">
          <span>
            <MdGridView />
          </span>
          <span>
            <FaListUl />
          </span>
          <span>
            <BsTextCenter />
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
  .filter {
    display: flex;
    align-items: center;
    margin: 0 0.0625rem;

    p {
      color: #a5b9d4;
      font-size: 1.3rem;
    }
    ul {
      display: flex;
    }
    li {
      list-style: none;
      margin: 0 1.2rem;
      font-weight: bold;
      cursor: pointer;
      font-size: 1.5rem;
    }
  }

  .wrap-product {
    display: flex;
    align-items: center;

    button {
      display: flex;
      align-items: center;
      border-right: 0.125rem solid black;
      border-top: none;
      border-bottom: none;
      padding: 0.625rem;
      p {
        font-size: 1rem;
        margin-left: 0.625rem;
      }
      span {
        font-size: 1rem;
      }
    }

    .wrap {
      display: flex;
      align-items: center;

      span {
        padding: 0.9375rem;
        font-size: 1.2rem;
      }
    }
  }
`;

export default FilterProductNav;
