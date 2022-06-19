// Init variables
const init = {
  important: "!important",

  backgroundColor: "initial",

  // Start: CSS Borders
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "#000",

  borderTopWidth: "1px",
  borderTopStyle: "solid",
  borderTopColor: "#000",

  borderRightWidth: "1px",
  borderRightStyle: "solid",
  borderRightColor: "#000",

  borderLeftWidth: "1px",
  borderLeftStyle: "solid",
  borderLeftColor: "#000",

  borderBottomWidth: "1px",
  borderBottomStyle: "solid",
  borderBottomColor: "#000",

  borderNone: "none",
  // End: CSS Borders
};

// Start 20220-06-18: Main: CSS Borders
// Start 20220-06-18: Main: CSS Borders
// Start 20220-06-18: Main: CSS Borders
const jshBorder = (selector = "", direction = "") => {
  // Element Global
  const element = document.querySelector(selector);

  // Call border default core
  borderDefaultCore(element, direction);

  const self = {
    Width: (numberWidth = "1px") => {
      borderWidthCore(
        element,
        {
          key: "Width",
          numberWidth: numberWidth,
        },
        direction
      );
      return borderStyle(element, direction);
    },
    Medium: () => {
      borderWidthCore(
        element,
        {
          key: "Medium",
          width: "medium",
        },
        direction
      );
      return borderStyle(element, direction);
    },
    Thick: () => {
      borderWidthCore(
        element,
        {
          key: "Thick",
          width: "thick",
        },
        direction
      );
      return borderStyle(element, direction);
    },
  };

  return self;
};

// Support border default core
const borderDefaultCore = (element, direction) => {
  switch (direction.toLowerCase()) {
    case "top":
      element.style.borderTopWidth = init.borderTopWidth;
      element.style.borderTopStyle = init.borderTopStyle;
      element.style.borderTopColor = init.borderTopColor;
      break;
    case "right":
      element.style.borderRightWidth = init.borderTopWidth;
      element.style.borderRightStyle = init.borderTopStyle;
      element.style.borderRightColor = init.borderTopColor;
      break;
    case "left":
      element.style.borderLeftWidth = init.borderTopWidth;
      element.style.borderLeftStyle = init.borderTopStyle;
      element.style.borderLeftColor = init.borderTopColor;
      break;
    case "bottom":
      element.style.borderBottomWidth = init.borderTopWidth;
      element.style.borderBottomStyle = init.borderTopStyle;
      element.style.borderBottomColor = init.borderTopColor;
      break;
    case "":
      element.style.borderWidth = init.borderWidth;
      element.style.borderStyle = init.borderStyle;
      element.style.borderColor = init.borderColor;
      break;
  }
};

// Support border-style
const borderStyle = (element, direction) => {
  const self = {
    Style: (topRightBottomLeft) => {
      borderDirectionsCore(element, direction, topRightBottomLeft);
      return borderColor(element, direction);
    },
    Dotted: () => {
      borderDirectionsCore(element, direction, "dotted");
      return borderColor(element, direction);
    },
    Dashed: () => {
      borderDirectionsCore(element, direction, "dashed");
      return borderColor(element, direction);
    },
    Solid: () => {
      borderDirectionsCore(element, direction, "solid");
      return borderColor(element, direction);
    },
    Double: () => {
      borderDirectionsCore(element, direction, "double");
      return borderColor(element, direction);
    },
    Groove: () => {
      borderDirectionsCore(element, direction, "groove");
      return borderColor(element, direction);
    },
    Ridge: () => {
      borderDirectionsCore(element, direction, "ridge");
      return borderColor(element, direction);
    },
    Inset: () => {
      borderDirectionsCore(element, direction, "inset");
      return borderColor(element, direction);
    },
    Outset: () => {
      borderDirectionsCore(element, direction, "outset");
      return borderColor(element, direction);
    },
    None: () => {
      borderDirectionsCore(element, direction, "none");
      return borderColor(element, direction);
    },
    Hidden: () => {
      borderDirectionsCore(element, direction, "hidden");
      return borderColor(element, direction);
    },
  };
  return self;
};

// Support directions core
const borderDirectionsCore = (element, direction, style) => {
  switch (direction.toLowerCase()) {
    case "top":
      element.style.borderTopStyle = style;
      break;
    case "right":
      element.style.borderRightStyle = style;
      break;
    case "left":
      element.style.borderLeftStyle = style;
      break;
    case "bottom":
      element.style.borderBottomStyle = style;
      break;
    case "":
      element.style.borderStyle = style;
      break;
  }
};

// Support border-color
const borderColor = (element, direction) => {
  const self = {
    Color: (color = init.borderColor) => {
      borderColorCore(element, direction, color);
    },
  };
  return self;
};

// Support border-color core
const borderColorCore = (element, direction, color) => {
  switch (direction.toLowerCase()) {
    case "top":
      element.style.borderTopColor = color;
      break;
    case "right":
      element.style.borderRightColor = color;
      break;
    case "left":
      element.style.borderLeftColor = color;
      break;
    case "bottom":
      element.style.borderBottomColor = color;
      break;
    case "":
      element.style.borderColor = color;
      break;
  }
};

// Support border-width core
const borderWidthCore = (element, params, direction = "") => {
  switch (direction.toLowerCase()) {
    case "top":
      if (params.key === "Width") {
        const { numberWidth } = params;
        element.style.borderTopWidth = numberWidth;
      }
      if (params.key === "Medium") {
        const { width } = params;
        element.style.borderTopWidth = width;
      }
      if (params.key === "Thick") {
        const { width } = params;
        element.style.borderTopWidth = width;
      }
      break;
    case "right":
      if (params.key === "Width") {
        const { numberWidth } = params;
        element.style.borderRightWidth = numberWidth;
      }
      if (params.key === "Medium") {
        const { width } = params;
        element.style.borderRightWidth = width;
      }
      if (params.key === "Thick") {
        const { width } = params;
        element.style.borderRightWidth = width;
      }
      break;
    case "left":
      if (params.key === "Width") {
        const { numberWidth } = params;
        element.style.borderLeftWidth = numberWidth;
      }
      if (params.key === "Medium") {
        const { width } = params;
        element.style.borderLeftWidth = width;
      }
      if (params.key === "Thick") {
        const { width } = params;
        element.style.borderLeftWidth = width;
      }
      break;
    case "bottom":
      if (params.key === "Width") {
        const { numberWidth } = params;
        element.style.borderBottomWidth = numberWidth;
      }
      if (params.key === "Medium") {
        const { width } = params;
        element.style.borderBottomWidth = width;
      }
      if (params.key === "Thick") {
        const { width } = params;
        element.style.borderBottomWidth = width;
      }
      break;
    case "":
      if (params.key === "Width") {
        const { numberWidth } = params;
        element.style.borderWidth = numberWidth;
      }
      if (params.key === "Medium") {
        const { width } = params;
        element.style.borderWidth = width;
      }
      if (params.key === "Thick") {
        const { width } = params;
        element.style.borderWidth = width;
      }
      break;
  }
};
// End 20220-06-18: Main: CSS Borders
// End 20220-06-18: Main: CSS Borders
// End 20220-06-18: Main: CSS Borders
