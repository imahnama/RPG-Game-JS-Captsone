import ChestModel from '../src/gameManager/ChestModel';

describe('ChestModel', () => {
  const chestModel = new ChestModel(200, 300, 'gold', 123);

  it('expect to generate a random id', () => {
    expect(/^123-/.test(chestModel.id)).toBe(true);
  });

  it('expect x cordinate to be 200', () => {
    expect(chestModel.x).toBe(200);
  });

  it('expect x cordinate not to be 300', () => {
    expect(chestModel.x).not.toBe(300);
  });

  it('expect y cordinate to be 300', () => {
    expect(chestModel.y).toBe(300);
  });

  it('expect y cordinate not to be 500', () => {
    expect(chestModel.y).not.toBe(500);
  });

  it('expect spawnerId to be 123', () => {
    expect(chestModel.spawnerId).toBe(123);
  });
});
