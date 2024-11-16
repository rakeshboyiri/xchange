import React from 'react';

const DynamicProductForm = ({ selectedCategory, productDetails, setProductDetails }) => {
    const getFieldsByCategory = (category) => {
        switch (category) {
            case 'Electronics':
                return [
                    { name: 'brand', label: 'Brand' },
                    { name: 'model', label: 'Model' },
                    { name: 'warranty', label: 'Warranty Period' },
                ];
            case 'Clothing':
                return [
                    { name: 'size', label: 'Size' },
                    { name: 'color', label: 'Color' },
                    { name: 'material', label: 'Material' },
                ];
            default:
                return [{ name: 'description', label: 'Description' }];
        }
    };

    const fields = getFieldsByCategory(selectedCategory);

    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
                Product Details ({selectedCategory})
            </h3>
            {fields.map((field) => (
                <input
                    key={field.name}
                    type="text"
                    placeholder={field.label}
                    className="w-full p-2 border border-gray-300 rounded"
                    value={productDetails[field.name] || ''}
                    onChange={(e) =>
                        setProductDetails({ ...productDetails, [field.name]: e.target.value })
                    }
                />
            ))}
        </div>
    );
};

export default DynamicProductForm;
