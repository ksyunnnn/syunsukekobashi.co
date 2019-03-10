import React from 'react';

import 'semantic-ui-css/semantic.min.css';
import './layout.css';

export default ({ children, className }) => (
  <main className={className}>{children}</main>
);
