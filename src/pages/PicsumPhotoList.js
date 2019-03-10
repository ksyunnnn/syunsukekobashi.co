import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DefaultLayout from '../components/layout';
import SEO from '../components/seo';

import FloatableHeader from '../components/molecules/FloatableHeader';
import Template from '../components/templates/PicsumPhotoList';
import SelectablePhoto from '../components/organisms/SelectablePhoto';

const Header = styled(FloatableHeader)`
    line-height: 64px;
    text-transform: uppercase;
`;

const Layout = styled(DefaultLayout)`
    font-family: 'ABeeZee', sans-serif;
    line-height: 1.15;
`;

export default (props) => {
  const [list, setList] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  const fetchData = async () => {
    const result = await axios(
      'https://picsum.photos/list',
    );
    setList(result.data);
    setPhotos(result.data.slice(0, 100));
  };

  const isSlected = id => selectedPhotos.find(photo => (photo.id === id));

  const toggleSelectedPhoto = (id) => {
    if (isSlected(id)) {
      const newState = selectedPhotos.filter(v => v.id !== id);
      setSelectedPhotos([...newState]);
      return;
    }
    const newState = selectedPhotos;
    newState.push({ id });
    setSelectedPhotos([...newState]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <SEO title="PicsumPhotoList" />
      <Template
        header={<Header>Picsum photo list</Header>}
        sideLeft={photos.map(v => (
          <SelectablePhoto
            onClick={() => toggleSelectedPhoto(v.id)}
            key={v.id}
            src={`https://picsum.photos/160/?image=${v.id}`}
            isSlected={isSlected(v.id)}
          />
        ))}
        sideRight={(
          <div>
            {selectedPhotos.map(v => <img src={`https://picsum.photos/160/?image=${v.id}`} alt={v.id} />)}
          </div>
)}
      />
    </Layout>
  );
};
