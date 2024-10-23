import React, { useState } from 'react';
import './MedicineSelection.css';

const medicines = [
  { id: 1, name: 'Paracetamol', price: '$5' },
  { id: 2, name: 'Ibuprofen', price: '$10' },
  { id: 3, name: 'Amoxicillin', price: '$15' },
  // Add more medicines as needed
];

const MedicineSelection = () => {
  const [selectedMedicines, setSelectedMedicines] = useState([]);

  const handleSelectMedicine = (medicine) => {
    if (window.confirm(`Are you sure you want to select ${medicine.name}?`)) {
      setSelectedMedicines((prevSelected) => [...prevSelected, medicine]);
    }
  };

  return (
    <div className="medicine-container">
      <h1>Select Medicines</h1>
      <ul className="medicine-list">
        {medicines.map((medicine) => (
          <li key={medicine.id} className="medicine-item">
            <span className="medicine-name">{medicine.name}</span>
            <span className="medicine-price">{medicine.price}</span>
            <button
              className="select-button"
              onClick={() => handleSelectMedicine(medicine)}
            >
              Select
            </button>
          </li>
        ))}
      </ul>

      <div className="selected-medicines">
        <h2>Selected Medicines</h2>
        <ul>
          {selectedMedicines.map((medicine, index) => (
            <li key={index}>{medicine.name} - {medicine.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MedicineSelection;
