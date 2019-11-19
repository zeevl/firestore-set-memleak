shows a memory leak with firestore `set`.

To use, edit `test.test.js` and fill in `initalizeApp` with your firebase credentials.

Then:
```
yarn install
npx jest --detect-leaks
```

Expected: Success
Result: leaks detected
