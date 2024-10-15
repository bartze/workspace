const TransformadorString = require('../transformaciones');

describe('TransformadorString Class', () => {
  const transformador = new TransformadorString(
    'Mandalorian tiene aventuras epicas en la galaxia',
  );

  it('debería transformar el string a un array de caracteres', () => {
    expect(transformador.transformarAArray()).toEqual([
      'M',
      'a',
      'n',
      'd',
      'a',
      'l',
      'o',
      'r',
      'i',
      'a',
      'n',
      ' ',
      't',
      'i',
      'e',
      'n',
      'e',
      ' ',
      'a',
      'v',
      'e',
      'n',
      't',
      'u',
      'r',
      'a',
      's',
      ' ',
      'e',
      'p',
      'i',
      'c',
      'a',
      's',
      ' ',
      'e',
      'n',
      ' ',
      'l',
      'a',
      ' ',
      'g',
      'a',
      'l',
      'a',
      'x',
      'i',
      'a',
    ]);
  });

  it('debería ordenar los caracteres de manera aleatoria', () => {
    const randomOrder = transformador.ordenarAleatoriamente();
    expect(randomOrder).toHaveLength(48);
  });

  it('debería invertir el orden de los caracteres', () => {
    expect(transformador.invertirOrden()).toBe(
      'aixalag al ne sacipe sarutneva eneit nairoladnaM',
    );
  });

  it('debería quitar las vocales del string', () => {
    expect(transformador.quitarVocales()).toBe('Mndlrn tn vntrs pcs n l glx');
  });

  it('debería quitar las consonantes del string', () => {
    expect(transformador.quitarConsonantes()).toBe('aaoia iee aeua eia e a aaia');
  });

  it('debería transformar el string a un array de palabras', () => {
    expect(transformador.transformarAArrayDePalabras()).toEqual([
      'Mandalorian',
      'tiene',
      'aventuras',
      'epicas',
      'en',
      'la',
      'galaxia',
    ]);
  });

  it('debería invertir el orden de las palabras del string', () => {
    expect(transformador.invertirOrdenDePalabras()).toBe(
      'galaxia la en epicas aventuras tiene Mandalorian',
    );
  });
});
