import DynamicHelmet from "../../helmets/DynamicHelmet";
import PaginatedItems from "../../components/pagination/PaginatedItems";

function ProjectCategory() {
  return (
    <>
      <DynamicHelmet page="hangers" />
      <PaginatedItems
        itemsPerPage={4}
        items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
      />
    </>
  );
}

export default ProjectCategory;
