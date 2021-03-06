AFRAME.registerComponent("openbook", {
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
    el.setAttribute(
      "animation__mouseenter",
      "property: scale; to: 0.0015 0.0015 0.0015; dur: 200; dir:alternate; startEvents: mouseenter"
    );
    el.setAttribute(
      "animation__mouseleave",
      "property: scale; to: 0.001 0.001 0.001; dur: 200; startEvents: mouseleave"
    );

    // Default visibility to true, update to false object is discovered
    el.setAttribute("visible", false);
    el.addEventListener("click", function () {
      var cbEl = document.querySelector("[closedbook]");
      cbEl.setAttribute("visible", !cbEl.getAttribute("visible"));
      el.setAttribute("visible", !el.getAttribute("visible"));
    });
    // Default visibility to false, update to true object is discovered

    this.el.addEventListener("click", function () {
      document
        .querySelector("#book-popup-container")
        .setAttribute(
          "visible",
          !document
            .querySelector("#book-popup-container")
            .getAttribute("visible")
        );
    });
  },
});
