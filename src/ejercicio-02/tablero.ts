/**
 * Enum Ficha, nos permite representar el estado de las casillas en el tablero
 */
export enum Ficha { Vacia, Roja, Amarilla }
/**
 * La variable scanf global, para poder pedir parametor por consola
 */
let scanf = require('scanf')

/**
 * Clase que representa el tablero del juego Conecta 4
 */
export class Tablero {
  mapa: Ficha[][] = [[], [], [], [], [], [], []]
  constructor() {
    this.mapa.forEach((element: Ficha[]) => {
      for (let i: number = 0; i < 6; i++) {
        element.push(Ficha.Vacia)
      }
    })
  }

  /**
   * Funcion que da inicio al juego
   */
  start() {
    let iterator: number = 0
    while (iterator <= 21) { // Numero maximo de fichas que tiene cada jugador
      console.log(" - Player 1 -");
      this.print() // Imprimimos el tablero
      // Pedir Columna a jugar
      // Funcion par añadir la columna

      let option: number = -1
      while (!this.insertInColumn(option, Ficha.Roja)) {
        //Pedir la 'option' columna
        console.log("Seleccione una columna: ");
        let valor: number = scanf('%d')
        option = valor - 1
      }

      if (this.checkWin(option, Ficha.Roja)) {
        console.clear();
        console.log(" Win Player 1");
        this.print() // Imprimimos el tablero
        break
      }
      console.clear();


      console.log(" - Player 2 -");
      this.print() // Imprimimos el tablero
      // Pedir Columna a jugar
      // Funcion par añadir la columna

      option = -1
      while (!this.insertInColumn(option, Ficha.Amarilla)) {
        //Pedir la 'option' columna
        console.log("Seleccione una columna: ");
        let valor: number = scanf('%d')
        option = valor - 1
      }


      if (this.checkWin(option, Ficha.Amarilla)) {
        console.clear();
        console.log(" Win Player 2");
        this.print() // Imprimimos el tablero
        break
      }
      console.clear();

      iterator++ // Incrementamos las fichas usadas
    }
  }

  //*****************************************
  
  /**
   * Funcion que comprueba si se puede insertar una ficha en una columna, en caso que si, lo inserta
   * @param col Columna a la que queremos insertar la ficha
   * @param ficha Ficha del jugador
   * @param mapa El tablero a la cual se quiere insertar
   * @returns True o False
   */
  insertInColumn(col: number, ficha: Ficha): boolean {
    if (col < 0 || col > 6) return false
    for (let i: number = 0; i < 6; i++) {
      if (this.mapa[col][i] === Ficha.Vacia) {
        this.mapa[col][i] = ficha
        return true
      }
    }
    return false
  }

  /**
   * Funcion que comprueba si ha ganado alguien
   * @param col Columna de la ultima ficha que se a colocado
   * @param ficha Ficha que se a colocado, usada para buscar si hay 4 de este tipo conectada
   * @returns True o False
   */
  checkWin(col: number, ficha: Ficha): boolean {
    // Me fume 4 porros para hacerlo, esto es practicamente imposible de entender....
    let row: number = 0
    for (let i: number = 6; i >= 0; i--) {
      if (this.mapa[col][i] === ficha) {
        row = i
        break
      }
    }
    // console.log("Columna: " + col + "| Fila: " + row);


    /**********************************/
    //Vertical
    let encontrado: boolean = false;
    let total: number = 0;

    for (let i: number = 0; i < 6; i++) {
      if (encontrado) {
        if (this.mapa[col][i] === ficha) {
          total++;
        }
        else {
          encontrado = false;
          total = 0;
        }
      }

      if (this.mapa[col][i] === ficha && !encontrado) {
        encontrado = true;
        total++;
      }

      if (total == 4) {
        return true;
      }
    }

    //Horizontal
    encontrado = false;
    total = 0;

    for (let i: number = 0; i < 7; i++) {
      if (encontrado) {
        if (this.mapa[i][row] == ficha) {
          total++;
        }
        else {
          encontrado = false;
          total = 0;
        }
      }
      if (this.mapa[i][row] == ficha && !encontrado) {
        encontrado = true;
        total++;
      }

      if (total == 4) {
        return true;
      }
    }

    //Diagonal  (/)
    //Obtener Coordenadas donde inicia la diagonal en base a fila - columna
    let nuevaFila: number = row;
    let nuevaColumna: number = col;
    encontrado = false;
    total = 0;

    while (nuevaFila != 0 && nuevaColumna != 0) {
      nuevaFila--;
      nuevaColumna--;

      if (nuevaFila == 0 || nuevaColumna == 0)
        break;
    }

    do {
      if (nuevaFila >= 6 || nuevaColumna >= 7)
        break;

      if (encontrado) {
        if (this.mapa[nuevaColumna][nuevaFila] === ficha) {
          total++;
        }
        else {
          encontrado = false;
          total = 0;
        }
      }
      if (this.mapa[nuevaColumna][nuevaFila] === ficha && !encontrado) {
        encontrado = true;
        total++;
      }

      if (total == 4) {
        return true;
      }

      nuevaFila++;
      nuevaColumna++;

    } while (nuevaFila < 6);


    //Diagonal  (\)
    //Obtener Coordenadas donde inicia la diagonal en base a fila - columna
    nuevaFila = row;
    nuevaColumna = col;
    encontrado = false;
    total = 0;

    while (nuevaFila != 0 && nuevaColumna != 0) {
      nuevaFila--;
      nuevaColumna++;

      if (nuevaFila == 0 || nuevaColumna == 0)
        break;
    }

    do {

      if (nuevaFila >= 6 || nuevaColumna < 0)
        break;

      if (encontrado) {
        if (this.mapa[nuevaColumna][nuevaFila] === ficha) {
          total++;
        }
        else {
          encontrado = false;
          total = 0;
        }
      }
      if (this.mapa[nuevaColumna][nuevaFila] === ficha && !encontrado) {
        encontrado = true;
        total++;
      }

      if (total == 4) {
        return true;
      }

      nuevaFila++;
      nuevaColumna--;

    } while (nuevaFila < 6);

    return false
  }

  /**
   * Funcion que permite mostrar el estado del tablero
   */
  print(): void {
    for (let i: number = 5; i >= 0; i--) {
      let fila: string = ""
      for (let j: number = 0; j < 7; j++) {
        switch (this.mapa[j][i]) {
          case Ficha.Vacia:
            fila += "- "
            break;
          case Ficha.Roja:
            fila += "X "
            break;
          case Ficha.Amarilla:
            fila += "O "
            break;

          default:
            break;
        }
      }
      console.log(fila);
    }
  }
}