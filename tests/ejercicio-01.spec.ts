import 'mocha';
import { expect } from 'chai';
import { Pokemon } from '../src/ejercicio-01/pokemon';
import { Combate } from '../src/ejercicio-01/combate';

describe('Combate Pokemon', () => {
  it("Combate entre Torchic y Bulbasur gana Torchic", () => {
    let pkm1 = new Pokemon("Torchic", 5, 2, "fuego", 10, 5, 8, 21);
    let pkm2 = new Pokemon("Bulbasur", 5, 2, "hierba", 4, 20, 5, 70);
    let Duelo = new Combate(pkm1, pkm2);
    expect(Duelo.start()).to.eql("El ganador es: Torchic");
  });
});