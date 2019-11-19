const firebase = require('firebase/app');
require('firebase/firestore');

describe('test', () => {
  it('doesnt leak memory', async () => {
    const app = firebase.initializeApp({
      // fill this in
    });

    await app.firestore().doc('users/test-user').set({ name: 'Test User' });
    await app.delete();
  })
})