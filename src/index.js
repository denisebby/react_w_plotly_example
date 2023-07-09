import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Plot from 'react-plotly.js';

const Scatterplot = () => {
    return (
        <Plot
            data={[
                {
                    x: [1, 2, 3, 4, 5],
                    y: [2, 6, 3, 10, 5],
                    mode: 'markers',
                    type: 'scatter',
                },
            ]}
            layout={{ width: 500, height: 300, title: 'A Scatter Plot' }}
        />
    );
};

import './style.css'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
      </div>
      <div>Scatterplot()</div>
      <Plot
            data={[
                {
                    x: [1, 2, 3, 4, 5],
                    y: [2, 6, 3, 10, 5],
                    mode: 'markers',
                    type: 'scatter',
                },
            ]}
            layout={{title: 'A Scatter Plot' }}
        />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
