import Menu from "./Menu";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <div className="layout">
      <aside className="sidebar">
        <Menu />
      </aside>
      <main className="main-content">{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
