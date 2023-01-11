/* eslint-disable @typescript-eslint/quotes */
// Example from gatsby-plugin-portal
// https://www.gatsbyjs.com/plugins/gatsby-plugin-portal/?=gatsby-plugin-portal#gatsby-gotcha---document-is-undefined

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Use a ternary operator to make sure that the document object is defined
const portalRoot =
  typeof document !== `undefined` ? document.getElementById('portal') : null;

type Props = {
  children: React.ReactNode;
};

export default class Portal extends Component<Props> {
  el = typeof document !== `undefined` ? document.createElement('div') : null;

  componentDidMount = () => {
    // eslint-disable-next-line no-undef
    portalRoot?.appendChild(this.el as HTMLDivElement);
  };

  componentWillUnmount = () => {
    portalRoot?.removeChild(this.el as HTMLDivElement);
  };

  render() {
    const { children } = this.props;

    // Check that this.el is not null before using ReactDOM.createPortal
    if (this.el) {
      return ReactDOM.createPortal(children, this.el);
    } else {
      return null;
    }
  }
}
