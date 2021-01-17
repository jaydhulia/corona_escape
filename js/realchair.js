AFRAME.registerComponent('realchair', {
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
        el.setAttribute('static-body', 'shape: auto');
        el.setAttribute('animation__mouseenter', "property: scale; to: 0.00045 0.0005.0.00045; dur: 200; dir:alternate; startEvents: mouseenter");
        el.setAttribute('animation__mouseleave', "property: scale; to: 0.00045 0.00045 0.00045; dur: 200; startEvents: mouseleave");
        console.log(data);
        if(data.x === "1"){
            el.addEventListener('click', function () {
                console.log("SEND DATT");
                el.setAttribute('animation__mouseclickmove', "property: object3D.position.x; to: -3; dir: alternate; dur: 500;");
                el.setAttribute('animation__mouseclick', "property: rotation; to: 0 360 0; dur:10; startEvents: click");
                el.setAttribute('animation__mouseclickcomplete', "property: rotation; to: 0 0 0; dur:500; dir:reverse; startEvents: animationcomplete__mouseclick");
            });
        } else if(data.x === "2"){
            el.setAttribute('animation__mouseclick', "property: rotation; to: 0 360 0; dur:10; startEvents: click");
            el.setAttribute('animation__mouseclickcomplete', "property: rotation; to: 0 0 0; dur:500; dir:reverse; startEvents: animationcomplete__mouseclick");
            // el.addEventListener('click', function () {
            console.log("SPIN DATT");
                // el.setAttribute('animation__mouseclick', "property: object3D.position.x; to: -2; dir: alternate; dur: 500;");
            // });
        }
    }
});

