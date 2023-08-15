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
  font-size: 2vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f4f4f4;
  padding: 10px;
  box-sizing: border-box;
  /* max-width: 100%; */
  min-width: 90%;
  .offers {
    display: flex;
    align-items: center;

    .offer {
      text-decoration: none;
      background-color: #decfff;
      color: black;
      padding: 5px;
      display: flex;
      align-items: center;
      margin-right: 10px;

      img {
        width: 20px;
        margin-right: 5px;
      }

      span {
        font-size: 3vh;
      }
    }
  }

  .login-signUp {
    display: flex;
    align-items: center;
    margin-right: 10px;

    a {
      color: black;
      text-decoration: none;
      margin: 0 5px;
      font-size: 3vh;
    }

    .line {
      width: 1px;
      height: 20px;
      background-color: black;
      margin: 0 10px;
    }

    .notification-icon {
      font-size: 2vh;
      color: black;
    }

    .submit {
      background-color: #57bb63;
      color: white;
      padding: 5px 10px;
      border: none;
      font-size: 1.5vh;
    }

    img {
      width: 20px;
      margin-right: 5px;
    }
  }

  @media (max-width: 1050px) {
    .offers .offer span {
      font-size: 12px;
    }
    .login-signUp a {
      font-size: 12px;
    }
  }

  @media (max-width: 850px) {
    .offers .offer span {
      font-size: 10px;
    }

    .login-signUp a {
      font-size: 10px;
    }
    .submit {
      font-size: 1px;
      padding: 2px;
    }
  }

  @media (max-width: 580px) {
    .offers .offer span {
      font-size: 8px;
    }
    .login-signUp a {
      font-size: 8px;
    }
    .submit {
      font-size: 5px;
      padding: 5px;
    }
  }

  @media (max-width: 380px) {
    .offers .offer span {
      font-size: 5px;
    }
    .login-signUp a {
      font-size: 5px;
    }
    .line {
      width: 1px;
      height: 20px;
      background-color: black;
      margin: 0 3px;
    }
    .submit {
      font-size: 1px;
      padding: 2px;
    }
  }
  @media (max-width: 280px) {
    .line {
      width: 1px;
      height: 20px;
      background-color: black;
      margin: 0 3px;
    }
    .submit {
      font-size: 1px;
      padding: 2px;
    }
    .offers .offer span {
      font-size: 3px;
    }
    .login-signUp a {
      font-size: 3px;
    }
  }
`;

export default Account;
