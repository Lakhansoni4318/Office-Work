import styled from "styled-components";
import { NavList } from "../contact/data";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-list">
        <ul>
          {NavList.map((element) => (
            <li key={element.id}>
              <a href="#">{element.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="search-bar">
        <input type="search" name="search" id="search" />
        <button>
          <AiOutlineSearch />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: #1976d2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 90%;
  max-width: 100%;

  .nav-list {
    ul {
      display: flex;
      padding: 10px;
      margin: 0;
    }

    a {
      text-decoration: none;
      color: white;
      font-size: 3vh;
    }

    li {
      color: white;
      list-style: none;
      margin: 0 2vw;
      font-size: 3vh;
    }
  }

  .search-bar {
    display: flex;
    align-items: center;
    margin-right: 1vw;

    input {
      padding: 1vh;
      width: 20vw;
      max-width: 70vw;
      box-sizing: border-box;
    }

    button {
      font-size: 2vh;
      padding: 1vh;
      width: 40px;
      color: white;
      background-color: #57bb63;
      border: none;
      font-size: 18px;
      margin-left: 2px;
    }
  }

  @media (max-width: 1000px) {
    .nav-list a {
      font-size: 12px;
    }
  }
  @media (max-width: 600px) {
    .nav-list a {
      font-size: 10px;
    }
  }

  @media (max-width: 485px) {
    .nav-list a {
      font-size: 6px;
    }
  }
  @media (max-width: 280px) {
    .nav-list li a {
      font-size: 5px;
    }
  }
`;

export default Navbar;
