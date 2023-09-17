type hslColor = `hsl(${number}, ${number}%, ${number}%)`;
interface types {
  [key: string]:
    | hslColor
    | {
        "50"?: hslColor;
        "100"?: hslColor;
        "150"?: hslColor;
        "200"?: hslColor;
        "250"?: hslColor;
        "300"?: hslColor;
        "350"?: hslColor;
        default: hslColor;
        "400"?: hslColor;
        "450"?: hslColor;
        "500"?: hslColor;
        "550"?: hslColor;
        "600"?: hslColor;
        "650"?: hslColor;
        "700"?: hslColor;
      };
}

const COLORS = {
  royalBlue: {
    "10": "hsl(234, 76%, 95%)",
    "50": "hsl(234, 76%, 85%)",
    "100": "hsl(234, 76%, 80%)",
    "150": "hsl(234, 76%, 75%)",
    "200": "hsl(234, 76%, 70%)",
    "250": "hsl(234, 76%, 65%)",
    "300": "hsl(234, 76%, 60%)",
    "350": "hsl(234, 76%, 55%)",
    default: "hsl(234, 76%, 54%)",
    "400": "hsl(234, 76%, 45%)",
    "450": "hsl(234, 76%, 40%)",
    "500": "hsl(234, 76%, 35%)",
    "550": "hsl(234, 76%, 30%)",
    "600": "hsl(234, 76%, 25%)",
    "650": "hsl(234, 76%, 20%)",
    "700": "hsl(234, 76%, 15%)",
  },
  danger: {
    "10": "hsl(0, 76%, 95%)",
    "25": "hsl(0, 76%, 93%)",
    "50": "hsl(0, 76%, 85%)",
    "100": "hsl(0, 76%, 80%)",
    "150": "hsl(0, 76%, 75%)",
    "200": "hsl(0, 76%, 70%)",
    "250": "hsl(0, 76%, 65%)",
    "300": "hsl(0, 76%, 60%)",
    "350": "hsl(0, 76%, 55%)",
    default: "hsl(0, 76%, 54%)",
    "400": "hsl(0, 76%, 45%)",
    "450": "hsl(0, 76%, 40%)",
    "500": "hsl(0, 76%, 35%)",
    "550": "hsl(0, 76%, 30%)",
    "600": "hsl(0, 76%, 25%)",
    "650": "hsl(0, 76%, 20%)",
    "700": "hsl(0, 76%, 15%)",
  },
  mintCream: "hsl(180, 100%, 98%)",
  borderColor: "hsl(0, 0%, 0%)",
  // borderColor: "hsl(225, 100%, 20%)",
};

export const LIGHT_THEME_COLORS: { [key: string]: any } = {
  primary: COLORS.royalBlue,
  error: COLORS.danger,
  background: "#fff",
  textColor: "#000",
};

export default COLORS;
