AFRAME.registerComponent('mask', {
    schema: {
        jsonData: {
            parse: JSON.parse,
            stringify: JSON.stringify
        }
    },
    multiple: true,
    /**
     * Initial creation and setting of the mesh.
     */
    init: function () {
        var data = this.data.jsonData;
        var el = this.el;
        var dy = data.rotateY;
        var dx = data.rotateX;
        var dz = data.rotateZ;
        el.setAttribute('scale', {"x": data.scaleX, "y": data.scaleY, "z": data.scaleZ});
        el.setAttribute('position', {"x": data.x, "y": data.y, "z": data.z});
        el.setAttribute('rotation', {"x": data.rotateX, "y": data.rotateY, "z": data.rotateZ});
        el.setAttribute('static-body', 'shape: auto');
        el.setAttribute('animation__mouseenter', "property: scale; to: 0.016 0.03 0.016; dur: 100; dir:alternate; startEvents: mouseenter");
        el.setAttribute('animation__mouseleave', "property: scale; to: 0.015 0.015 0.015; dur: 200; dir:alternate; startEvents: mouseleave");
        el.addEventListener('click', function () {
            console.log("NICE. COVER YOUR NOSE. ITS PROTECTION, NOT FASHION.");
            var characterEl = document.querySelectorAll('[character]');
            console.log(characterEl);
            characterEl.forEach(function (characterEl) {
                characterEl.classList.add("link");
            });
            el.setAttribute("visible", false);
        })
    }
});

