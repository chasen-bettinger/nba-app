import React, { Component } from "react";

import Header from "../components/Header";

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
        Footer
      </div>
    );
  }
}

export { Layout as default };
