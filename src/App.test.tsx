import React from 'react';
import SocialNetworkApp from './App';
import ReactDOM from "react-dom";

test('Renders <SocialNetworkApp /> component correctly', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SocialNetworkApp/>, div);
  ReactDOM.unmountComponentAtNode(div)
});