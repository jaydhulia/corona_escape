AFRAME.registerComponent('sanitizer', {
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
        // el.setAttribute('animation__mouseenter', "property: scale; to: 0.055 0.055 0.055; dur: 200; dir:alternate; startEvents: mouseenter");
        // el.setAttribute('animation__mouseleave', "property: scale; to: 0.05 0.05 0.05; dur: 200; startEvents: mouseleave");
        // el.setAttribute('animation__rotation', `property: rotation; to: ${dx} ${-270} ${dz}; dur:10; startEvents: click`);
        // el.setAttribute('animation__rotationcomplete', `property: rotation; to: ${dx} ${90} ${dz}; dur:500; dir:reverse; startEvents: animationcomplete__rotation`);
        el.setAttribute('animation__mousedown', "property: scale; to: 0.05 0.045 0.05; dur: 100; dir:alternate; startEvents: mousedown");
        el.setAttribute('animation__mouseup', "property: scale; to: 0.05 0.05 0.05; dur: 200; dir:alternate; startEvents: mouseup");
        el.addEventListener('mouseenter', function () {
            console.log("OHH YEAH PRESS DATTT");
            const obj = el.getObject3D('mesh');
            // Go over the submeshes and modify materials we want.
            obj.traverse(node => {
                if (node.name.indexOf('Node') !== -1) {
                    node.material.color.set('#AAA');
                }
            });
            // el.setAttribute('position', {"x": data.x, "y": data.y+200, "z": data.z});
            // el.setAttribute('property', "scale; to: 0.055 0.05 0.055; dur: 200; dir:alternate; startEvents: mouseenter");
          });
        el.addEventListener('mouseleave', function () {
            console.log("RUB YO HANDS NOW");
            const obj = el.getObject3D('mesh');
            obj.traverse(node => {
                if (node.name.indexOf('Node') !== -1) {
                    node.material.color.set("#777");
                }
            });
        // el.setAttribute('property', "scale; to: 0.055 0.055 0.055; dur: 200; dir:alternate; startEvents: mouseenter");
        });
    }
});

