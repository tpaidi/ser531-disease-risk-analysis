import Axios from "axios";

const base = "http://localhost:3000";


const getDiseaseRiskAnalysisData = (age, glucoseLevels, bloodPressure, height, weight, cholestrol, smokingHabits, physicalActivity, asthma, diabetes) => {
    return Axios.get(base + `/disease/${age}/${glucoseLevels}/${bloodPressure}/${height}/${weight}/${cholestrol}/${smokingHabits}/${physicalActivity}/${asthma}/${diabetes}`)
}
export default getDiseaseRiskAnalysisData;