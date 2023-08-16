import { styled } from "styled-components";
import { MdNotifications } from "react-icons/md";

const Account = () => {
  return (
    <Wrapper>
      <div className="offers">
        <a href="#" className="offer">
          <img
            src="https://cdn0.desidime.com/merchants/688/original/rakshabandhan-icon.png?1627892899"
            alt="Raksha Bandhan"
          />
          <span>Raksha Bandhan Offers</span>
        </a>
        <a href="#" className="offer">
          <img
            src="https://cdn3.desidime.com/merchants/687/original/independence-day-offers-2021.png?1627627138"
            alt="Independence Day"
          />
          <span>Independence Day Offers</span>
        </a>
      </div>
      <div className="login-signUp">
        <img
          src="https://cdn0.desidime.com/giveaways/dsk/golddime-notify-icon.png"
          alt="Golddime notify icon"
        />
        <MdNotifications className="notification-icon" />
        <div className="line"></div>
        <a href="#">LOGIN</a>
        <a href="#">SIGNUP</a>
        <button className="submit">SUBMIT +</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f4f4f4;
  padding: 1rem;
  box-sizing: border-box;

  min-width: 90%;
  .offers {
    display: flex;
    align-items: center;

    .offer {
      text-decoration: none;
      background-color: #decfff;
      color: black;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      margin-right: 0.625rem;
      flex-wrap: wrap;
      text-align: center;
      justify-content: center;
      img {
        width: 1.25rem;
        margin-right: 0.3125rem;
      }

      span {
        font-size: 1.2rem;
      }
    }
  }

  .login-signUp {
    display: flex;
    align-items: center;

    a {
      color: black;
      text-decoration: none;
      margin: 0 0.8rem;
      font-size: 1.2rem;
    }

    .line {
      width: 0.0625rem;
      height: 1.25rem;
      background-color: black;
      margin: 0 0.7rem;
    }

    .notification-icon {
      font-size: 1.5rem;
      color: black;
    }

    .submit {
      background-color: #57bb63;
      color: white;
      padding: 0.625rem;
      border: none;
      font-size: 1rem;
      margin-left: 0.5rem;
    }

    img {
      width: 1.5rem;
      margin-right: 1.5rem;
    }
  }
`;

export default Account;
