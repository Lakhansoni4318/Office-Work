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

  .filter {
    display: flex;
    align-items: center;
    margin: 0 1vw;

    p {
      color: #a5b9d4;
    }
    ul {
      display: flex;
      margin: 0;
      padding: 0;
    }
    li {
      list-style: none;
      margin: 0 2vw;
      font-weight: bold;
      cursor: pointer;
      font-size: 3vh;
    }
  }

  .wrap-product {
    font-size: 2vh;
    display: flex;
    align-items: center;

    button {
      display: flex;
      align-items: center;
      border-right: 2px solid black;
      border-top: none;
      border-bottom: none;
      padding: 1vw;
      p {
        font-size: 2vh;
        margin-left: 1vw;
      }
      span {
        font-size: 2vh;
      }
    }

    .wrap {
      display: flex;
      align-items: center;

      span {
        padding: 1.5vw;
        font-size: 2vh;
      }
    }
  }

  @media (max-width: 800px) {
    .filter li {
      font-size: 25px;
      margin: 0 2vw;
    }
    .wrap-product button p {
      font-size: 20px;
    }
  }

  @media (max-width: 640px) {
    .filter li {
      font-size: 15px;
    }

    .wrap-product button p {
      font-size: 15px;
    }
  }

  @media (max-width: 460px) {
    .filter p {
      font-size: 10px;
    }
    .filter li {
      font-size: 12px;
    }
    .wrap-product button p {
      font-size: 10px;
    }
  }

  @media (max-width: 460px) {
    .filter li {
      font-size: 10px;
    }
    .wrap-product button p {
      font-size: 8px;
    }
    .filter p {
      font-size: 6px;
    }
  }
`;

export default FilterProductNav;
