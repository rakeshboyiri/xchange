import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MobileForm from '../categoryforms/MobileForm'; // Import the MobileForm component

const steps = ['Personal Details', 'Category Details', 'Confirm & Submit'];

const CategoryDetailsStepper = () => {
  const { id } = useParams(); // Get category ID from URL
  const [activeStep, setActiveStep] = useState(0);
  const [personalDetails, setPersonalDetails] = useState({});
  const [categoryDetails, setCategoryDetails] = useState({});
  const [images, setImages] = useState([]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setPersonalDetails({});
    setCategoryDetails({});
    setImages([]);
  };

  // Update personal details
  const handlePersonalDetailsChange = (e) => {
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Handle image uploads
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  // Render category-specific form based on `id`
  const renderCategoryForm = () => {
    switch (id) {
      case '1': // Mobiles
        return <MobileForm categoryDetails={categoryDetails} setCategoryDetails={setCategoryDetails} />;
      default:
        return <p>No form available for this category.</p>;
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 800, margin: 'auto', p: 4 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you're ready to submit your product!
          </Typography>
          <Box>
            <Typography variant="h6">Personal Details:</Typography>
            <pre>{JSON.stringify(personalDetails, null, 2)}</pre>
            <Typography variant="h6">Category Details:</Typography>
            <pre>{JSON.stringify(categoryDetails, null, 2)}</pre>
            <Typography variant="h6">Uploaded Images:</Typography>
            <ul>
              {images.map((image, index) => (
                <li key={index}>{image.name}</li>
              ))}
            </ul>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 2 }}>
            <Button onClick={handleReset}>Reset</Button>
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep === 0 && (
            <Box>
              <Typography variant="h6">Step 1: Personal Details</Typography>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded mb-2"
                onChange={handlePersonalDetailsChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded mb-2"
                onChange={handlePersonalDetailsChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="w-full p-2 border border-gray-300 rounded mb-2"
                onChange={handlePersonalDetailsChange}
              />
            </Box>
          )}

          {activeStep === 1 && (
            <Box>
              <Typography variant="h6">Step 2: Category Details</Typography>
              {renderCategoryForm()}
              <input
                type="file"
                multiple
                onChange={handleImageChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </Box>
          )}

          {activeStep === 2 && (
            <Box>
              <Typography variant="h6">Step 3: Confirm & Submit</Typography>
              <Typography>Name: {personalDetails.name}</Typography>
              <Typography>Email: {personalDetails.email}</Typography>
              <Typography>Phone: {personalDetails.phone}</Typography>
              <Typography>Category Details: {JSON.stringify(categoryDetails, null, 2)}</Typography>
            </Box>
          )}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 2 }}>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default CategoryDetailsStepper;
