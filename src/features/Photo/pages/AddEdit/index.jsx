import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Banner from '../../../../components/Banner';
import PhotoForm from '../../components/PhotoForm';
import { addPhoto, updatePhoto } from '../../photoSlice';
import './styles.scss';

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const {photoId} = useParams();
  const isAddMode = !photoId;

  const editedPhoto = useSelector(state => state.photos.find(x => x.id === +photoId));

  const initialValues = isAddMode 
    ? {
      title: '',
      categoryId: null,
      photo: '',
    } : editedPhoto;

  const handleSubmit = (values) => {
    if(isAddMode) {
      const action = addPhoto(values);
      dispatch(action);
      history.push('/photos');
    } else {
      const action = updatePhoto(values);
      dispatch(action);
      history.push('/photos')
    }
  };


  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm 
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit} 
        />
      </div>
    </div>
  );
}

export default AddEditPage;