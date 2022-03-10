/* Exercise 1
var Escena = function Escena() {
    return <p>'El nostre heroi estava surant per lespai sideral quan a la llunyania va albirar una nau espacial'</p>;
}*/

//Exercise 2
var Escena = function Escena(props) {
  return <p>{props.scene}</p>;
}
export {Escena}