import ContentContext from "./content-context";

import englishContent from "../contents/english-content";
import arabicContent from "../contents/arabic-content";

function ContentProvider(props) {
  const content = {
    en: englishContent,
    ar: arabicContent,
  };

  return (
    <ContentContext.Provider value={content}>
      {props.children}
    </ContentContext.Provider>
  );
}

export default ContentProvider;
