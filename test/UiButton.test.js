import Phaser from 'phaser'
import UiButton from '../src/objects/UiButton';

test('UIButton is a subclass of Phaser.GameObjects.Container', () => {
  expect(Button).toBeSubclassOf(Phaser.GameObjects.Container);
});
