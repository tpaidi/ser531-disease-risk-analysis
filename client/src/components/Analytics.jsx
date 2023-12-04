import React from 'react';
import Table from 'rc-table';
import { useLocation } from 'react-router-dom';
import '../styles/healthTable.css';
import HealthDataAnalysis from '../HealthDataAnalysis';

const HealthDataTable = () => {
  const location = useLocation();
  const { formData } = location.state;

  const DemograpicDataResponse = async () => {
    const response1 = await HealthDataAnalysis.getDiseaseRiskBasedOnDemographicData(formData.age, formData.gender,formData.weight,
      formData.height,formData.bloodPressure);
  };
  const LifestyleDataResponse = async () => {
    const response2 = await HealthDataAnalysis.getDiseaseRiskBasedOnLifestyle(formData.alcoholConsumption, formData.smokingHabits,formData.physicalActivity);
  };

  const SymptomsDataResponse = async () => {
    const response3 = await HealthDataAnalysis.getDiseaseRiskBasedOnSymptoms(formData.fever, formData.cough,formData.difficultBreathing,
      formData.asthma,formData.diabetes);
  };

  const columns = [
    { title: 'Age', dataIndex: 'age', key: 'age', width: 50 },
    { title: 'Gender', dataIndex: 'gender', key: 'gender', width: 100 },
    { title: 'Height', dataIndex: 'height', key: 'height', width: 100 },
    { title: 'Weight', dataIndex: 'weight', key: 'weight', width: 100 },
    { title: 'Blood Pressure', dataIndex: 'bloodPressure', key: 'bloodPressure', width: 130 },
    { title: 'Cholesterol', dataIndex: 'cholesterol', key: 'cholesterol', width: 130 },
    { title: 'Glucose Levels', dataIndex: 'glucoseLevels', key: 'glucoseLevels', width: 130 },
    { title: 'Smoking Habits', dataIndex: 'smokingHabits', key: 'smokingHabits', width: 130 },
    { title: 'Alcohol Consumption', dataIndex: 'alcoholConsumption', key: 'alcoholConsumption', width: 160 },
    { title: 'Physical Activity', dataIndex: 'physicalActivity', key: 'physicalActivity', width: 150 },
    { title: 'Fever', dataIndex: 'fever', key: 'fever', width: 100 },
    { title: 'Cough', dataIndex: 'cough', key: 'cough', width: 100 },
    { title: 'Difficult Breathing', dataIndex: 'difficultBreathing', key: 'difficultBreathing', width: 170 },
    { title: 'Asthma', dataIndex: 'asthma', key: 'asthma', width: 100 },
    { title: 'Diabetes', dataIndex: 'diabetes', key: 'diabetes', width: 100 },
    { title: 'Covid', dataIndex: 'covid', key: 'covid', width: 100 },
    { title: 'Cardiovascular Diseases', dataIndex: 'cardiovascularDiseases', key: 'cardiovascularDiseases', width: 200 },
    { title: 'Respiratory Disease', dataIndex: 'respiratoryDisease', key: 'respiratoryDisease', width: 170 },
    { title: 'Alzheimers', dataIndex: 'alzheimers', key: 'alzheimers', width: 120 },
  ];

  const data = [
    {
      key: '1',
      age: 45,
      gender: 'Female',
      height: '160cm',
      weight: '60kg',
      bloodPressure: '120/80',
      cholesterol: '200 mg/dL',
      glucoseLevels: '100 mg/dL',
      smokingHabits: 0,
      alcoholConsumption: 1,
      physicalActivity: 3,
      fever: 0,
      cough: 1,
      difficultBreathing: 0,
      asthma: 0,
      diabetes: 1,
      covid: 0,
      cardiovascularDiseases: 0,
      respiratoryDisease: 0,
      alzheimers: 0,
    }
  ];

  return (
    <div>
      <h2>Result data</h2>
      <Table className='health-data-table' columns={columns} data={data} />
    </div>
  )
  
};

export default HealthDataTable;
