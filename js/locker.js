AFRAME.registerComponent('locker', {
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
        
        el.setAttribute('scale', {"x": data.scaleX, "y": data.scaleY, "z": data.scaleZ});
        el.setAttribute('position', {"x": data.x, "y": data.y, "z": data.z});
        el.setAttribute('rotation', {"x": data.rotateX, "y": data.rotateY, "z": data.rotateZ});
        // el.setAttribute('static-body', 'shape: auto');

    }
});

