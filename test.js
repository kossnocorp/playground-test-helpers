var assert = require('power-assert')
var PlaygroundTestHelpers = require('.')

describe('PlaygroundTestHelpers', function() {
  afterEach(function() {
    var playground = document.getElementById('playground')
    if (playground) {
      document.body.removeChild(playground)
    }
  })

  describe('.get', function() {
    context('when playground div is exists in DOM', function() {
      beforeEach(function() {
        var playground = document.createElement('div')
        playground.id = 'playground'
        document.body.appendChild(playground)
      })

      it('returns HTMLDivElement with id ', function() {
        var el = PlaygroundTestHelpers.get()
        assert(el instanceof window.HTMLDivElement)
      })
    })

    context('when playground div is not exists in DOM', function() {
      it('returns undefined', function() {
        var el = PlaygroundTestHelpers.get()
        assert(el === null)
      })
    })
  })

  describe('.create', function() {
    it('creates playground element in DOM', function() {
      PlaygroundTestHelpers.create()
      var playground = document.getElementById('playground')
      assert(playground)
    })
  })

  describe('.prepare', function() {
    context('when playground is exists', function() {
      beforeEach(function() {
        var playground = document.createElement('div')
        playground.id = 'playground'
        playground.innerHTML = 'test'
        document.body.appendChild(playground)
      })

      it('clears it', function() {
        PlaygroundTestHelpers.prepare()
        var playground = document.getElementById('playground')
        assert(playground.innerHTML == '')
      })
    })

    context('when playground is not exists', function() {
      it('creates playground', function() {
        PlaygroundTestHelpers.prepare()
        var playground = document.getElementById('playground')
        assert(playground)
      })
    })
  })

  describe('.prepareFilter', function() {
    beforeEach(function() {
      window.beforeEach = sinon.spy()
    })

    afterEach(function() {
      delete window.beforeEach
    })

    it('pass .prepare to window.beforeEach', function() {
      PlaygroundTestHelpers.prepareFilter()
      assert(window.beforeEach.calledWith(PlaygroundTestHelpers.prepare))
    })
  })
})

