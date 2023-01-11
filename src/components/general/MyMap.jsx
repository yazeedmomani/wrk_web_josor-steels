import { Map, Marker, ZoomControl } from "pigeon-maps";

import styles from "./MyMap.module.css";

function MyMap(props) {
  const coords = [32.11604367386156, 36.135051653208826];

  function google(x, y, z) {
    return `http://mt0.google.com/vt/lyrs=p&x=${x}&y=${y}&z=${z}`;
  }

  return (
    <div
      className={`${styles.container} ${!props.isLocked && styles.unlocked} ${
        props.styles
      }`}>
      <Map
        animate={true}
        provider={google}
        attribution={false}
        mouseEvents={props.isLocked === true ? false : true}
        touchEvents={props.isLocked === true ? false : true}
        defaultCenter={coords}
        defaultZoom={15}>
        <Marker
          width={48}
          color="var(--color-primary)"
          style={{ cursor: "default" }}
          anchor={coords}
        />
        {!props.isLocked && <ZoomControl />}
      </Map>
    </div>
  );
}

export default MyMap;
