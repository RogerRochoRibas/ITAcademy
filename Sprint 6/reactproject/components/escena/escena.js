const text = document.getElementById('text');
const element = React.createElement(
    'p',
    {},
    'El nostre heroi estava surant per lespai sideral quan a la llunyania va albirar una nau espacial'
);
ReactDOM.render(element, text);