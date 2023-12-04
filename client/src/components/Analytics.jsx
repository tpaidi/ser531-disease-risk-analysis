import React, { useState, useEffect } from "react";
import Table from "rc-table";
import { useLocation } from "react-router-dom";
import "../styles/healthTable.css";
import getDiseaseRiskAnalysisData from "../HealthDataAnalysis";
import { Chart } from "react-google-charts";
import { useNavigate } from "react-router-dom";

const HealthDataTable = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData } = location.state;
  const [response1, setresponse1] = useState([]);
  const [covidCount, setCovidCount] = useState(10);
  const [cardiovascularDiseaseCount, setCardiovascularDiseaseCount] =
    useState(10);
  const [totalCount, setTotalCount] = useState(100);

  const onBackButtonClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  useEffect(() => {
    console.log("here")
    try {
      const apicall = async () => {
        await DemograpicDataResponse();
      };
      apicall();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const DemograpicDataResponse = async () => {
    try {
      let res1 = await getDiseaseRiskAnalysisData(
        formData.age || 60 ,
        formData.glucoseLevels || 1,
        formData.bloodPressure ||100 ,
        formData.height || 160,
        formData.weight || 72,
        formData.cholestrol || 1,
        formData.smokingHabits || 0,
        formData.physicalActivity || 0,
        formData.asthma || 0,
        formData.diabetes ||0
    );
    console.log(res1)
    res1 = res1.data;

      const data = res1.persons.map((x) => {
        return {
          key: Math.random(),
          age: x.age || 0,
          gender: (x.gender =="1" ? "Male" :"Female" )|| 0,
          height: x.height || 0,
          weight: x.weight || 0,
          bloodPressure: x.bloodPressure || 0,
          cholesterol: x.cholesterol || 0,
          glucoseLevels: x.glucoseLevels ||0,
          smokingHabits: x.smokingHabits || 0,
          alcoholConsumption: x.alcoholConsumption || 0,
          physicalActivity: x.physicalActivity || 0,
          fever: x.fever || 0,
          cough: x.cough || 0,
          difficultBreathing: x.difficultBreathing || 0,
          asthma: x.asthma || 0,
          diabetes: x.diabetes || 0,
          covid: x.covid || 0,
          cardiovascularDiseases: x.cardiovascularDiseases || 0,
          respiratoryDisease: x.respiratoryDisease || 0,
          alzheimers: x.alzheimers || 0,
        };
      });
      setresponse1(data);
      setCardiovascularDiseaseCount(res1.cardiovascularCount || 0);
      setCovidCount(res1.covidCount || 0);
      setTotalCount(res1.totalCount || 0);
    } catch (e) {
      console.log(e);
    }
  };
  let pieChart1Inputs = [
    ["abc", "bcs"],

    ["Covid", covidCount],
    ["People who dont have covid", totalCount - covidCount],
  ];
  let pieChart2Inputs = [
    ["abc", "bcs"],
    ["Cardiovascular", cardiovascularDiseaseCount],
    [
      "People who dont have cardiovascular disease",
      totalCount - cardiovascularDiseaseCount,
    ],
  ];

  const columns = [
    { title: "Age", dataIndex: "age", key: "age", width: 50 },
    { title: "Gender", dataIndex: "gender", key: "gender", width: 100 },
    { title: "Height", dataIndex: "height", key: "height", width: 100 },
    { title: "Weight", dataIndex: "weight", key: "weight", width: 100 },
    {
      title: "Blood Pressure",
      dataIndex: "bloodPressure",
      key: "bloodPressure",
      width: 130,
    },
    {
      title: "Cholesterol",
      dataIndex: "cholesterol",
      key: "cholesterol",
      width: 130,
    },
    {
      title: "Glucose Levels",
      dataIndex: "glucoseLevels",
      key: "glucoseLevels",
      width: 130,
    },
    {
      title: "Smoking Habits",
      dataIndex: "smokingHabits",
      key: "smokingHabits",
      width: 130,
    },
    {
      title: "Alcohol Consumption",
      dataIndex: "alcoholConsumption",
      key: "alcoholConsumption",
      width: 160,
    },
    {
      title: "Physical Activity",
      dataIndex: "physicalActivity",
      key: "physicalActivity",
      width: 150,
    },
    { title: "Fever", dataIndex: "fever", key: "fever", width: 100 },
    { title: "Cough", dataIndex: "cough", key: "cough", width: 100 },
    {
      title: "Difficult Breathing",
      dataIndex: "difficultBreathing",
      key: "difficultBreathing",
      width: 170,
    },
    { title: "Asthma", dataIndex: "asthma", key: "asthma", width: 100 },
    { title: "Diabetes", dataIndex: "diabetes", key: "diabetes", width: 100 },
    { title: "Covid", dataIndex: "covid", key: "covid", width: 100 },
    {
      title: "Cardiovascular Diseases",
      dataIndex: "cardiovascularDiseases",
      key: "cardiovascularDiseases",
      width: 200,
    },
    {
      title: "Respiratory Disease",
      dataIndex: "respiratoryDisease",
      key: "respiratoryDisease",
      width: 170,
    },
    {
      title: "Alzheimers",
      dataIndex: "alzheimers",
      key: "alzheimers",
      width: 120,
    },
  ];

  const CovidRisk = {
    title: "Covid Risk Analysis",
  };
  const cardiovascularRisk = {
    title: "Cardiovascular disease Risk Analysis",
  };


  return (
    <div>
      <button onClick={onBackButtonClick}>Back</button>
      <div style={{display:"flex",flexDirection:"row"}}>

      <Chart
        chartType="PieChart"
        data={pieChart1Inputs}
        options={CovidRisk}
        width={"100%"}
        height={"400px"}
      />

      <Chart
        chartType="PieChart"
        data={pieChart2Inputs}
        options={cardiovascularRisk}
        width={"100%"}
        height={"400px"}
        fill={"black"}
      />
      </div>
      
      <h2>Result data</h2>
      <Table className="health-data-table" columns={columns} data={response1} />
      <button onClick={onBackButtonClick}>Back</button>

    </div>
  );
};

export default HealthDataTable;
