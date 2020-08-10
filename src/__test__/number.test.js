// import {Null, Undefined, True, False} from '__test__/typeData'

const True = () => true
const Null = () => null
const Undefined = () => undefined
const False = () => false


describe('prueba de nulos', () => {
    test('nulos ', () => {
        expect(Null()).toBeNull()
    });
});

describe('prueba de verdades', () => {
    test('Verdadera', () => {
        expect(True()).toBeTruthy()
    });
});

describe('prueba de falsos', () => {
    test('falsos', () => {
        expect(False()).toBeFalsy()
    });
});

describe('prueba de indefinidos', () => {
    test('Indefinidos', () => {
        expect(Undefined()).toBeUndefined()
    });
});