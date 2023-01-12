function RenderedItems(props) {
  return (
    <>
      {props.currentItems &&
        props.currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

export default RenderedItems;
