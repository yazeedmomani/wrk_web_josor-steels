function Arrow(props) {
  const leftTransform = "translate(538.393 7098.548) rotate(180)";
  const rightTransfrom = "translate(-530 -7083.678)";

  return (
    <svg
      className={props.iconStyles}
      xmlns="http://www.w3.org/2000/svg"
      width="8.393"
      height="14.87"
      viewBox="0 0 8.393 14.87">
      <path
        d="M531,7098.548a1,1,0,0,1-.707-1.707l5.691-5.695-5.7-5.766a1,1,0,1,1,1.423-1.405l6.393,6.472a1,1,0,0,1,0,1.41l-6.393,6.4A1,1,0,0,1,531,7098.548Z"
        transform={props.isLeft ? leftTransform : rightTransfrom}
        fill="#333"
      />
    </svg>
  );
}

export default Arrow;
