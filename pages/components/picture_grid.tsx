import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import * as tileImages from '../../public/images/tileImages';

const PictureGrid = () => {
  return (
    <GridList>
      {Object.values(tileImages).map((img: any) => (
        <GridListTile key={img}>
          <img src={img} />
        </GridListTile>
      ))}
    </GridList>
  );
}

export default PictureGrid;