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

        // // Create geometry.
        // this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);

        // // Create material.
        // this.material = new THREE.MeshStandardMaterial({color: data.color});
        
        // // Create mesh.
        // this.mesh = new THREE.Mesh(this.geometry, this.material);
        
        el.object3D.position.set(data.x, data.y, data.z)
        el.object3D.scale.set(0.00045, 0.00045, 0.00045);
        // el.setAttribute('static-body', 'shape: auto');
        // Set mesh on entity.
        // el.setObject3D('mesh', this.mesh);
        
    }
});

