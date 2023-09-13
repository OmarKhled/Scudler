import { createContext } from "react";
import { ServerStyleSheet } from "styled-components";

export default createContext<{
  styles: React.ReactNode[];
  renderMode: "head" | "body" | "all";
}>({ styles: [], renderMode: "all" });
