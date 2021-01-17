AFRAME.registerComponent('my_keyboard_controller', {
    init: function(){
        console.log("init here!!")
      this.el.addEventListener('superkeyboardinput', function(event){
        // alert(detail.value); // the text
        console.log(event.detail.value)
      });
      this.el.addEventListener('superkeyboarddismiss', function(event){
        // alert(detail.value); // the text
        console.log("dismissed")
      });
    }
  });