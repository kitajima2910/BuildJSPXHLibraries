// jshBackground(selector);
// EX 1: background-color, color, opacity
jshBackground("div", "green").Color("#fff").Opacity(.3);

// EX 2: background-image
// jshBackground("body").Image("./../../assets/imgs/JavaScriptCSSBackground.png");

// jshColor(selector);
// EX 1: colors
// jshColor(".h1-0", "DodgerBlue").BackgroundColor("#ff6347");
// jshColor(".h1-1", "#fc9").BackgroundColor("rgb(255, 99, 71)");
// jshColor(".h1-2", "rgb(60, 179, 113)").BackgroundColor("hsl(9, 100%, 64%)");
// jshColor(".h1-3", "red").BackgroundColor("hsla(9, 100%, 64%, 0.5)");
// jshColor(".h1-4", "hsl(0, 40%, 50%)").BackgroundColor("rgba(255, 99, 71, 0.5)");

// jshBorder(selector);
// EX 3: border-top, border-right, border-bottom, border-left
// jshBorder("h1", "top").Width("1px").Dotted().Color("red");
// jshBorder("h1", "right").Width("2px").Groove().Color("green");
// jshBorder("h1", "left").Width("3px").Ridge().Color("blue");
// jshBorder("h1", "bottom").Width("4px").Inset().Color("yellow");

// EX 2: border-style customize
// jshBorder("h1")
//   .Width("5px")
//   .Style("dotted solid")
//   .Color("red green blue yellow");

// EX 1: border-width, border-style, border-color
// jshBorder("h1").Width("5px").Dotted().Color("red green blue yellow");
