import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null: // Still waiting for request to resolve
        return;
      case false: // logged out
        return (
          <li>
            <a href="/auth/google">Log In with Google</a>
          </li>
        );
      default:
        // logged in
        return (
          <li>
            <a href="/api/logout">Log out</a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
