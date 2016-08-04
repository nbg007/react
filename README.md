# react
This is an application that provides a User Interface to view art work based on certain parameters in the data.
This is built using the following stack:
    ⋅⋅* React
    ⋅⋅* Redux: To maintain the state  
    ⋅⋅* Immutable: To make sure data is not mutated directly
    ⋅⋅* webpack: To package all the dependencies
    ⋅⋅* babel: To convert es6 to es5
    ⋅⋅* Nodejs with Hapi: Server 

### Learning process
I originally started with a basic react, hapi, webpack, babel stack. But then when I started to read best practices, ran into Redux. Using Redux the components can become truly stateless: they would now just take an input and simply return an output. Redux maintains the whole state of the app, and the only way to modify the state would be with actions, which change the state using reducers.
    
## Demo
   Now lets crank up the engine and check out the demo
   Enter the following command in the directory where package.json lives
   ```
   npm start
   ```
   After the server starts, hit the url 
   ```
   http://localhost:3000
   ```
   
## Running Tests
   
   To run the tests:
   Enter the following command in the directory where package.json lives
      ```
      npm test
      ```