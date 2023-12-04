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
      const res1 = await getDiseaseRiskAnalysisData(
        formData.age,
        formData.glucoseLevels,
        formData.bloodPressure,
        formData.height,
        formData.weight,
        formData.cholestrol,
        formData.smokingHabits,
        formData.physicalActivity,
        formData.asthma,
        formData.diabetes
    );

      const data = res1.persons.map((x) => {
        return {
          age: x.age || "",
          gender: x.gender || "",
          height: x.height || "",
          weight: x.weight || "",
          bloodPressure: x.bloodPressure || "",
          cholesterol: x.cholesterol || "",
          glucoseLevels: x.glucoseLevels || "",
          smokingHabits: x.smokingHabits || "",
          alcoholConsumption: x.alcoholConsumption || "",
          physicalActivity: x.physicalActivity || "",
          fever: x.fever || "",
          cough: x.cough || "",
          difficultBreathing: x.difficultBreathing || "",
          asthma: x.asthma || "",
          diabetes: x.diabetes || "",
          covid: x.covid || "",
          cardiovascularDiseases: x.cardiovascularDiseases || "",
          respiratoryDisease: x.respiratoryDisease || "",
          alzheimers: x.alzheimers || "",
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
      "People who dont have cardiovascular",
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
