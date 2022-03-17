/**
 * Nos permite representar un numero en Hexadecimal
 */
export class Hexa{
  constructor(private num: number){}

  /**
   * @returns Devuelve el numero en base 10
   */
  valueOf(): number{
    return this.num
  }

  /**
   * @returns Devuelve el numero en hexadeciaml
   */
  toString(): string{
    return "0x" + this.num.toString(16)
  }

  /**
   * Suma dos hexadecimales
   * @param other Hexadecimal
   * @returns Suma como un hexadecimal nuevo
   */
  add(other: Hexa): Hexa{
    return new Hexa(this.num + other.valueOf())
  }

  /**
   * Resta dos hexadecimales
   * @param other Hexadecimal
   * @returns Resta como un hexadecimal nuevo
   */
  sub(other: Hexa): Hexa{
    return new Hexa(this.num - other.valueOf())
  }

  /**
   * Pasa de hexadecimal a base 10
   * @param str Un hexadecimal como string
   * @returns Numero en base 10
   */
  parse(str: string): number {
    return parseInt(str, 16)
  }
}