import 'mocha';
import { expect } from 'chai';
import { Tablero, Ficha } from '../src/ejercicio-02/tablero';

describe('Conecta 4', () => {
  let Mesa: Tablero = new Tablero()
  it("Insertar Fichas en columna valida", () => {
    expect(Mesa.insertInColumn(2,Ficha.Amarilla)).to.eql(true);
  });

  it("Insertar Fichas en columna valida (No)", () => {
    // Para llenar la columna 2 con Fichas
    //Aprovecho para hacer que ganen las Amrillas
    Mesa.insertInColumn(2,Ficha.Roja)
    Mesa.insertInColumn(2,Ficha.Amarilla)
    Mesa.insertInColumn(2,Ficha.Amarilla)
    Mesa.insertInColumn(2,Ficha.Amarilla)
    Mesa.insertInColumn(2,Ficha.Amarilla)

    expect(Mesa.insertInColumn(2,Ficha.Roja)).to.eql(false);
  });

  it("Comprobar si gano las Fichas Amarilla", () => {
    expect(Mesa.checkWin(2,Ficha.Amarilla)).to.eql(true);
  });

  it("Comprobar si gano las Fichas Roja (No)", () => {
    expect(Mesa.checkWin(2,Ficha.Roja)).to.eql(false);
  });
});