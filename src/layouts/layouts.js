import React from 'react';

const LayoutLeft = ({children}) => 
  <div class="leftbox">
    <h2>Layout One</h2> 
    {children}
  </div>;

const LayoutRight = ({children}) => 
  <div class="rightbox">
    <h2>Layout Two</h2> 
    {children}
  </div>;

export { LayoutLeft, LayoutRight };