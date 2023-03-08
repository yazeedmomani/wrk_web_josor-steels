import Content from "./";

import englishContent from "../../contents/english-content";
import arabicContent from "../../contents/arabic-content";

export default function Provider(props) {
  const content = {
    en: englishContent,
    ar: arabicContent,
  };

  return <Content.Provider value={content}>{props.children}</Content.Provider>;
}
