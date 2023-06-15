import React, { useState, useEffect } from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import UseStateComponent from "./components/usestate/UseStateComponent";
import UseContextComponent from "./components/usecontext/UseContextComponent";
import UseRefComponent from "./components/useref/UseRefComponent";
import LocalStorageComponent from "./components/useeffect/LocalStorageComponent";
import ListComponent from "./components/list/ListComponent";
import ResponsiveComponent from "./components/responsive/ResponsiveComponent";
import TableComponent from "./components/table/TableComponent";
import UseLocationComponent from "./components/uselocation/UselocationComponent";
import LiveSearchFilterComponent from "./components/live-search-filter/LiveSearchFilterComponent";
import HomeComponent from "./components/home/Home";
import NewsComponent from "./components/news/News";
import ContactComponent from "./components/contact/Contact";
import DefaultComponent from "./components/default/Default";
import classNames from "classnames";
import Header from "./components/header/Header";
const App = () => {
  const [width, setWidth] = useState(0);
  const [sidebarIsVisible, setSidebarIsVisible] = useState(false);
  const ResizeHandler = () => {
    setWidth(window.innerWidth);
  };
  const sidebarHandler = () => {
    setSidebarIsVisible(!sidebarIsVisible);
  };
  useEffect(() => {
    if (width < 768 && sidebarIsVisible !== false) {
      setSidebarIsVisible(false);
    }
    if (width >= 768 && sidebarIsVisible !== true) {
      setSidebarIsVisible(true);
    }
  }, [width, sidebarIsVisible]);

  useEffect(() => {
    ResizeHandler();
    window.addEventListener("resize", ResizeHandler);
    return () => window.removeEventListener("resize", ResizeHandler);
  }, []);
  const menuList = [
    { href: "/", content: "Home" },
    { href: "/use-state", content: "usestate" },
    { href: "/use-context", content: "UseContext" },
    { href: "/use-ref", content: "UseRef" },
    { href: "/local-storage", content: "LocalStorage" },
    { href: "/list", content: "List" },
    { href: "/responsive", content: "Responsive" },
    { href: "/table", content: "Table" },
    { href: "/use-location/hardik", content: "UseLocation" },
    { href: "/live-search-filter", content: "LiveSearchFilter" },
  ];
 
  const listItems = menuList.map((list, index) => (
    <li key={index}>
      <NavLink exact activeClassName="active_class" to={list.href}>
        {list.content}
      </NavLink>
    </li>
  ));

  return (
    <div>
      <Router>
        <Link className="hemburger-menu" to={"/"} onClick={sidebarHandler}>
          &#9776;
        </Link>
        <Header />
        <div
          className={classNames(
            sidebarIsVisible ? "is-visible" : "is-not-visible",
            "sidebar"
          )}
        >
          <ul>{listItems}</ul>
        </div>
        <Switch>
          <Route exact path="/">
            <DefaultComponent />
          </Route>
          <Route path="/use-state">
            <UseStateComponent />
          </Route>
          <Route path="/use-context">
            <UseContextComponent />
          </Route>
          <Route path="/use-ref">
            <UseRefComponent />
          </Route>
          <Route path="/local-storage">
            <LocalStorageComponent />
          </Route>
          <Route path="/list">
            <ListComponent />
          </Route>
          <Route path="/responsive">
            <ResponsiveComponent />
          </Route>
          <Route path="/table">
            <TableComponent />
          </Route>
          <Route path="/use-location">
            <UseLocationComponent />
          </Route>
          <Route path="/live-search-filter">
            <LiveSearchFilterComponent />
          </Route>
          <Route path="/home">
            <HomeComponent />
          </Route>
          <Route path="/news">
            <NewsComponent />
          </Route>
          <Route path="/contact">
            <ContactComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
