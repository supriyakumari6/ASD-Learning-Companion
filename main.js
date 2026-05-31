// Phaser Hello World — ASD Learning Game

class HelloScene extends Phaser.Scene {
  constructor() {
    super({ key: 'HelloScene' });
  }

  create() {
    // Background color
    this.cameras.main.setBackgroundColor('#1a1a2e');

    // Title
    this.add.text(400, 250, 'ASD Learning Game', {
      fontSize: '36px',
      color: '#ffffff',
      fontFamily: 'Arial',
      fontStyle: 'bold'
    }).setOrigin(0.5);

    // Subtitle
    this.add.text(400, 320, 'Hello World! Phaser is working', {
      fontSize: '22px',
      color: '#4ade80',
      fontFamily: 'Arial'
    }).setOrigin(0.5);
  }
}

// Phaser Game Config
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 500,
  scene: HelloScene
};

new Phaser.Game(config);