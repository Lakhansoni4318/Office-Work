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
        <input type="search" name="search" id="search" placeholder="Search" />
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
  padding: 1rem 2rem;

  .nav-list {
    ul {
      display: flex;
      list-style: none;

      li {
        margin: 0 0.5rem;
      }
    }

    a {
      text-decoration: none;
      color: white;
      font-size: 1rem;
      padding: 0.5rem;
    }
  }

  .search-bar {
    display: flex;
    align-items: center;

    input {
      padding: 0.5rem;
      width: 15rem;
      box-sizing: border-box;
      font-size: 1rem;
      border: none;
      border-radius: 0.25rem;
    }

    button {
      padding: 0.3rem;
      color: white;
      background-color: #57bb63;
      border: none;
      border-radius: 0.25rem;
      margin-left: 0.25rem;
      cursor: pointer;
      font-size: 1.3rem;
    }
  }
`;

export default Navbar;
