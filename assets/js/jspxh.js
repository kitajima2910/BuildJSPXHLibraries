/**
 * Ref: https://www.w3schools.com/
 */
const jsh = (selector) => {
  // Element global
  const elementGlobal = document.querySelector(selector);

  // Init
  const init = {
    important: "!important",

    color: "#000",
    backgroundColor: "initial",

    // Borders
    borderWidth: "1px",
    borderStyle: "solid",
  };

  // Start 2022-06-16: Support border-width
  // const borderStyle = {
  //   dotted: (elementGlobal.style.borderStyle = `dotted ${init.important}`),
  // };
  // End 2022-06-16: Support border-width

  // Self func
  const self = {
    element: document.querySelector(selector),

    // Start 2022-06-16: CSS Borders
    Border: {
      // Default:
      //      border-width: 1px
      //      border-style: solid
      element: (elementGlobal.style.borderWidth = init.borderWidth),
      element: (elementGlobal.style.borderStyle = init.borderStyle),

      // border-width
      Width: (
        number = init.borderWidth,
        style = init.borderStyle,
        color = init.color
      ) => {
        self.element.style.borderWidth = number;

        if (style !== init.borderStyle) {
          self.element.style.borderStyle = style;
        }

        if (color !== init.borderStyle) {
          self.element.style.borderColor = color;
        }
      },
    },
    // End 2022-06-16: CSS Borders

    // Start 2022-06-16: CSS Colors
    BackgroundColor: (color = init.backgroundColor) => {
      self.element.style.backgroundColor = color;
      return self;
    },

    Color: (color = init.color) => {
      self.element.style.color = color;
      return self;
    },
    // End 2022-06-16: CSS Colors
  };

  return self;
};
