import React, { useState } from "react";
import "../styles/healthformcontainer.css";
import { useNavigate } from "react-router-dom";

const HealthForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    age: 60,
    gender: 110,
    height: 100,
    weight: 72,
    bloodPressure: '',
    cholestrol: 1,
    glucoseLevels: 0,
    smokingHabits: 0,
    alcoholConsumption: 0,
    physicalActivity: 0,
    fever: 0,
    cough: 0,
    difficultBreathing: 0,
    asthma: 0,
    diabetes: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/analytics", { state: { formData } });
    console.log(formData);
  };

  return (
    <div className="health-form-container">
      <h2>Complete the Health Form</h2>
      <form onSubmit={handleSubmit} className="health-form">
        <div className="form-group">
          <label>Age: </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min={0}
            max={120}
          />
        </div>

        <div className="form-group">
          <label>Height (cm): </label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Weight (kg): </label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Blood Pressure: </label>
          <input
            type="number"
            name="bloodPressure"
            value={formData.bloodPressure}
            onChange={handleChange}
            min={90}
            max={170}
          />
        </div>

        <div className="form-group">
          <label>Has High Cholestrol: </label>
          <select
            name="cholestrol"
            value={formData.cholestrol}
            onChange={handleChange}
          >
            <option value={1}>Yes</option>
            <option value={0}>No</option>
          </select>
        </div>

        <div className="form-group">
          <label>Glucose Levels: </label>
          <select
            name="glucoseLevels"
            value={formData.glucoseLevels}
            onChange={handleChange}
          >
            <option value={1}>High</option>
            <option value={0}>Low</option>
          </select>
        </div>

        <div className="form-group">
          <label>Smoking Habits: </label>
          <select
            name="smokingHabits"
            value={formData.smokingHabits}
            onChange={handleChange}
          >
            <option value={1}>True</option>
            <option value={0}>False</option>
          </select>
        </div>

        <div className="form-group">
          <label>Alcohol Consumption: </label>
          <select
            name="alcoholConsumption"
            value={formData.alcoholConsumption}
            onChange={handleChange}
          >
            <option value={1}>True</option>
            <option value={0}>False</option>
          </select>
        </div>

        <div className="form-group">
          <label>Physical Activity: </label>
          <select
            name="physicalActivity"
            value={formData.physicalActivity}
            onChange={handleChange}
          >
            <option value={1}>True</option>
            <option value={0}>False</option>
          </select>
        </div>

        <div className="form-group">
          <label>Fever: </label>
          <select name="fever" value={formData.fever} onChange={handleChange}>
            <option value={1}>True</option>
            <option value={0}>False</option>
          </select>
        </div>

        <div className="form-group">
          <label>Cough: </label>
          <select name="cough" value={formData.cough} onChange={handleChange}>
            <option value={1}>True</option>
            <option value={0}>False</option>
          </select>
        </div>

        <div className="form-group">
          <label>Difficult Breathing: </label>
          <select
            name="difficultBreathing"
            value={formData.difficultBreathing}
            onChange={handleChange}
          >
            <option value={1}>True</option>
            <option value={0}>False</option>
          </select>
        </div>

        <div className="form-group">
          <label>Asthma: </label>
          <select name="asthma" value={formData.asthma} onChange={handleChange}>
            <option value={1}>True</option>
            <option value={0}>False</option>
          </select>
        </div>

        <div className="form-group">
          <label>Diabetes: </label>
          <select
            name="diabetes"
            value={formData.diabetes}
            onChange={handleChange}
          >
            <option value={1}>True</option>
            <option value={0}>False</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HealthForm;
