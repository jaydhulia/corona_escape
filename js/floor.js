AFRAME.registerComponent('floor', {
  multiple: true,
    init: function(){
      console.log("floor");
    }
  });
  
  AFRAME.registerComponent('camera-floor', {
    dependencies: ['floor'],
    init: function(){
      var playerEl = this.el;
      console.log("camera");
      playerEl.setAttribute('look-controls', 'pointerLockEnabled: true');
      playerEl.setAttribute('wasd-controls', '');
      playerEl.setAttribute('kinematic-body', '');
  }
});
