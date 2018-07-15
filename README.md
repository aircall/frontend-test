# [aircall.io](https://aircall.io) - Frontend technical test

## Implementation using the following notable components:

1. Webpack (duh)
2. React
3. Redux
4. Redux Sagas
5. Jest for testing
6. Eslint
7. Prettier

## Run this
- Clone the repository to your machine and `cd` inside the folder.
- Run `yarn` to install dependencies. When it's done,
- Run `yarn start` and have fun. :sunglasses:

## ToDo List
- [x] Implement Redux and React-Router v4
- [x] Separate component for Activities
- [x] Separate component for Activity Details
- [x] Redux-saga for endpoint calls
- [x] Test reducers, utils and actions with Jest
- [ ] Test sagas
- [ ] Test view components (to discuss)
- [ ] Use SASS instead of plain CSS
- [ ] Better utility for endpoint calls. Now using straight-up fetch.
- [ ] Migrate the stack to TypeScript
- [ ] Other ideas…

## Issues I ran into

Most notably, when trying to update the activity's 'is_archived' (with for example : `{ is_archived: true }`), the server responds that `is_archived should be a boolean`. It is, though… :confused: I'm probably missing something obvious and need to investigate a bit further.
