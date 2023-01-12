import { useParams } from "react-router-dom";

import DynamicHelmet from "../../helmets/DynamicHelmet";

function ProjectCategory() {
  const urlParam = useParams();

  return (
    <>
      <DynamicHelmet page="hangers" />
      <h1>{`${urlParam.category[0].toUpperCase()}${urlParam.category.slice(
        1
      )}`}</h1>
    </>
  );
}

export default ProjectCategory;
