//const Player = require('../deck');  This is connected to the module export in my deck.js
//const assert = require('chai').assert; only way I could make my test run at first was in vs code using Node.js spefically mocha test.js 
const assert = chai.assert

describe('Player', function() {
  describe('#addPoints()', function() {
    it('should add points to the player\'s score', function() {
      const player = new Player('Test Player');
      player.addPoints(5);
      assert.equal(player.score, 5);
    });
  });
});
