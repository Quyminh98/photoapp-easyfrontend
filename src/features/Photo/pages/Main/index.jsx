import React from 'react';
import Banner from '../../../../components/Banner';
import Images from '../../../../constants/images';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import { useDispatch, useSelector } from'react-redux';
import {removePhoto} from '../../photoSlice';
import PhotoList from '../../components/PhotoList';

MainPage.propTypes = {};

function MainPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const photos = useSelector(state => state.photos);
  console.log('List of photo: ',photos);
  
  const handlePhotoEditClick = (photo) => {
    history.push(`/photos/${photo.id}`)
  }

  const handlePhotoRemoveClick = (photo) => {
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  }

  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add new photo</Link>
        </div>
        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;