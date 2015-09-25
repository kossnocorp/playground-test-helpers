# playground-test-helpers

DOM playground test helpers.

## Installation

```
npm install playground-test-helpers --save-dev
```

## Example

Use with [Mocha](http://mochajs.org) or [Jasmine](http://jasmine.github.io):

``` js
var PlaygroundTestHelpers = require('playground-test-helpers')
var React = require('react')
var Button = require('.')

describe('Button', function() {
  // Get clean <div id='playground'></div> before each test
  PlaygroundTestHelpers.prepareFilter()

  it('renders button', function() {
    var playground = PlaygroundTestHelpers.get()
    React.render(React.createElement(Button), playground)
    assert(playground.querySelector('button'))
  })
})
```

## License

MIT

