// Init variables
const init = {
  important: "!important",

  backgroundColor: "initial",

  // CSS Borders
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "#000",

  borderLeftWidth: "1px",
  borderLeftStyle: "solid",
  borderLeftColor: "#000",

  borderNone: "none",
};

// Start 20220-06-18: Main: CSS Borders
const jshBorder = (selector = "", direction = "") => {
  // Element Global
  const element = document.querySelector(selector);

  // Call border core
  borderCore(element, direction);

  const self = {
    Width: (numberWidth = "1px") => {
      borderCore(
        element,
        {
          key: "Width",
          numberWidth: numberWidth,
          border_style: borderStyle(element, direction),
        },
        direction
      );
    },
    Medium: () => {
      borderCore(
        element,
        {
          key: "Medium",
          width: "medium",
          border_style: borderStyle(element, direction),
        },
        direction
      );
    },
    Thick: () => {
      borderCore(
        element,
        {
          key: "Thick",
          width: "thick",
          border_style: borderStyle(element, direction),
        },
        direction
      );
    },
  };

  return self;
};

// Support border-top, border-right, border-bottom, border-left
const borderDirection = (params) => {
  const { element, direction } = params;

  element.style.border = init.borderNone;

  if (direction.toLowerCase() === "left") {
    element.style.borderLeftWidth = init.borderLeftWidth;
    element.style.borderLeftStyle = init.borderLeftStyle;
    element.style.borderLeftColor = init.borderLeftColor;
  }
};

// Support border-style
const borderStyle = (element, direction) => {
  // Call func supports
  const border_color = borderColor(element);

  const self = {
    Style: (topRightBottomLeft) => {
      element.style.borderStyle = topRightBottomLeft;
      return border_color;
    },
    Dotted: () => {
      element.style.borderStyle = "dotted";
      return border_color;
    },
    Dashed: () => {
      element.style.borderStyle = "dashed";
      return border_color;
    },
    Solid: () => {
      element.style.borderStyle = "solid";
      return border_color;
    },
    Double: () => {
      element.style.borderStyle = "double";
      return border_color;
    },
    Groove: () => {
      element.style.borderStyle = "groove";
      return border_color;
    },
    Ridge: () => {
      element.style.borderStyle = "ridge";
      return border_color;
    },
    Inset: () => {
      element.style.borderStyle = "inset";
      return border_color;
    },
    Outset: () => {
      element.style.borderStyle = "outset";
      return border_color;
    },
    None: () => {
      element.style.borderStyle = "none";
      return border_color;
    },
    Hidden: () => {
      element.style.borderStyle = "hidden";
      return border_color;
    },
  };
  return self;
};

// Support border-color
const borderColor = (element) => {
  const self = {
    Color: (color = init.borderColor) => {
      element.style.borderColor = color;
    },
  };
  return self;
};

// Support border core
const borderCore = (element, params, direction = "") => {
  switch (direction.toLowerCase()) {
    case "top":
      break;
    case "right":
      break;
    case "left":
      break;
    case "bottom":
      break;
    case "":
      // Default
      element.style.borderWidth = init.borderWidth;
      element.style.borderStyle = init.borderStyle;
      element.style.borderColor = init.borderColor;

      // border-width
      if (params.key === "Width") {
        const { numberWidth, border_style } = params;
        element.style.borderWidth = numberWidth;
        return border_style;
      }
      if (params.key === "Medium") {
        const { width, border_style } = params;
        element.style.borderWidth = width;
        return border_style;
      }
      if (params.key === "Thick") {
        const { width, border_style } = params;
        element.style.borderWidth = width;
        return border_style;
      }
      break;
  }
};
// End 20220-06-18: Main: CSS Borders
