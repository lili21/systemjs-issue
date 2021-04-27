// System.set('app:react', window.React)
Promise.all([
  System.import('react'),
  System.import('react-dom'),
  System.import('test')
]).then(([React, ReactDOM, Test]) => {
  ReactDOM.render(React.createElement(Test.default, null, null), document.getElementById('root'))
})