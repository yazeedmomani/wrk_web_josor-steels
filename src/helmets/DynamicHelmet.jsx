import { useContext } from "react";
import { Helmet } from "react-helmet-async";

import ContentContext from "../contexts/content-context";
import LangContext from "../contexts/lang-context";

function DynamicHelmet(props) {
  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);

  return (
    <Helmet>
      <title>
        {contentContext[langContext.lang].helmet[`${props.page}Title`]}
      </title>
    </Helmet>
  );
}

export default DynamicHelmet;
