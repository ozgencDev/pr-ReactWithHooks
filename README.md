# React CRUD Practice
## Package Manager
- npm

## Packages
- [Parcel](https://www.npmjs.com/package/parcel)
- [React](https://www.npmjs.com/package/react)
- [React-Dom](https://www.npmjs.com/package/react-dom)
- [Prettier](https://www.npmjs.com/package/prettier)
## Source Tree
- [css](./src/css)
- [html](./src/html/)
    - [index](./src/html/index.html/) 
- [js](./src/js/)
    - [App](./src/js/App.js)  
    - [CrudOp](./src/js/CrudOp.js)
    - [FetchedDataSection](./src/js/FetchedDataSection.js)
## Vcs
- Git
--- 
## Presentation
My purpose in this practice was to perform simple Crud operations with React Hooks. In addition, I also made data fetch using hooks. I did not use css for focus purposes. I designed the components in different js files in accordance with the best practice. I set up a simple source tree. I divided the relevant parts of the components into parts using intuitive variable names, as well as comments. As a web application bundler, I used **parcel** with rapidly increasing usage and zero configuration. In the CrudOp file, I applied conditional rendering for my update process according to the specific item in the list. I used async-await to increase readability, in the part of the FetchedDataSection file where the data was pulled. With destructring, I made only the necessary imports.
I experimentally made a cli that opened the project, but I didn't add it to the project. I used node and bashscript for the cli
## Summary
  - Conditional rendering
  - State management with hooks
  - Data fetching with hooks
  - CRUD Operations
  - Experimental Cli Work
  - Predominantly Functional Programming

## How Do You Start
1. clone the project wherever you want
2. using the terminal go to the location of the file and type the following instructions in the terminal in order
3. npm install .
4. npm run dev
5. In the section that says "Server running at http://localhost:1234", ctrl + click on the part that starts with http
6. Finish