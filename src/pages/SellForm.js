import React, { useState } from 'react';
import PersonalDetailsForm from '../components/innerforms/PersonalDetailsForm';
import ProductCategoryDropdown from '../components/innerforms/ProductCategoryDropdown';
import DynamicProductForm from '../components/innerforms/DynamicProductForm';
import AddCategoryModal from '../components/innerforms/AddCategoryModal';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';

const SellForm = () => {
    const [personalDetails, setPersonalDetails] = useState({
        name: '',
        email: '',
        contact: '',
    });
    const [productDetails, setProductDetails] = useState({});
    const [categories, setCategories] = useState(['Electronics', 'Clothing']);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addCategory = (newCategory) => {
        setCategories([...categories, newCategory]);
    };

    const handleSubmit = () => {
        console.log('Personal Details:', personalDetails);
        console.log('Product Details:', productDetails);
    };

    //Icons from materila Ui
    const HomeIcon = (props) => {
        return (
          <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
        );
      }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Sell a Product</h2>
            <PersonalDetailsForm
                formData={personalDetails}
                setFormData={setPersonalDetails}
            />
            <ProductCategoryDropdown
                categories={categories}
                setSelectedCategory={(category) =>
                    category === 'add-new' ? setIsModalOpen(true) : setSelectedCategory(category)
                }
                addCategory={addCategory}
            />
            {selectedCategory && selectedCategory !== 'add-new' && (
                <DynamicProductForm
                    selectedCategory={selectedCategory}
                    productDetails={productDetails}
                    setProductDetails={setProductDetails}
                />
            )}
    
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    
            
            
            <AddCategoryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAddCategory={addCategory}
            />
        </div>
    );
};

export default SellForm;
