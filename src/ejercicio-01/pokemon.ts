/**
 * Clase que nos permite representar a un pokemon
 */
export class Pokemon {
  /**
   * Constructor de la clase Pokemon
   * @param name String | Nombre
   * @param weight Number | Peso
   * @param height Number | Altura
   * @param type String | Tipo
   * @param atk Number | Ataque
   * @param def Number | Defensa
   * @param spd Number | Velocidad
   * @param hp Number | Vida
   */
  constructor(public name: string, public weight: number, public height: number, public type: string,
    public atk: number, public def: number, public spd: number, public hp: number) {
  }
}