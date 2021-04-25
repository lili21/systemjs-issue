// System.set('app:react', window.React)
System.import('test').then(m => {
  ReactDOM.render(React.createElement(m.default, null, null), document.getElementById('root'))
})