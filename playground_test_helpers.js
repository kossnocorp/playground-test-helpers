var React = require('react');
/** @todo figure out why it doesn't work with required jQuery */
//var jQuery = require('jquery');

var PlaygroundTestHelpers = {
  /**
   * Returns the playground.
   * @returns {HTMLElement}
   */
  get: function() {
    return document.getElementById('playground');
  },

  /**
   * Clears the playground and create it if it's not created yet.
   *
   * @example
   * // Provide clean playground before every it.
   * beforeEach(playground.prepare);
   */
  prepare: function() {
    var playground = PlaygroundTestHelpers.get();

    if (!playground) {
      playground = document.createElement('div');
      playground.id = 'playground';
      document.body.appendChild(playground);
    }

    playground.innerHTML = '';
  },

  /**
   * Clears the playground in beforeEach filter.
   */
  prepareFilter: function() {
    beforeEach(this.prepare);
  },

  /**
   * Renders a passed React component to the playground.
   * @param {React component} component - component to be rendered
   * @returns {HTMLElement}
   *
   * @example
   * // Will render ProgressLine component in the playground
   * var progressLineEl = playgroun.render(<ProgressLine progress={42} />);
   */
  render: function(component) {
    var playground = PlaygroundTestHelpers.get();
    React.renderComponent(component, playground);

    var componentEl = playground.children[0];
    return componentEl;
  },

  /**
   * Renders a passed React component to the playground; acts like `render`
   * with only difference, `$render` returns jQuery object.
   *
   * @param {React component} component - component to be rendered
   * @returns {jQuery object}
   */
  $render: function(component) {
    return jQuery(this.render(component));
  }
};

module.exports = PlaygroundTestHelpers;

