import React, { useState, useRef } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import axios from 'axios';
import Dropzone from 'react-dropzone';
import emailjs from '@emailjs/browser';

function AddFile() {

  const form = useRef()
  const [file, setFile] = useState(null); // state for storing actual image
  const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage
  const [state, setState] = useState({
    title: '',
    description: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  // const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
  
  const dropRef = useRef(); // React ref for managing the hover state of droppable area

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);

  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    emailjs.sendForm('service_4rn8tt9', 'template_aa27ccy', form.current, 'HNN8S6PkLLM-2KP45')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    event.target.reset()

    try {
      const { title, description} = state;
      if (title.trim() !== '' && description.trim() !== '') {
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('title', title);
          formData.append('description', description);
    
          setErrorMsg('');
          await axios.post(`http://localhost:5000/upload`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(res => {
            if (res.data.success === true) {
              alert('File Uploaded Successfully');
              window.location.href = '/file';
            } else {
              alert('File Not Uploaded. ' + res.data.message);
            }
          });

        } else {
          setErrorMsg('Please select a file to add.');
        }
      } else {
        setErrorMsg('Please enter all the field values.');
      }
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };

 
  return (
    <React.Fragment>
      <div className="body pt-4">
        <h1 className='text-center pb-5'>Submit new file</h1>
        <div className="container d-flex  justify-content-center ">
          <div className="card">
            <div className="card-body">
              <Form ref={form} className="search-form d-flex flex-column" onSubmit={handleOnSubmit}>
                {errorMsg && <p className="errorMsg">{errorMsg}</p>}
                <Row>
                  <Col>
                    <Form.Group controlId="title" className="m-1">
                      <Form.Control
                        type="text"
                        name="title"
                        value={state.title || ''}
                        placeholder="Enter title"
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                <Col>
                  <Form.Group controlId="description">
                    <Form.Control
                      type="text"
                      name="description"
                      value={state.description || ''}
                      placeholder="Enter description"
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                  <Col>
                    <input type="email" placeholder="Email" name='reply_to' required/>
                  </Col>
                </Row>
                <div className="upload-section my-2">
                  <Dropzone onDrop={onDrop}>
                    {({ getRootProps, getInputProps }) => (
                      <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
                        <input {...getInputProps()} />
                        <p>Drag and drop a file OR click here to select a file</p>
                        {file && (
                          <div>
                            <strong>Selected file:</strong> {file.name}
                          </div>
                        )}
                      </div>
                    )}
                  </Dropzone>

                </div>
                <Button variant="primary" type="submit" className="m-1">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AddFile;