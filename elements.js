// require helpers.js


Elements = {};


Elements.Free = function () {
  
  this.g = null;
  this.name = "free";
  this.type = "unitary";
  this.rotation = 0;

  this.rotate = function () {
    console.log("Element " + this.name + " is not rotable!");
  };

  this.draw = function () {};

  this.amplitudes = [smIdentityFull];  // copy?

}


Elements.CornerCube = function () {

  this.g = null;
  this.name = "corner_cube";
  this.type = "unitary";
  this.rotation = 0;

  this.rotate = function () {
    console.log("Element " + this.name + " is not rotable!");
  };

  this.draw = function () {};

  var amplitudesDirection = {
    '>': [{to: '<', re: 1, im: 0}],
    '^': [{to: 'v', re: 1, im: 0}],
    '<': [{to: '>', re: 1, im: 0}],
    'v': [{to: '^', re: 1, im: 0}],
  };

  this.amplitudes = [transitionTensor(amplitudesDirection, smIdentityPolarization)];  // check if it is that simple
  // to some extent convention, but either this or mirror needs to be difficult

}


// magical thin mirror that is easy for implementation (no decoherence!)
Elements.ThinMirror = function () {

  // some var self = this, to get no problems in functions? 

  this.g = null;
  this.name = "mirror";
  this.type = "unitary";
  this.rotation = 0;  // 0: - 1: / 2: | 3: \

  this.rotate = function () {
    this.rotation = (this.rotation + 1) % 4;
  };

  this.draw = function () {};

  var amplitudesDirection = {
    '>': [{to: '<', re: 1, im: 0}],
    '^': [{to: 'v', re: 1, im: 0}],
    '<': [{to: '>', re: 1, im: 0}],
    'v': [{to: '^', re: 1, im: 0}],
  };

  this.amplitudes = transitionTensor(amplitudesDirection, smIdentityPolarization);  // check if it is that simple

}


// Elements.HalfWavePlate
// Elements.QuarterWavePlate
// Elements.PolarizingBeamSplitter