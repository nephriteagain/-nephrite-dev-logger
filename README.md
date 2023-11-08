# nephrite-dev-logger


## Description

Nephrite Dev Logger is a utility library designed to simplify logging in JavaScript applications based on the development environment. It allows you to log messages in a convenient and controlled manner, tailored for both development and production environments.


## Getting Started


### Installation
```
npm i nephrite-dev-logger
```

### Usage

To get started, import the library into your project:

```javascript
import DevLogger from 'nephrite-dev-logger';

const isDevelopment = import.meta.env.DEV;
const dev = new DevLogger(isDevelopment);

```

### Example

```javascript

// Log message for development
dev.log('development only log')
// dev mode --> development only log

// Log a message for development only
dev.log("This message appears in development", "This message appears in production");
// dev mode --> This message appears in development
// prod mode --> This message appears in production


// Log a message for development and production
dev.log("Both logs shown", "Both logs shown", true);
// dev mode --> Both logs shown Both logs shown
// prod mode --> Both logs shown Both logs shown

// Log a warning for development only
dev.warn("This is a development warning", "This is a production warning");
// dev mode --> This is a development warning
// prod mode --> This is a production warning

// Log an error for development only
dev.error("This is a development error", "This is a production error");
// dev mode --> This is a development error
// prod mode --> This is a production error


```
* Please note that setting a value to undefined for the prodLog parameter will skip logging the message in the production environment.


## Authors

* https://github.com/nephriteagain

## Version History

* 1.2.0
    * Added a test file
* 1.1.0
    * Add a d.ts file    
* 1.0.0
    * Initial Release

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
