import Axios from "axios";

const base = "http://localhost:3000";

class HealthDataAnalysis {
    getDiseaseRiskBasedOnDemographicData = (age,gender,height,weight,bloodPressure,cholestrol) => {
        return Axios.get(base + `/healthdataanalysis/${age}/${gender}/${height}/${weight}/${bloodPressure}/${cholestrol}`)
    }
    getDiseaseRiskBasedOnLifestyle = () => {
        return Axios.get(base + `/healthdataanalysis/${alcoholConsumption}/${smokingHabits}/${physicalActivity}`)
    }
    getDiseaseRiskBasedOnSymptoms = () => {
        return Axios.get(base + `/healthdataanalysis/${fever}/${cough}/${difficultBreathing}/${asthma}/${diabetes}`)
    }
    getRiskOfAlzheimersBasedOnAge = () => {
        return Axios.get(base + `/healthdataanalysis/${age}`)
    }
    
}

export default new HealthDataAnalysis();