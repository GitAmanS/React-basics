import React, { useState } from 'react';

const ExpenseForm = (props) => {
  const [formData, setFormData] = useState({ id: "", name: "", price: "", date: new Date() });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formattedDate = new Date(formData.date + 'T00:00:00'); // Assuming formData.date is in "yyyy-mm-dd" format
    props.addExpense({ ...formData, date: formattedDate });
    setFormData({ id: "", name: "", price: "", date: new Date() });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date.toISOString().split('T')[0]}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
