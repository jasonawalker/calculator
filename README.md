[![Build Status](https://travis-ci.org/varughese/calculator.svg?branch=master)](https://travis-ci.org/varughese/calculator)

# How to Unit Test

## Example Code
```javascript
// calc.js
function add(a,b) {
  return a + b;
}
```
## Example Test
```javascript
// test/calc.spec.js
describe('Calc:', function() {
  it('Add', function() {
    expect(add(1,4)).toBe(5);
  });
});
```

## Karma
The above test was written in [Jasmine](http://jasmine.github.io/2.4/introduction.html). It is simple to use. `describe` blocks are like headings, and individual tests go under the `it` blocks. Each test is done by `expect()` and `toBe()`.

To install karma, run `npm install -g karma` and `npm install karma --save-dev`. (`-g` installs karma globally so you can run the command, and `--save-dev` tells it to install it under developer dependencies)

Run `karma init`. This will auto generate the `karma.conf.js` file, which is like a settings file for karma. In here, you specify the files that will be imported. The files array will look like this. 
```javascript
files: [
  'calc.js',
  'test/*.spec.js'
]
```
The `calc.js` files needs to be added first because it is required by the test. The `*.spec.js` tells karma import every file in the test folder that ends with `.spec.js`. So the `*` is like a wildcard. (The proper name for this is called globbing)

Run `karma start` to run the tests. The other options in `karma.conf.js` are self explanatory. `PhantomJS` is a headless browser that runs the tests. Headless just means it will not open up a window, it runs through the command line. You can switch this to Chrome, but then you must install `npm install karma-chrome-launcher`. 

## Travis CI
The build passing badge is from Travis Continous Integration. It is a simple and straight forward concept. [TravisCI](https://travis-ci.org/) is a site that will detect whenever you push up to your branch. Then, it will auto run `karma start` and notify you whether or not the build is passing. The badge is just a image that is provided by the site. Sign up for an account and follow the process. In your `package.json` folder, make sure you have a `test` script under `scripts`. This is what TravisCI will run. 
