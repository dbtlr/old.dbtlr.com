
import React from 'react';
import ReactDOM from 'react-dom';

import './styles/core.scss';


ReactDOM.render((
  <div className='container text-center'>
    <header>
      <h1>Drew Butler</h1>
      <h4>Technical advisor, website developer, writer, and builder of things</h4>
    </header>
    <p>I help people understand how to break down complex ideas into simple actions. I advise entrepreneurs on how to best deal with technical challenges.</p>
    <p><strong>If you're looking for help with a problem</strong>, feel free to email me: <a href="mailto:hi@dbtlr.com">hi@dbtlr.com</a>.</p>
  </div>
  ),
  document.getElementById('root')
);
