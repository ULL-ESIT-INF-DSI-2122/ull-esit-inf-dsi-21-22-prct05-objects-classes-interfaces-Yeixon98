import 'mocha';
import { expect } from 'chai';
import { Hexa } from '../src/ejercicio-mod1/ejercicio-mod1';

describe('Hexadecimal', () => {
  let hex1: Hexa = new Hexa(8)
  let hex2: Hexa = new Hexa(4)
  
  it("valueOf()", () => {
    expect(hex1.valueOf()).to.eql(8);
  });

  it("toString()", () => {
    expect(hex1.toString()).to.eql("0x8");
  });

  it("parse()", () => {
    expect(hex1.parse("0xc")).to.eql(12);
  });

  it("add + valueOf()", () => {
    expect(hex1.add(hex2).valueOf()).to.eql(12);
  });

  it("sub + valueOf()", () => {
    expect(hex1.sub(hex2).valueOf()).to.eql(4);
  });

  it("add + toString()", () => {
    expect(hex1.add(hex2).toString()).to.eql("0xc");
  });

  it("sub + toString()", () => {
    expect(hex1.sub(hex2).toString()).to.eql("0x4");
  });
});