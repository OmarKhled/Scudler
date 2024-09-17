const createColorVariables = (COLORS: {
  [key: string]: string | Object;
}): string => {
  let colorVariables: string = "";
  for (const property in COLORS) {
    if (COLORS[property] instanceof Object) {
      for (const shade in COLORS[property] as Object) {
        if (shade === "default") {
          colorVariables += `  --${property}: ${
            Object(COLORS[property])[shade]
          };`;
        } else {
          colorVariables += `  --${property}-${shade}: ${
            Object(COLORS[property])[shade]
          };`;
        }
        colorVariables += "\n";
      }
    } else {
      colorVariables += `  --${property}: ${COLORS[property]};`;
    }
    colorVariables += "\n";
  }
  return colorVariables;
};

export default createColorVariables;
