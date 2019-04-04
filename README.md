[![Netlify Status](https://api.netlify.com/api/v1/badges/8010a9a4-4d50-4292-b52a-e8cbc8a1ba9c/deploy-status)](https://app.netlify.com/sites/aircall-bbelhadi/deploys)

# Improvements

## Live

Run Live [Demo](https://aircall-bbelhadi.netlify.com) Deploy app with Netlify

##Tests

Add "units tests" for reducers and actions

```
yarn run tests
```

## Quality Code

Add and apply Eslint and Prettier

# [aircall.io](https://aircall.io) - Frontend technical test

This test is a part of our hiring process at Aircall for [the Frontend Developer position](https://jobs.lever.co/aircall/c0fdd41e-a2a1-408d-ad08-890153518587). It should take you between 3 and 6 hours depending on your experience.

**Feel free to apply! Drop us a line with your LinkedIn/GitHub/Twitter at jobs@aircall.io**

## Summary

The goal of this test is to make you code a small ReactJS app. We have prepared a skeleton app for you, but please change whatever you want (CSS files, HTML structure, JS structure...).

The app will have two different components:

- **Activity Feed** - simple list of calls
- **Activity Detail** - detail of a call

Show us what you can do in 6 hours top :) Don't spend too much time on designing your app, our design team will hate it anyway.

**Bonus:** the final user should be able to archive a call. The call will no longer be displayed on the Activity Feed. Please code that only if you have extra time.

To give you an idea, here what our app looks like:

![app](https://user-images.githubusercontent.com/630714/29357034-763d7216-8276-11e7-8bcb-e77d9645dfcc.png)

## Installation

We're using [yarn](https://yarnpkg.com) here:

```
yarn install
yarn start
```

## API documentation

### Routes

Here is the API address: https://aircall-job.herokuapp.com.

As you can see, it's hosted on a free Heroku server, which means that the first time you will fetch the API, it will take few seconds to answer.

- **GET** - https://aircall-job.herokuapp.com/activities: get calls to display in the Activity Feed
- **GET** - https://aircall-job.herokuapp.com/activities/:id: retrieve a specific call details
- **POST** - https://aircall-job.herokuapp.com/activities/:id: update a call. The only field updatable is `is_archived (bool)`. You'll need to send a JSON in the request body:

```
{
  is_archived: true
}
```

- **GET** - https://aircall-job.herokuapp.com/reset: Reset all calls to initial state (usefull if you archived all calls).

### Call object

- **id** - unique ID of call
- **created_at** - creation date
- **direction** - `inbound` or `outbound` call
- **from** - caller's number
- **to** - callee's number
- **via** - Aircall number used for the call
- **duration** - duration of a call (in seconds)
- **is_archived** - call is archived or not
- **call_type** - can be a `missed`, `answered` or `voicemail` call.

## Submission

Fork this repository and send us a pull request. We'll review it and get back to you in order to talk about your code!

Contact us at jobs@aircall.io if you need more details.
