import React, { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MobileForm from "../categoryforms/MobileForm";
import ElectronicsForm from "../categoryforms/ElectronicsForm";
import ClothingForm from "../categoryforms/ClothingForm";
import HomeAppliancesForm from "../categoryforms/HomeAppliancesForm";
import EssentialsForm from "../categoryforms/EssentialsForm";
import FurnitureForm from "../categoryforms/FurnitureForm";
import HomeAndLivingForm from "../categoryforms/HomeAndLivingForm";
// import PropertiesForm from '../categoryforms/PropertiesForm';
import VehicleForm from "../categoryforms/VehicleForm";
import Header from "../../components/Header";

const steps = ["Personal Details", "Category Details"];


const CategoryDetailsStepper = () => {
  const { id } = useParams(); // Get the category id from the route
  const [activeStep, setActiveStep] = useState(0);

  // Form data state
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    address: "",
    street: "",
    city: "",
    state: "",
    postcode: "",
    country: "",
    email: "",
    phone: "",
  });

  const [mobileCategoryDetails, setMobileCategoryDetails] = useState({
    brand: "",
    adName: "",
    model: "",
    description: "",
    price: "",
    condition: "new",
    negotiable: "No",
    features: "",
  });

  const [electronicsCategoryDetails, setElectronicsCategoryDetails] = useState({
    category: "",
    brand: "",
    type: "",
    model: "",
    description: "",
    price: "",
    condition: "new",
    negotiable: "No",
    features: "",
    erating: "No",
  });

  const [vehicleCategoryDetails, setVehicleCategoryDetails] = useState({
    type: "",
    brand: "",
    adName: "",
    model: "",
    description: "",
    price: "",
    condition: "new",
    negotiable: "No",
    features: "",
    mof: "",
    mileage: "",
    FuelType: "",
    transmission: "",
    engine: "",
    color: "",
    Year: "",
  });

  const [categoryDetails, setCategoryDetails] = useState({
    brand: "",
    adName: "",
    model: "",
    description: "",
    price: "",
    condition: "new",
    negotiable: "No",
    features: "",
  });

  // Single state for images uploaded in both steps
  const [images, setImages] = useState([]);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  //const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleReset = () => {
    setActiveStep(0);
    setPersonalDetails({
      name: "",
      address: "",
      street: "",
      city: "",
      state: "",
      postcode: "",
      country: "",
      email: "",
      phone: "",
    });
    setCategoryDetails({
      brand: "",
      adName: "",
      model: "",
      description: "",
      price: "",
      condition: "new",
      negotiable: "No",
      features: "",
    });
    setMobileCategoryDetails({
      brand: "",
      adName: "",
      model: "",
      description: "",
      price: "",
      condition: "new",
      negotiable: "No",
      features: "",
    });
    setElectronicsCategoryDetails({
      brand: "",
      type: "",
      model: "",
      description: "",
      price: "",
      condition: "new",
      negotiable: "No",
      features: "",
      erating: "No",
    });

    setVehicleCategoryDetails({
      type: "",
      brand: "",
      adName: "",
      model: "",
      description: "",
      price: "",
      condition: "new",
      negotiable: "No",
      features: "",
      mof: "",
      mileage: "",
      FuelType: "",
      transmission: "",
      engine: "",
      color: "",
      Year: "",
    });

    setImages([]);
  };

  const handlePersonalDetailsChange = (e) => {
    setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
  };

  // const handleCategoryDetailsChange = (e) => {
  //   setCategoryDetails({ ...categoryDetails, [e.target.name]: e.target.value });
  // };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]); // Append new files to existing ones
  };

  // Render the form based on the category ID
  const renderCategoryForm = () => {
    if (id === "1") {
      return (
        <MobileForm
          mobileCategoryDetails={mobileCategoryDetails}
          setMobileCategoryDetails={setMobileCategoryDetails}
        />
      );
    } else if (id === "2") {
      return (
        <ElectronicsForm
          electronicsCategoryDetails={electronicsCategoryDetails}
          setElectronicsCategoryDetails={setElectronicsCategoryDetails}
        />
      );
    } else if (id === "3") {
      return (
        <VehicleForm
          vehicleCategoryDetails={vehicleCategoryDetails}
          setVehicleCategoryDetails={setVehicleCategoryDetails}
        />
      );
    } else if (id === "4") {
      return (
        <HomeAppliancesForm
          categoryDetails={categoryDetails}
          setCategoryDetails={setCategoryDetails}
        />
      );
    } else if (id === "5") {
      return (
        <EssentialsForm
          categoryDetails={categoryDetails}
          setCategoryDetails={setCategoryDetails}
        />
      );
    } else if (id === "6") {
      return (
        <FurnitureForm
          categoryDetails={categoryDetails}
          setCategoryDetails={setCategoryDetails}
        />
      );
    } else if (id === "7") {
      return (
        <HomeAndLivingForm
          categoryDetails={categoryDetails}
          setCategoryDetails={setCategoryDetails}
        />
      );
    } else if (id === "8") {
      return (
        <ClothingForm
          categoryDetails={categoryDetails}
          setCategoryDetails={setCategoryDetails}
        />
      );
    }
  };
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <Box sx={{ width: "100%", maxWidth: 800, margin: "auto", p: 4 ,mt: 16}}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length ? (
          <Box className="shadow-lg p-6 bg-white rounded-md mt-6">
            <Typography sx={{ mt: 2, mb: 1 }}>Review Your Details</Typography>

            <Box className="mb-4">
              <Typography variant="h6" className="font-bold">
                Personal Details:
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography>
                  <strong>Name:</strong> {personalDetails.name}
                </Typography>
                <Typography>
                  <strong>Address:</strong> {personalDetails.address}
                </Typography>
                <Typography>
                  <strong>Street:</strong> {personalDetails.street}
                </Typography>
                <Typography>
                  <strong>City:</strong> {personalDetails.city}
                </Typography>
                <Typography>
                  <strong>State:</strong> {personalDetails.state}
                </Typography>
                <Typography>
                  <strong>Postcode/Zip:</strong> {personalDetails.postcode}
                </Typography>
                <Typography>
                  <strong>Country:</strong> {personalDetails.country}
                </Typography>
                <Typography>
                  <strong>Email:</strong> {personalDetails.email}
                </Typography>
                <Typography>
                  <strong>Phone:</strong> {personalDetails.phone}
                </Typography>
              </Box>
            </Box>

            <Box className="mb-4">
              <Typography variant="h6" className="font-bold">
                Category Details:
              </Typography>
              <Box sx={{ mb: 2 }}>
                {id === "1" && (
                  <>
                    <Typography>
                      <strong>Brand:</strong> {mobileCategoryDetails.brand}
                    </Typography>
                    <Typography>
                      <strong>Ad Name:</strong> {mobileCategoryDetails.adName}
                    </Typography>
                    <Typography>
                      <strong>Model:</strong> {mobileCategoryDetails.model}
                    </Typography>
                    <Typography>
                      <strong>Description:</strong>{" "}
                      {mobileCategoryDetails.description}
                    </Typography>
                    <Typography>
                      <strong>Price:</strong> {mobileCategoryDetails.price}
                    </Typography>
                    <Typography>
                      <strong>Condition:</strong>{" "}
                      {mobileCategoryDetails.condition}
                    </Typography>
                    <Typography>
                      <strong>Negotiable:</strong>{" "}
                      {mobileCategoryDetails.negotiable}
                    </Typography>
                    <Typography>
                      <strong>Features:</strong>{" "}
                      {mobileCategoryDetails.features}
                    </Typography>
                  </>
                )}

                {id === "2" && (
                  <>
                    <Typography>
                      <strong>Brand:</strong> {electronicsCategoryDetails.brand}
                    </Typography>
                    <Typography>
                      <strong>type:</strong> {electronicsCategoryDetails.type}
                    </Typography>
                    <Typography>
                      <strong>Model:</strong> {electronicsCategoryDetails.model}
                    </Typography>
                    <Typography>
                      <strong>Description:</strong>{" "}
                      {electronicsCategoryDetails.description}
                    </Typography>
                    <Typography>
                      <strong>Price:</strong> {electronicsCategoryDetails.price}
                    </Typography>
                    <Typography>
                      <strong>Condition:</strong>{" "}
                      {electronicsCategoryDetails.condition}
                    </Typography>
                    <Typography>
                      <strong>Negotiable:</strong>{" "}
                      {electronicsCategoryDetails.negotiable}
                    </Typography>
                    <Typography>
                      <strong>Features:</strong>{" "}
                      {electronicsCategoryDetails.features}
                    </Typography>
                    <Typography>
                      <strong>Erating:</strong>{" "}
                      {electronicsCategoryDetails.erating}
                    </Typography>
                  </>
                )}

                {id === "3" && (
                  <>
                    <Typography>
                      <strong>Type:</strong> {vehicleCategoryDetails.type}
                    </Typography>
                    <Typography>
                      <strong>Brand:</strong> {vehicleCategoryDetails.brand}
                    </Typography>
                    <Typography>
                      <strong>Ad Name:</strong> {vehicleCategoryDetails.adName}
                    </Typography>
                    <Typography>
                      <strong>Model:</strong> {vehicleCategoryDetails.model}
                    </Typography>
                    <Typography>
                      <strong>Description:</strong>{" "}
                      {vehicleCategoryDetails.description}
                    </Typography>
                    <Typography>
                      <strong>Price:</strong> {vehicleCategoryDetails.price}
                    </Typography>
                    <Typography>
                      <strong>Condition:</strong>{" "}
                      {vehicleCategoryDetails.condition}
                    </Typography>
                    <Typography>
                      <strong>Negotiable:</strong>{" "}
                      {vehicleCategoryDetails.negotiable}
                    </Typography>
                    <Typography>
                      <strong>Features:</strong>{" "}
                      {vehicleCategoryDetails.features}
                    </Typography>
                    <Typography>
                      <strong>mof:</strong> {vehicleCategoryDetails.mof}
                    </Typography>
                    <Typography>
                      <strong>mileage:</strong> {vehicleCategoryDetails.mileage}
                    </Typography>
                    <Typography>
                      <strong>FuelType:</strong>{" "}
                      {vehicleCategoryDetails.FuelType}
                    </Typography>
                    <Typography>
                      <strong>transmission:</strong>{" "}
                      {vehicleCategoryDetails.transmission}
                    </Typography>
                    <Typography>
                      <strong>Engine:</strong> {vehicleCategoryDetails.engine}
                    </Typography>
                    <Typography>
                      <strong>Color:</strong> {vehicleCategoryDetails.color}
                    </Typography>
                    <Typography>
                      <strong>Year:</strong> {vehicleCategoryDetails.Year}
                    </Typography>
                  </>
                )}
              </Box>
            </Box>

            <Box className="mb-4">
              <Typography variant="h6" className="font-bold">
                Uploaded Images:
              </Typography>
              <Box sx={{ mb: 2 }}>
                {images.length > 0 ? (
                  <ul>
                    {images.map((image, index) => (
                      <li key={index}>
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Uploaded ${index}`}
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                            marginRight: "10px",
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Typography>No images uploaded</Typography>
                )}
              </Box>
            </Box>

            <Box
              sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}
            >
              <Button onClick={handleReset}>Reset</Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/categories")}
              >
                Submit
              </Button>
            </Box>
          </Box>
        ) : (
          <Box>
            {activeStep === 0 && (
              <Box display="flex" flexDirection="column" gap={2}>
                <Typography variant="h6" className="font-bold">
                  Personal Details
                </Typography>
                {[
                  { label: "Name", name: "name" },
                  { label: "Address", name: "address" },
                  { label: "Street/Village", name: "street" },
                  { label: "Town/City", name: "city" },
                  { label: "State", name: "state" },
                  { label: "Country", name: "country" },
                  { label: "Postcode/Zip", name: "postcode" },
                  { label: "Email", name: "email", type: "email" },
                  { label: "Phone", name: "phone" },
                ].map(({ label, name, type = "text" }) => (
                  <Box key={name} display="flex" flexDirection="column">
                    <label htmlFor={name}>{label} *</label>
                    <input
                      type={type}
                      name={name}
                      placeholder={label}
                      className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
                      onChange={handlePersonalDetailsChange}
                      value={personalDetails[name]}
                      required
                    />
                  </Box>
                ))}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  sx={{ mt: 2 }}
                >
                  Save & Continue
                </Button>
              </Box>
            )}

            {activeStep === 1 && (
              <Box className="shadow-lg p-6 bg-white rounded-md mb-6">
                <Typography variant="h6">Step 2: Category Details</Typography>
                {renderCategoryForm()}{" "}
                {/* Dynamically load the form based on the category */}
                {/* Image upload for category */}
                <Typography variant="subtitle1" className="font-semibold">
                  Upload Images for Category
                </Typography>
                <input
                  type="file"
                  multiple
                  onChange={handleImageChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
                />
                {/* Save button */}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  sx={{ mt: 2 }}
                >
                  Save & Continue
                </Button>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </div>
  );
};

export default CategoryDetailsStepper;
