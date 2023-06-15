import classNames from "classnames";
import Cart from "../../images/shopping-cart.svg";
const TopBar = (props) => {
  const menuList = [
    { id: 1, title: "Home" },
    {
      id: 2,
      title: "News",
    },
    {
      id: 3,
      title: "Contact",
    },
    {
      id: 4,
      title: "About",
    },
    {
      id: "cart",
    },
  ];

  const headerMenu = (
    <header>
      <ul>
        {menuList.map((li, i) => (
          <div key={i}>
            <li className={classNames({ "add-cart": li.id === "cart" })}>
              {li.id === "cart" ? (
                <>
                  <img
                    className="shopping__cart"
                    src={Cart}
                    alt="shopping cart"
                  />
                  <span className="add-cart__badge">{props.data.count}</span>
                </>
              ) : (
                <a id={li.id} href="/">
                  {li.title}
                </a>
              )}
            </li>
          </div>
        ))}
      </ul>
    </header>
  );

  return <>{headerMenu}</>;
};

export default TopBar;
