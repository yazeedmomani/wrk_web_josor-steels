import { Helmet } from "react-helmet-async";

import useContent from "../hooks/use-content/use-content";

function DynamicHelmet(props) {
  const [content] = useContent();
  const title = content.helmet[`${props.page}Title`];

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default DynamicHelmet;
