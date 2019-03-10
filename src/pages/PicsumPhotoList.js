import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DefaultLayout from '../components/layout';
import SEO from '../components/seo';

import FloatableHeader from '../components/molecules/FloatableHeader';
import Template from '../components/templates/PicsumPhotoList';
import SelectablePhoto from '../components/organisms/SelectablePhoto';
import Photo from '../components/atoms/Photo';

const Header = styled(FloatableHeader)`
    line-height: 64px;
`;

const Layout = styled(DefaultLayout)`
    font-family: 'ABeeZee', sans-serif;
    line-height: 1.15;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,160px);
  grid-gap: 8px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  :hover {
    opacity: .8;
  }
`;

const More = styled(Button)`
  width: 160px;
  height: 160px;
  box-shadow: 0px 2px 2px rgba(0,0,0,.25);
  text-align: center;
  line-height: 160px;
`;

const Notification = styled.small`
  position: fixed;
  right: 80px;
  color: #9a9a9a;
  ${props => (props.isShow ? `
    display: inline;
    opacity: 1;
  ` : `
    transition-property: opacity; 
    transition-duration: 1s;
    opacity: 0;
    display: none;
  `)}
`;

export default (props) => {
  const [list, setList] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [amount, setAmount] = useState(100);
  const [notice, setNotice] = useState(false);

  const fetchData = async () => {
    const result = await axios(
      'https://picsum.photos/list',
    );
    setList(result.data);
    setPhotos(result.data.slice(0, amount));
  };

  const sleep = delay => new Promise((resolve) => {
    setTimeout(resolve, delay);
  });

  const noticeChange = async () => {
    await setNotice(true);
    await sleep(2000);
    setNotice(false);
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

  const copyClipbord = (text) => {
    const Area = window.document.createElement('textarea');
    Area.value = text;
    window.document.body.appendChild(Area);
    Area.select();

    window.document.execCommand('copy');
    Area.parentElement.removeChild(Area);

    noticeChange();
  };

  return (
    <Layout>
      <SEO title="PicsumPhotoList" />
      <Template
        header={(
          <Header>
            <span style={{ textTransform: 'uppercase' }}>Picsum photo list</span>
            <Notification isShow={notice}>URL has been copied to clipboard!</Notification>
          </Header>
)}
        sideLeft={(
          <List>
            {
            photos.map(v => (
              <SelectablePhoto
                onClick={() => toggleSelectedPhoto(v.id)}
                key={v.id}
                src={`https://picsum.photos/160/?image=${v.id}`}
                isSlected={isSlected(v.id)}
              />
            ))
          }
            <More
              onClick={() => {
                setPhotos(list.slice(0, amount + 50));
                setAmount(amount + 50);
              }}
            >
              <i className="fas fa-arrow-down" />
            </More>
          </List>
)}
        sideRight={(
          <List>
            {selectedPhotos.map(v => (
              <Button style={{ appearance: 'none' }} type="button" onClick={() => copyClipbord(`https://picsum.photos/160/?image=${v.id}`)}>
                <Photo src={`https://picsum.photos/160/?image=${v.id}`} alt={v.id} />
              </Button>
            ))}
          </List>
)}
      />
    </Layout>
  );
};
