# [SupportKit Javascript SDK](supportkit.io)

## Usage

### Script Tag

Add the following code in between the ```<head>...</head>``` tags on your page.

```html
<script src="https://cdn.supportkit.io/supportkit.min.js"></script>
```

Initialize the plugin using this code snippet

```html
<script>
    SupportKit.init({appToken: 'your_app_token'});
</script>
```

### In Node.js and Browserify

Install from npm

```
npm install supportkit-js
```

Require and init

```javascript
var SupportKit = require('supportkit-js');

SupportKit.init({appToken: 'your_app_token'});
```

### Bower

Install from bower

```
bower install supportkit-js
```

Include in JS using preferred method and init

```javascript
SupportKit.init({appToken: 'your_app_token'});
```

## API

#### init(options)
Initializes the SupportKit widget in the web page using the specified options

```javascript
SupportKit.init({
    appToken: 'your_app_token',
    givenName: 'Cool',
    surname: 'Person',
    email: 'their_email@whatever.com',
    // Additional properties
    properties: {
        'anything': 'whatever_you_want'    
    } 
});
```

## How to contribute

### Clone the git repo
```git clone https://github.com/supportkit/supportkit-js```

### Install Node.js and run the following

```npm install```
```npm install -g grunt```

### Essential Grunt Tasks

* ```grunt build``` dumps a plain and a minified file from all files in the folder ```src``` to dist/supportkit.min.js
* ```grunt clean``` removes all files in the folder ```dist```
* ```grunt test``` runs karma tests
