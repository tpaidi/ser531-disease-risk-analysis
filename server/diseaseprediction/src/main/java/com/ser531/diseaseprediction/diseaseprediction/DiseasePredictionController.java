package com.ser531.diseaseprediction.diseaseprediction;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ser531.diseaseprediction.diseaseprediction.Models.FinalResult;

@CrossOrigin
@RestController
public class DiseasePredictionController {

    @Autowired
    FusekiHelper fusekiHelper;
    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/disease/{age}/{glucose}/{bp}/{height}/{weight}/{cholesterol}/{smoking}/{physical}/{asthma}/{diabetes}", method = RequestMethod.GET)
    public FinalResult getDiseaseInformation(
            @PathVariable String age,
            @PathVariable String glucose,
            @PathVariable String bp,
            @PathVariable String height,
            @PathVariable String weight,
            @PathVariable String cholesterol,
            @PathVariable String smoking,
            @PathVariable String physical,
            @PathVariable String asthma,
            @PathVariable String diabetes) {
        return FusekiHelper.AllloadQuery(age, glucose, bp, height, weight, cholesterol, smoking, physical, asthma, diabetes);
    }
	
}