import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import SelectablePhoto from '../SelectablePhoto';

const Wrapper = styled.div`
    padding: 0 16px;
    padding-top: calc( 64px + 120px);
`;

class PicsumPhotoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
}

export default () => {
  const [photos, setPhotos] = useState([{ id: 0 }, { id: 10 }]);
  const fetchData = async () => {
    const result = await axios(
      'https://picsum.photos/list',
    );

    setPhotos(result.data);
  };
  const selectPhoto = (id) => {
    const newState = photos;
    newState.map((v, i) => {
      if (v.id === id) {
        newState[i].isSelect = !photos[i].isSelect;
      }
    });
    setPhotos(newState);
  };

  // useEffect(() => {
  //     // fetchData();
  //     setPhotos([{id: 0},{id: 10}])
  //     console.log(photos);
  // }, [])

  useEffect(() => {
    console.log(photos);
  });


  return (
    <Wrapper>
      {photos.map(v => (
        <SelectablePhoto
          onClick={() => selectPhoto(v.id)}
          key={v.id}
          url={`https://picsum.photos/458/354/?image=${v.id}`}
          {...v}
        />
      ))}
    </Wrapper>
  );
};
