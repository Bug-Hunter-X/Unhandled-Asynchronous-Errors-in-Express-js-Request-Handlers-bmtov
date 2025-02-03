# Unhandled Asynchronous Errors in Express.js

This repository demonstrates a common error in Express.js applications: unhandled errors from asynchronous operations within request handlers.  The `bug.js` file shows how an asynchronous operation's failure can go unnoticed without proper error handling, leading to silent failures.  The `bugSolution.js` file provides a robust solution using a centralized error handler.

## Setup

1. Clone this repository.
2. Run `npm install` to install the dependencies (express).
3. Run the application with `node bug.js` (or `node bugSolution.js` after implementing the solution).

## Bug Description

The bug lies in the lack of proper error handling for asynchronous functions within a request handler.  The `someAsyncOperation` function simulates an asynchronous operation that may fail.  The original implementation doesn't catch this error, resulting in no response to the client and a silent failure on the server side.

## Solution

The solution implements a robust, centralized error handler using `app.use()` to catch and manage errors that occur anywhere within the application's middleware stack.