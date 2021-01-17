AFRAME.registerComponent('my_keyboard_controller', {
    init: function(){
        // console.log("init here!!")
        // console.log(this.el)
      this.el.addEventListener('superkeyboardinput', function(event){
        // alert(detail.value); // the text
        if (event.detail.value === "26843") { 
            // console.log(playerEl)
            var playerEl = document.querySelector('[camera]');
            var textOut = document.querySelector('#colored-text');
            textOut.setAttribute("text", "value: Congratulation! You've been vaccinated and can attend HTN!");
            textOut.setAttribute("text", "width: 6");
            textOut.setAttribute("animation", "to: blue");
            playerEl.setAttribute("look-controls","enabled:false");
            playerEl.setAttribute("wasd-controls","enabled:false");
            playerEl.setAttribute("position", { x: 0, y: 1.5, z: 0 });
            playerEl.setAttribute("rotation", { x: 0, y: 0, z: 0 });
        }
        // console.log(event.detail.value)
    });
    }
  });

// I guess sandbox for users at the end lol