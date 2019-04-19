import React, { useState } from 'react';
import ReactMapGl, { NavigationControl } from 'react-map-gl';
import { withStyles } from '@material-ui/core/styles';
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import DeleteIcon from "@material-ui/icons/DeleteTwoTone";

const INITIAL_VIEWPORT = {
  latitude: 37.7577,
  longitude: -122.4376,
  zoom: 13
};
const Map = ({ classes }) => {
  const [viewport, setViewPort] = useState(INITIAL_VIEWPORT);
  return (
    <div className={classes.root}>
      <ReactMapGl
        width="100vw"
        height="calc(100vh - 64px)"
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoibGl6ZWxsZWhvIiwiYSI6ImNqdW45Z29vNDAxeTY0MW8xMndxZjIxaXIifQ.7tvVo1xIAyzu19scei0AvA"
        onViewportChange={newViewport => setViewPort(newViewport)}
        {...viewport}
      >
        {/* Nav Control */}
        <div className={classes.navigationControl}>
          <NavigationControl
            onViewportChange={newViewport => setViewPort(newViewport)}
          />
        </div>
      </ReactMapGl>
    </div>
  );
};

const styles = {
  root: {
    display: 'flex'
  },
  rootMobile: {
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  navigationControl: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: '1em'
  },
  deleteIcon: {
    color: 'red'
  },
  popupImage: {
    padding: '0.4em',
    height: 200,
    width: 200,
    objectFit: 'cover'
  },
  popupTab: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
};

export default withStyles(styles)(Map);
