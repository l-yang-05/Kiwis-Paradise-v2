# Kiwi's Paradise eCommerce V2

This is my third re-edition of my eCommerce website that is centered on selling plushies. This application has three pages (Home, Products, Contact Us) routed together. The home page contains a slider of images. The products page contains items that are pulled from a MYSQL database. On the products page, the user can filter through the items by type and price. The contact us page contains a form that will validate and take in responses from the user and send them back to the MYSQL database. Also on this page, at the bottom there is a testimonials section where it displays the comments that are located from the MYSQL database. This website was made by using React.js, CSS, Bootstrap, node, and express. This application has automated testing through using mocha and chai. The automated testing is running on a parallel server from the express server of the application.

## Getting Started

Clone or download this repo onto your local machine. Once you have done this, install the node packages. You can do this by running ```npm i``` on your command line tool.


## Running the app

After you have installed all of the dependencies that are needed for this project, you can open the project up through your command line tool. First be in the root of the directory and then run ```npm run start``` in your command line tool. This will start the server and the react app at the same time.


## Stopping the app

To stop running the server and the react app, you can hit ```command + z``` to close both.


## Tests

To run the tests for API endpoints run the command ```npm run test```.

## Built With

* [React](https://github.com/facebook/react) - The framework used
* [NodeJS](https://github.com/nodejs/node) - The development for server
* [Express & Express Router](https://github.com/expressjs/express) - Used to create endpoints
* [Morgan](https://github.com/expressjs/morgan) - Logging tool
* [Helmet](https://github.com/helmetjs/helmet) - Provided security
* [Mocha](https://github.com/mochajs/mocha) - Used for testing application
* [Chai](https://github.com/chaijs/chai) - Used for testing application
* [Concurrently](https://github.com/kimmobrunfeldt/concurrently) - Used to run servers at the same time

## Author

* [Lucy Yang](https://github.com/l-yang-05)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
