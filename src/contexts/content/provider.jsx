import Content from "./";

import enContent from "../../contents/english";
import arContent from "../../contents/arabic";

export default function Provider(props) {
  const content = {
    en: enContent,
    ar: arContent,
  };

  return <Content.Provider value={content}>{props.children}</Content.Provider>;
}
