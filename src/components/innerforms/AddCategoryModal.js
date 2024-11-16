import React, { useState } from 'react';

const AddCategoryModal = ({ isOpen, onClose, onAddCategory }) => {
    const [newCategory, setNewCategory] = useState('');

    if (!isOpen) return null;

    const handleAddCategory = () => {
        if (newCategory.trim()) {
            onAddCategory(newCategory.trim());
            setNewCategory('');
            onClose();
        } else {
            alert('Please enter a valid category name.');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 w-96">
                <h3 className="text-lg font-semibold text-gray-800">Add New Category</h3>
                <input
                    type="text"
                    placeholder="Category Name"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                />
                <div className="flex justify-between">
                    <button
                        onClick={handleAddCategory}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                    >
                        Add
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddCategoryModal;
