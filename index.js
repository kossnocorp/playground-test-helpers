var PlaygroundTestHelpers = {
  /**
   * Returns the playground element if found.
   * @returns {HTMLDivElement}
   */
  get: function() {
    return document.getElementById('playground')
  },

  /**
   * Creates the playground element and inserts it into the DOM.
   * @returns {HTMLDivElement}
   */
  create: function() {
    var playground = document.createElement('div')
    playground.id = 'playground'
    document.body.appendChild(playground)
    return playground
  },

  /**
   * Clears the playground element or creates it if it's not created yet.
   *
   * @example
   * it('test', function() {
   *   playground.prepare()
   *   // ...
   * })
   */
  prepare: function() {
    var playground = PlaygroundTestHelpers.get()

    if (playground) {
      playground.innerHTML = ''
    } else {
      PlaygroundTestHelpers.create()
    }
  },

  /**
   * Provides clear playground before every example.
   *
   * @example
   * describe('Test', function() {
   *   playground.prepareFilter()
   *   // ...
   * })
   */
  prepareFilter: function() {
    window.beforeEach(PlaygroundTestHelpers.prepare)
  }
}

module.exports = PlaygroundTestHelpers

