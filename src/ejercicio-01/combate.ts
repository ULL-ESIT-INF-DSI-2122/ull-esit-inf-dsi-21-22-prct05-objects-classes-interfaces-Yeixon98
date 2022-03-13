import { Pokemon } from './pokemon';

/**
 * Clase que nos permite representar un combate pokemon
 */
export class Combate {
  /**
   * Constructor de clase
   * @param pkm1 Pokemon | Pokemon 1
   * @param pkm2 Pokemon | Pokemon 2
   */
  constructor(public pkm1: Pokemon, public pkm2: Pokemon) {
  }
  /**
   * Da comienzo al combate
   */
  start(): string | void {
    let daño1: number = this.efficiency(this.pkm1.type, this.pkm2.type, (50 * (this.pkm1.atk / this.pkm2.def)));
    let daño2: number = this.efficiency(this.pkm2.type, this.pkm1.type, (50 * (this.pkm2.atk / this.pkm1.def)));

    while (this.pkm1.hp > 0 && this.pkm2.hp > 0) {
      // El Pokemon 1 ataca al Pokemon 2
      console.log(this.pkm1.name + " ataca a " + this.pkm2.name);
      this.pkm2.hp -= daño1;
      if (this.pkm2.hp > 0)
        console.log(this.pkm2.name + " tiene " + this.pkm2.hp + " de vida.");
      else {
        console.log(this.pkm2.name + " se devilito.")
        console.log("El ganador es: " + this.pkm1.name);

        return "El ganador es: " + this.pkm1.name
      }

      // El Pokemon 2 ataca al Pokemon 1
      if (this.pkm2.hp > 0) {
        console.log(this.pkm2.name + " ataca a " + this.pkm1.name);
        this.pkm1.hp -= daño2;
        if (this.pkm1.hp > 0)
          console.log(this.pkm1.name + " tiene " + this.pkm1.hp + " de vida.");
        else {
          console.log(this.pkm1.name + " se devilito.")
          console.log("El ganador es: " + this.pkm2.name);

          return "El ganador es: " + this.pkm2.name
        }
      }
    }
  }

  /**
   * Calcula lo eficaz que es el daño de un Pokemon sobre otro
   * @param typeA String | Tipo del Atacante
   * @param typeD String | Tipo del Defensor
   * @param daño Number | Daño base del Atacante
   * @returns El nuevo daño
   */
  efficiency(typeA: string, typeD: string, daño: number): number {
    //Se viene lo feo
    if (typeA === "fuego") {
      if (typeD === "fuego" || typeD === "electrico")
        return daño;
      if (typeD === "agua")
        return 0.5 * daño;
      if (typeD === "hierba")
        return 2 * daño;
    }
    else if (typeA === "agua") {
      if (typeD === "agua")
        return daño;
      if (typeD === "hierba" || typeD === "electrico")
        return 0.5 * daño;
      if (typeD === "fuego")
        return 2 * daño;
    }
    else if (typeA === "hierba") {
      if (typeD === "hierba" || typeD === "electrico")
        return daño;
      if (typeD === "fuego")
        return 0.5 * daño;
      if (typeD === "agua")
        return 2 * daño;
    }
    else if (typeA === "electrico") {
      if (typeD === "electrcio" || typeD === "hierba" || typeD === "fuego")
        return daño;
      if (typeD === "agua")
        return 2 * daño;
    }
    return daño
  }
}