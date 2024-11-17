// MobileForm.js (Form details for Mobile category)

import React, { useState } from 'react';
import { Button, TextField, MenuItem, Select, InputLabel, FormControl, Box } from '@mui/material';

const MobileForm = () => {
  const [features, setFeatures] = useState([]);
  const [feature, setFeature] = useState('');
  const [brand, setBrand] = useState('');
  const [adName, setAdName] = useState('');
  const [model, setModel] = useState('');
  const [adDescription, setAdDescription] = useState('');
  const [adPrice, setAdPrice] = useState('');
  const [condition, setCondition] = useState('');
  const [negotiable, setNegotiable] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleAddFeature = () => {
    if (feature && !features.includes(feature)) {
      setFeatures([...features, feature]);
      setFeature('');
    }
  };

  const handleRemoveFeature = (featureToRemove) => {
    setFeatures(features.filter((f) => f !== featureToRemove));
  };

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Brand"
          fullWidth
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <TextField
          label="Ad Name"
          fullWidth
          value={adName}
          onChange={(e) => setAdName(e.target.value)}
          required
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <TextField
          label="Model"
          fullWidth
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <TextField
          label="Ad Description"
          fullWidth
          value={adDescription}
          onChange={(e) => setAdDescription(e.target.value)}
          multiline
          rows={4}
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <TextField
          label="Ad Price"
          type="number"
          fullWidth
          value={adPrice}
          onChange={(e) => setAdPrice(e.target.value)}
          required
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <FormControl fullWidth>
          <InputLabel>Condition</InputLabel>
          <Select
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            required
          >
            <MenuItem value="New">New</MenuItem>
            <MenuItem value="Used">Used</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ mb: 2 }}>
        <FormControl fullWidth>
          <InputLabel>Negotiable</InputLabel>
          <Select
            value={negotiable}
            onChange={(e) => setNegotiable(e.target.value)}
            required
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ mb: 2 }}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
          required
        />
        <p>{photo ? `File: ${photo.name}` : 'No file chosen'}</p>
      </Box>

      {/* Features Section */}
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Feature"
          fullWidth
          value={feature}
          onChange={(e) => setFeature(e.target.value)}
        />
        <Button variant="outlined" color="primary" onClick={handleAddFeature}>
          Add Feature
        </Button>
      </Box>

      {features.length > 0 && (
        <Box sx={{ mb: 2 }}>
          <ul>
            {features.map((f, index) => (
              <li key={index}>
                {f}{' '}
                <Button onClick={() => handleRemoveFeature(f)} color="error">
                  ❌
                </Button>
              </li>
            ))}
          </ul>
        </Box>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Button variant="outlined" color="secondary" type="button">
          Save as Draft
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Post Ad
        </Button>
      </Box>
    </>
  );
};

export default MobileForm;
