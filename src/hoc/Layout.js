import React, { Component } from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

class Layout extends Component {
  state = {
    showNav: false
  };

  toggleNav = action => {
    this.setState({
      showNav: action
    });
  };

  render() {
    return (
      <div>
        <Header
          onShowNav={() => this.toggleNav(true)}
          onHideNav={() => this.toggleNav(false)}
          navStatus={this.state.showNav}
        />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export { Layout as default };
