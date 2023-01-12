import DynamicHelmet from "../../helmets/DynamicHelmet";
import PaginatedItems from "../../components/pagination/PaginatedItems";

function ProjectCategory() {
  return (
    <>
      <DynamicHelmet page="hangers" />
      <PaginatedItems itemsPerPage={5}>
        {[
          1,
          2,
          3,
          <h1>Hello</h1>,
          5,
          6,
          <h2>test</h2>,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
        ]}
      </PaginatedItems>
    </>
  );
}

export default ProjectCategory;
