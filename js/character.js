AFRAME.registerComponent("character", {
  schema: {
    jsonData: {
      parse: JSON.parse,
      stringify: JSON.stringify,
    },
  },
  multiple: true,
  /**
   * Initial creation and setting of the mesh.
   */
  init: function () {
    var data = this.data.jsonData;
    var el = this.el;

    el.setAttribute("scale", {
      x: data.scaleX,
      y: data.scaleY,
      z: data.scaleZ,
    });
    el.setAttribute("position", { x: data.x, y: data.y, z: data.z });
    el.setAttribute("rotation", {
      x: data.rotateX,
      y: data.rotateY,
      z: data.rotateZ,
    });
    el.setAttribute("static-body", "shape: auto");

    this.el.addEventListener("click", function () {
      document
        .querySelector("#person-popup-container")
        .setAttribute(
          "visible",
          !document
            .querySelector("#person-popup-container")
            .getAttribute("visible")
        );
    });
  },
});
