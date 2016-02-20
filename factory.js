"use strict";

class Factory {
  constructor() {
    this.factories = {}
  }

  define(name, object, definition) {
    this.factories[name] = {
      object: object,
      definition: definition
    }
  }

  get(name) {
    return this.factories[name]
  }

  build(name, traits, options) {
    var definition = this.get(name).definition;
    var object = this.get(name).object
    return definition.build(new object(), traits, options)
  }

}

let FactoryBro = new Factory()

class FactoryDefinition {
  static build(self, traits=[], options={}) {
    traits.forEach( (trait) => {
      self[trait].call(self, options)
    })
  }
}

export { FactoryBro, FactoryDefinition }

// module.exports = FactoryBro;