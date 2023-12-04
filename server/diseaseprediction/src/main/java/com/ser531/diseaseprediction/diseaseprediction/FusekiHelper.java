package com.ser531.diseaseprediction.diseaseprediction;

import java.util.ArrayList;
import java.util.List;

import org.apache.jena.query.*;
import org.apache.jena.sparql.exec.ResultSetAdapter;
import org.springframework.stereotype.Service;

import com.ser531.diseaseprediction.diseaseprediction.Models.DiseasePerson;
import com.ser531.diseaseprediction.diseaseprediction.Models.FinalResult;

@Service
public class FusekiHelper {
    //static String fusekiEndPoint = "http://18.181.206.248:3030/#/dataset/xyz/query";
    static String fusekiEndPoint = "http://localhost:3030/diz/";
    
    static public String createAllDiseaseQuery(String age, String glucose, String bp, String height, String weight,String cholestrol, String smoking, String physical, String asthma, String diabetes) {
        String q = 
			"PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\r\n"
			+ "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\r\n"
			+ "PREFIX df: <http://www.semanticweb.org/maruti/ontologies/2023/10/Disease-Finder#>\r\n"
			+ "SELECT ?person ?age ?height ?covid ?gender ?weight ?bloodpressure ?cholesterol ?glucose ?smoking ?physical ?asthma ?cardio\r\n"
			+ "WHERE {\r\n"
			+ "  ?person rdf:type df:Person.\r\n"
			+ "  ?person df:hasAge ?age.\r\n"
			+ "  ?person df:hasHeight ?height.\r\n"
			+ "  ?person df:hasCovid-19Disease ?covid.\r\n"
			+ "  ?person df:hasGender ?gender.\r\n"
			+ "  ?person df:hasWeight ?weight.\r\n"
			+ "  ?person df:hasBloodPressure ?bloodpressure.\r\n"
			+ "  ?person df:hasCholesterolLevel ?cholesterol.\r\n"
			+ "  ?person df:hasGlucoseLevel ?glucose.\r\n"
			+ "  ?person df:hasSmokingHabit ?smoking.\r\n"
			+ "  ?person df:hasPhysicalActivityLevel ?physical.\r\n"
			+ "  ?person df:hasAsthma ?asthma.\r\n"
			+ "  ?person df:hasCardiovascularDisease ?cardio.\r\n"
			//+"FILTER (?age < \""+Integer.toString((Integer.parseInt(age)+25)) +"\" && ?age > \""+Integer.toString((Integer.parseInt(age)-25))+"\" && ?cholesterol = \""+cholestrol+"\" && ?asthma = \""+asthma+"\" && ?height > \""+ Integer.toString((Integer.parseInt(height)-25))+"\" && ?height < \""+ Integer.toString((Integer.parseInt(height)+25))+"\" && ?weight > \""+ Integer.toString((Integer.parseInt(weight)-20))+"\" && ?glucose = \""+glucose+"\" && ?bloodpressure > \""+ Integer.toString((Integer.parseInt(bp)-25))+"\"  && ?bloodpressure< \""+ Integer.toString((Integer.parseInt(bp)+25))+"\" && ?physical = \""+physical+"\")}\r\n";
			+"FILTER (?age < \""+Integer.toString((Integer.parseInt(age)+25)) +"\" && ?cholesterol = \""+cholestrol+"\" && ?asthma = \""+asthma+"\" && ?height > \""+ Integer.toString((Integer.parseInt(height)-25))+"\" && ?weight > \""+ Integer.toString((Integer.parseInt(weight)-20))+"\" && ?glucose = \""+glucose+"\"  && ?bloodpressure< \""+ Integer.toString((Integer.parseInt(bp)+25))+"\" && ?physical = \""+physical+"\")}\r\n";

        		//+ "  FILTER (?age < \""+ Integer.toString((Integer.parseInt(age)+5))  +"\" && ?cholesterol = \""+ cholestrol +"\" && ?glucose = \""+glucose+"\" && ?bloodpressure > \""+Integer.toString((Integer.parseInt(bp)-20))  +"\" && ?age > \""+ Integer.toString((Integer.parseInt(age)-5))+"\" && ?bloodpressure< \""+Integer.toString((Integer.parseInt(bp)+20))+"\")\r\n"
        		//+ "  FILTER (?age < \""+ Integer.toString((Integer.parseInt(age)+5))  +"\" && ?cholesterol = \""+ cholestrol +"\" && ?glucose = \""+glucose+"\"  && ?age > \""+ Integer.toString((Integer.parseInt(age)-5))+"\")\r\n"
        		//+ "} LIMIT 100";
        return q;
    }

    
    public static FinalResult AllloadQuery(String age, String glucose, String bp, String height, String weight,String cholestrol, String smoking, String physical, String asthma, String diabetes) {
    	String q = createAllDiseaseQuery(age, glucose, bp, height, weight, cholestrol, smoking, physical, asthma, diabetes);
        System.out.println(q);
        Integer covidCount = 0;
        Integer cardiovascularCount = 0;
        Integer totalCount = 0;
    	QueryExecution queryExecution = QueryExecutionFactory.sparqlService(fusekiEndPoint, q );
        ResultSetAdapter result = (ResultSetAdapter) queryExecution.execSelect();
        System.out.println(result);
        FinalResult res = new FinalResult();
        res.persons = new ArrayList<>();
        List<DiseasePerson> p  = new ArrayList<>();
        
        while ((result).hasNext()) {
        	DiseasePerson dp = new DiseasePerson();
        	
            QuerySolution solution = (result).nextSolution();
            dp.age = solution.getLiteral("age").toString();
            dp.height = solution.getLiteral("height").toString();
            dp.covid = solution.getLiteral("covid").toString();
            dp.gender = solution.getLiteral("gender").toString();
            dp.weight = solution.getLiteral("weight").toString();
            dp.bloodPressure = solution.getLiteral("bloodpressure").toString();
            dp.cholesterol = solution.getLiteral("cholesterol").toString();
            dp.glucoseLevels = solution.getLiteral("glucose").toString();
            dp.smokingHabits = solution.getLiteral("smoking").toString();
            dp.physicalActivity = solution.getLiteral("physical").toString();
            dp.asthma = solution.getLiteral("asthma").toString();
            dp.cardiovascularDiseases = solution.getLiteral("cardio").toString();
            
            res.persons.add(dp);
            totalCount +=1;
            if(Integer.parseInt( dp.covid) != 0) {
            	covidCount +=1;
            }
            if(Integer.parseInt( dp.cardiovascularDiseases) !=0 ) {
            	cardiovascularCount +=1;
            }
            
        }
        
        res.totalCount = totalCount;
        res.covidCount = covidCount;
        res.cardiovascularCount = cardiovascularCount;
        System.out.println(result);
        return res;
    }	
    
}
