AFRAME.registerComponent("closedbook", {
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
      "property: scale; to: 0.3 0.3 0.3; dur: 200; dir:alternate; startEvents: mouseenter"
    );
    el.setAttribute(
      "animation__mouseleave",
      "property: scale; to: 0.25 0.25 0.25; dur: 200; startEvents: mouseleave"
    );

    // Default visibility to true, update to false object is discovered
    el.setAttribute("visible", true);
    el.addEventListener("click", function () {
      var obEl = document.querySelector("[openbook]");
      obEl.setAttribute("visible", true);
      el.setAttribute("visible", false);
      console.log("MASK OFF! MASK OFF!");
    });

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
