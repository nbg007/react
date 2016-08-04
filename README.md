# react
This is an application that provides a User Interface to view art work based on certain parameters in the data.
This is built using the following stack:
* React
* Redux: To maintain the state  
* Immutable: To make sure data is not mutated directly
* webpack: To package all the dependencies
* babel: To convert es6 to es5
* Nodejs with Hapi: Server 

### Learning process
I originally started with a basic react, hapi, webpack, babel stack. But then when I started to read best practices, ran into Redux. Using Redux the components can become truly stateless: they would now just take an input and simply return an output. Redux maintains the whole state of the app, and the only way to modify the state would be with actions, which change the state using reducers.
    
## Demo
   Now lets crank up the engine and check out the demo
   Enter the following command in the directory where package.json lives.
   ```
   npm start
   ```
   After the server starts, hit this url 
   ```
   http://localhost:3000
   ```
   
## Running Tests  
   To run the tests:
   Enter the following command in the directory where package.json lives
   ```
   npm test      
   ```
   
## Application Structure

* __package.json__
    - All the dependent node modules are specified here
    
* __webpack.config.js__
    * Configuration that tells webpack about entry point, output directories, loaders to compile/transpile/pre-process etc.

* __server__
    * All the code related to the web server with routes to index.html and 'api/movies' lives here
    
* __app__
    * The entire application logic lives here and split into the following modules.
        * actions
            * Used to notify that a component is requesting a change to the state. Actions like expand image, collapse image etc are performed here.
        * reducers
            * Uses the above actions, clones the state, applies the action and returns the new state.   
        * containers
            * Used to keep the components independent of the state. We connect the container to a component, and redux generates the code to connect actions and provide data to the components.
        * components
            * Purely presentational. Has the markup that goes into the dom. (although I didn't get enough time to convert all of them to containers)
        * selectors
            * Used to memoize/cache the data we need in different structures.
        * localization
            * To localize/internationalize. Currently the locale is set to english by default.
        * static
            * This has all the styles where main.less is the entry point specified to webpack
        * main.js
            Entry point for the application
        
* __public__
    * Files served to the client like index.html, bundled javascript and some fonts. Although I could clean up this a bit.