contentArea = document.getElementById("content");
let typingFlag = false;


async function loadUpStartPage(){
    
    contentArea.innerHTML = "";
    await typeSentence("> Starting Boot Sequence", "content");
    await typeSentence("> Booting...", "content");
    await typeSentence("> Booting...", "content");
    await typeSentence("> Boot Sequence Complete", "content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("> USER: Declan Cain", "content");
    await typeSentence("> TITLE: Lead Mycologist", "content");
    await typeSentence("> LAST-LOGIN: 4/23/2025", "content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("> Completing DATA Recovery...", "content");
    await typeSentence("> DATA Recovery Complete", "content");
    await typeSentence("> One File Found", "content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("> File Name: Botany 123 - Project SCLEROTINIA_SCLEROTIORUM.log", "content");
    await typeSentence("> WARNING: This is the last known record of *Sclerotinia sclerotiorum*", "content");
    textArea.appendChild(document.createElement("br"));

    buildNavButton("Open File", presentation1);
}



async function presentation1() {
    contentArea.innerHTML = "";
    header = document.createElement("h2");
    header.id = "CurPageHeader";
    contentArea.appendChild(header);
    await typeSentence("What is *Sclerotinia sclerotiorum*?", "CurPageHeader");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("Sclerotinia sclerotiorum (often abbreviated S. sclerotiorum) is a necrotrophic plant pathogen that often causes white mold disease in over 400 species of plants. It is a hyphal fungus that is white and is more see through at younger maturity level and opaque at an older maturity level.", "content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("It is a soilborne fungus that can survive in the soil for many years in the form of sclerotia, which are hard, black structures that can withstand harsh environmental conditions.", "content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("Under the microscope, S. sclerotiorum is similar to most other hyphal fungi. It has a filamentous structure with a network of hyphae that can spread rapidly through plant tissues.", "content");
    textArea.appendChild(document.createElement("br"));

    buildNavButton("Shut Down", loadUpStartPage);
    buildNavButton("Continue", presentation2);
}

async function presentation2() {
    contentArea.innerHTML = "";
    header = document.createElement("h2");
    header.id = "CurPageHeader";
    contentArea.appendChild(header);
    await typeSentence("S. sclerotiorum", "CurPageHeader");
    await typeSentence("Over the past three months (Feb 2025-Apr 2025), I have been researching the survivability and infection methods of S. sclerotiorum. Over those 3 months, to ensure that this microbe would survive (and remain contained), every week or every other week, I would cut a 1 cm by 1 cm disk of the microbe on my youngest plate of growth and add it to a PDA+S (Potato Dextrose Agar with Streptomycin) plate and seal it. Below is a picture of S. sclerotiorum at its full maturity after a week of growth.", "content");
    textArea.appendChild(document.createElement("br"));
    contentArea.innerHTML += `<img src="Simage.jpg" alt="Img Of S. sclerotiorum" width="300" height="300" margin="auto">`;
    textArea.appendChild(document.createElement("br"));

    buildNavButton("Back", presentation1);
    buildNavButton("Continue", presentation3);
}

async function presentation3() {
    contentArea.innerHTML = "";
    header = document.createElement("h2");
    header.id = "CurPageHeader";
    contentArea.appendChild(header);
    await typeSentence("My Research", "CurPageHeader");
    textArea.appendChild(document.createElement("br"));
    await typeSentence('My first experiment was focused on the guiding question "Can S. sclerotiorum surivive at warmer temperatures?" Therefore I was intending to test the survivability of this pathogen to determine if warmer climates would be affected or not.', "content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("After this, I was interested to see if there was a difference in the disease onset by S. sclerotiorum depending infection site. Therefore, that was the guiding question for my second experiment. This experiment allowed me to see the onset of the white mold disease in the plant from different infection sites and understand the pathogen's life cycle for prevention.", "content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("For the last experiment I had time for prior to this final message, I was exploring the question of S. sclerotiorum's survivability under variable levels of light. I was testing to see if removing or adding shade to the pathogen would be beneficial or harmful.", "content");
    textArea.appendChild(document.createElement("br"));

    buildNavButton("Back", presentation2);
    buildNavButton("Continue", presentation4);
}

async function presentation4() {
    contentArea.innerHTML = "";
    header = document.createElement("h2");
    header.id = "CurPageHeader";
    contentArea.appendChild(header);
    await typeSentence("Experiment List", "CurPageHeader");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("This is my experiment page where I will store all information about my experiments on S. sclerotiorum", "content");
    textArea.appendChild(document.createElement("br"));
    
    await typeSentence('Experiment 1 (Temperature Test)', "content");
    buildNavButton("View Experiment 1", experiment1);
    textArea.appendChild(document.createElement("br"));
    
    await typeSentence("Experiment 2 (Infection Site Test)", "content");
    buildNavButton("View Experiment 2", experiment2);
    textArea.appendChild(document.createElement("br"));
    
    await typeSentence("Experiment 3 (Light Test)", "content");
    buildNavButton("View Experiment 3", experiment3);
    textArea.appendChild(document.createElement("br"));
    
    await typeSentence("Experiment 4 (Human Test) [Corrupted]", "content");
    buildNavButton("View Experiment 4", funExperiment);
    textArea.appendChild(document.createElement("br"));

    buildNavButton("Back", presentation3);
    buildNavButton("Conclusions", conclusionPages);


}

async function experiment1() {
    header = document.createElement("h2");
    header.id = "CurPageHeader";
    contentArea.appendChild(header);
    await typeSentence("Experiment 1", "CurPageHeader");

    await typeSentence("For my first experiment, I was testing the survivability of S. sclerotiorum at warmer temperatures.", "content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("My Hypothesis: S. sclerotiorum will grow faster at warmer temperatures rather than colder ones.", "content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("My Experimental Design: To test this hypothesis, I had six PDA+S plates, each with a 1 cm by 1 cm square disk of S. sclerotiorum on them. After sealing the plates, I wrapped them in foil to control light from being a factor. Then I placed two into a 4°C fridge, two into a 37°C incubator, and two were left at room temperature.", "content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("> Treatment 1: 2 PDA+S plates with S. sclerotiorum were added to a fridge at 4°C.", "content");
    await typeSentence("> Treatment 2: 2 PDA+S plates with S. sclerotiorum were added to an incubator at 37°C.", "content");
    await typeSentence("> Treatment 3 (Control): 2 PDA+S plates with S. sclerotiorum were left at room temperature.","content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("Observing Results: After 3 days, I recorded the growth on the plates in each treatment by the average radial distance of growth from the center. Then I again took the same measurements after one full week.", "content");
    
    buildNavButton("Back To List", presentation4);
    buildNavButton("View Experiment 1 Results", experiment1Results);

}

async function experiment1Results() {
    
    header = document.createElement("h2");
    header.id = "CurPageHeader";
    contentArea.appendChild(header);
    await typeSentence("Experiment 1 Results", "CurPageHeader");

    await typeSentence("TREATMENTS:", "content");
    await typeSentence("> Treatment 1: 2 PDA+S plates with S. sclerotiorum were added to a fridge at 4°C.", "content");
    await typeSentence("> Treatment 2: 2 PDA+S plates with S. sclerotiorum were added to an incubator at 37°C.", "content");
    await typeSentence("> Treatment 3 (Control): 2 PDA+S plates with S. sclerotiorum were left at room temperature.","content");
    textArea.appendChild(document.createElement("br"));

    await typeSentence("Results after 3 days:", "content");
    await typeSentence("> Treatment 1 (Cold) Plate Growth Average: 0 cm", "content");
    await typeSentence("> Treatment 2 (Warm) Plate Growth Average: 0 cm", "content");
    await typeSentence("> Treatment 3 (Control) Plate Growth Average: 4.5 cm", "content");
    textArea.appendChild(document.createElement("br"));

    await typeSentence("Results after 7 days:", "content");
    await typeSentence("> Treatment 1 (Cold) Plate Growth Average: 0.5 cm", "content");
    await typeSentence("> Treatment 2 (Warm) Plate Growth Average: 0 cm", "content");
    await typeSentence("> Treatment 3 (Control) Plate Growth Average: 4.5 cm", "content");
    textArea.appendChild(document.createElement("br"));

    await typeSentence("Observations: In the warm experiment, after being in the incubator, S. sclerotiorum had a yellow hue, which seemed unhealthy, and after a week, seemed to be shriveled up and dead. In the cold experiment, the fungus remained healthy, just with very limited activity. In the control, within three days, the fungus had completely covered the plate.", "content");
    
    buildNavButton("Back To Experiment List", presentation4);
    buildNavButton("Back to Experiment 1 Description", experiment1);
    buildNavButton("Experiment 1 Conclusions", experiment1Conclusion);



}

async function experiment1Conclusion() {

    header = document.createElement("h2");
    header.id = "CurPageHeader";
    contentArea.appendChild(header);
    await typeSentence("Experiment 1 Conclusions", "CurPageHeader");

    await typeSentence("Conclusion: My results did not support my hypothesis. In my experiment, I found that S. sclerotiorum did not grow faster at 37°C than at 4°C. In fact, it did not grow at all at 37°C and had slight growth at 4°C. While most of the experiment worked fine, one issue that I had was that the foil was trapping heat. I know this because it got hot enough to melt the parafilm seal on the plates. Therefore, if I were to retry this experiment, I would have taped the foil to the top and sides of the plate to prevent heat from getting trapped.", "content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("This experiment was used to determine whether S. sclerotiorum is able to survive at extreme temperatures, and to determine whether it can better survive at extreme warm temperatures or extreme cold temperatures.", "content");

    buildNavButton("Back To Experiment List", presentation4);
    buildNavButton("Back to Experiment 1 Results", experiment1Results);
}

async function experiment2() {
    header = document.createElement("h2");
    header.id = "CurPageHeader";
    contentArea.appendChild(header);
    await typeSentence("Experiment 2", "CurPageHeader");

    await typeSentence("For my second experiment, I was testing the ability of S. sclerotiorum to infect plants in both leaves and roots.", "content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("My Hypothesis: Soybean plants infected with S. sclerotiorum on their roots will be less healthy than soybean plants infected with S. sclerotiorum on their leaves.", "content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("My Experimental Design: To test this hypothesis, I took three soybean plants, and I infected one with a 1 cm disk on the base of the roots. For the second soybean plant, I infected it with a 1 cm by 1 cm disk on one of the newly grown leaves of the plant. The last was left alone to act as a control. They were then grown and treated the same way to control for any other factors.", "content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("> Treatment 1: Soybean plant infected with a 1 cm by 1 cm disk of S. sclerotiorum on its leaf secured with parafilm.", "content");
    await typeSentence("> Treatment 2: Soybean plant infected with a 1 cm by 1 cm disk of S. sclerotiorum on its stem secured with parafilm.", "content");
    await typeSentence("> Treatment 3: Soybean plant that was not infected with S. sclerotiorum.", "content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("Observing Results: After a week of letting the soybean plants sit for a week, I inspected the plants to count the number and size of lesions and surface area afflicted.", "content");
    
    buildNavButton("Back To List", presentation4);
    buildNavButton("View Experiment 2 Results", experiment2Results);

}

async function experiment2Results() {
    
    header = document.createElement("h2");
    header.id = "CurPageHeader";
    contentArea.appendChild(header);
    await typeSentence("Experiment 2 Results", "CurPageHeader");

    await typeSentence("TREATMENTS:", "content");
    await typeSentence("> Treatment 1: Soybean plant infected with a 1 cm by 1 cm disk of S. sclerotiorum on its leaf secured with parafilm.", "content");
    await typeSentence("> Treatment 2: Soybean plant infected with a 1 cm by 1 cm disk of S. sclerotiorum on its stem secured with parafilm.", "content");
    await typeSentence("> Treatment 3: Soybean plant that was not infected with S. sclerotiorum.", "content");
    textArea.appendChild(document.createElement("br"));

    await typeSentence("Results after 7 days:", "content");
    await typeSentence("> Treatment 1 (Leaf) Lesion Count: 0; Surface Area Afflicted: 0 cm^2", "content");
    await typeSentence("> Treatment 2 (Root) Lesion Count: 0; Surface Area Afflicted: 0 cm^2", "content");
    await typeSentence("> Treatment 3 (Control) Lesion Count: 0; Surface Area Afflicted: 0 cm^2", "content");
    textArea.appendChild(document.createElement("br"));

    await typeSentence("In all three treatments, I was unable to find any lesions or any surface area afflicted. Additionally, on both treatments 1 and 2, I was able to see the original disk of S. sclerotiorum shriveled up and discolored (seemingly dead).", "content");
    
    buildNavButton("Back To Experiment List", presentation4);
    buildNavButton("Back to Experiment 2 Description", experiment2);
    buildNavButton("Experiment 2 Conclusions", experiment2Conclusion);



}

async function experiment2Conclusion() {

    header = document.createElement("h2");
    header.id = "CurPageHeader";
    contentArea.appendChild(header);
    await typeSentence("Experiment 2 Conclusions", "CurPageHeader");

    await typeSentence("Conclusion: My results are inconclusive because I was unable to establish any difference between the ability of S. sclerotiorum to inflict damage on the soybean plants, as they likely died before they could be pathogenic to the plant. Because of this unfortunate circumstance, I was not able to come to any conclusion. Thus, I would need to alter my infection method of the plant, or better secure the fungus to the plant where I want to infect it.", "content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("This experiment was used to determine whether where a plant is infected will have any effect on the severity and speed of the onset of the white mold pathogen. Therefore, it is important as it helps me better understand where S. sclerotiorum affects soybean plants and other plants in general, and where to first look for the pathogen in the plant.", "content");

    buildNavButton("Back To Experiment List", presentation4);
    buildNavButton("Back to Experiment 2 Results", experiment2Results);
}


async function experiment3() {
    header = document.createElement("h2");
    header.id = "CurPageHeader";
    contentArea.appendChild(header);
    await typeSentence("Experiment 3", "CurPageHeader");

    await typeSentence("For my third experiment, I was testing the ability of S. sclerotiorum to survive in different levels of light exposure.", "content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("My Hypothesis: I predict that S. sclerotiorum will grow faster in darker conditions than under light.", "content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("My Experimental Design: To test this hypothesis, I had six PDA+S plates, each with a 1 cm by 1 cm square disk of S. sclerotiorum on them that were sealed. Finally, I left two under constant light, two under a dim light mimicking natural light, and two wrapped in foil to be in the dark.", "content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("> Treatment 1: 2 PDA+S plates with S. sclerotiorum were placed under constant light.", "content");
    await typeSentence("> Treatment 2: 2 PDA+S plates with S. sclerotiorum were covered to be in constant darkness.", "content");
    await typeSentence("> Treatment 3 (Control): 2 PDA+S plates with S. sclerotiorum were left under room lighting conditions.","content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("Observing Results: After 3 days, I recorded the growth on the plates in each treatment by the average radial distance of growth from the center. Then I again took the same measurements after one full week.", "content");
   
    buildNavButton("Back To List", presentation4);
    buildNavButton("View Experiment 3 Results", experiment3Results);

}

async function experiment3Results() {
    
    header = document.createElement("h2");
    header.id = "CurPageHeader";
    contentArea.appendChild(header);
    await typeSentence("Experiment 3 Results", "CurPageHeader");

    await typeSentence("TREATMENTS:", "content");
    await typeSentence("> Treatment 1: 2 PDA+S plates with S. sclerotiorum were placed under constant light.", "content");
    await typeSentence("> Treatment 2: 2 PDA+S plates with S. sclerotiorum were covered to be in constant darkness.", "content");
    await typeSentence("> Treatment 3 (Control): 2 PDA+S plates with S. sclerotiorum were left under room lighting conditions.","content");
    textArea.appendChild(document.createElement("br"));

    await typeSentence("Results after 3 days:", "content");
    await typeSentence("> Treatment 1 (Light) Plate Growth Average: 4.0 cm", "content");
    await typeSentence("> Treatment 2 (Dark) Plate Growth Average: 4.5 cm", "content");
    await typeSentence("> Treatment 3 (Control) Plate Growth Average: 4.5 cm", "content");
    textArea.appendChild(document.createElement("br"));

    await typeSentence("Results after 7 days:", "content");
    await typeSentence("> Treatment 1 (Light) Plate Growth Average: 4.5 cm", "content");
    await typeSentence("> Treatment 2 (Dark) Plate Growth Average: 4.5 cm", "content");
    await typeSentence("> Treatment 3 (Control) Plate Growth Average: 4.5 cm", "content");
    textArea.appendChild(document.createElement("br"));

    await typeSentence("Observations: While the fungus in both the dark and the control experiments completely covered the plate within 3 days, only one dark plates' fungi had reached full maturity, as the other still had not developed sclerotia and had a small amount of spores; therefore, that plate likely grew slower than the control plates. Additionally, after the full week, all of the plates had reached full maturity level, and both of the light treatment plates were full of water.", "content");

    buildNavButton("Back To Experiment List", presentation4);
    buildNavButton("Back to Experiment 3 Description", experiment3);
    buildNavButton("Experiment 3 Conclusions", experiment3Conclusion);



}

async function experiment3Conclusion() {

    header = document.createElement("h2");
    header.id = "CurPageHeader";
    contentArea.appendChild(header);
    await typeSentence("Experiment 3 Conclusions", "CurPageHeader");

    await typeSentence("Conclusion: My results, while slight, were able to show that S. sclerotiorum grows quicker and healthier in extreme dark environments rather than extreme light environments. However, due to the controls having slightly better growth performance than the dark experiments' growth performance, we can also establish that S. sclerotiorum does better in moderate light than any other extreme level of light (or absence of light).", "content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("Much of the research I conducted on S. sclerotiorum seemed to demonstrate that this fungus would grow better in darker environments rather than lighter environments, but there was no mention of light extremes, so this experiment helped me see if this fungus would still be able to grow in these extreme environments.", "content");

    buildNavButton("Back To Experiment List", presentation4);
    buildNavButton("Back to Experiment 3 Results", experiment3Results);
}

async function funExperiment() {
    header = document.createElement("h2");
    header.id = "CurPageHeader";
    contentArea.appendChild(header);
    await typeSentence("[.d[ds]2 D0N\"T 2uh{\\", "CurPageHeader");

    await typeSentence("SD*()F$KF#$#$F*$F)+ *H+HH*%KG+#*%J|#$F#${FON# $UFN_#$&FH#$_FUO$NF_(#&$HF_(&#$HFU#U$HF_ #U(G$}%G$J%}V_$%V_%N", "content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("> 1T'S D4NG3R0U5...", "content");
    await typeSentence("> 1T'S 4LIV3...", "content");
    await typeSentence("> RUN", "content");
    textArea.appendChild(document.createElement("br"));


    buildNavButton("Back To Experiment List", presentation4);
}

async function conclusionPages() {
    header = document.createElement("h2");
    header.id = "CurPageHeader";
    contentArea.appendChild(header);
    await typeSentence("Conclusions", "CurPageHeader");

    await typeSentence("I have learned that this microbe, S. sclerotiorum, can survive under extreme light and complete darkness; however, it is more suited toward darker environments rather than lighter environments. Additionally, I have learned that it is able to survive in an extremely cold environment, but doesn't fare too well. But S. Sclerotiorum doesn't survive at all under extreme warm temperatures. Additionally, I learned that while this fungus is very good at surviving on an agar medium, I found that it was hard to infect a plant with S. sclerotiorum, as in my second experiment, I couldn't get it to become pathogenic to the soybean plant. If I had more time, I would have liked to redo my second experiment to learn more about S. sclerotiorum's ability to be pathogenic to different plants. Additionally, I would have liked to test its interactions with different pathogens.", "content");
    textArea.appendChild(document.createElement("br"));
    await typeSentence("Peer Experiment: Additionally, my peer was quite helpful toward my first experiment (the temperature one). After creating my experimental design, I completely forgot that I would need to control for other factors that could affect the experiment, such as light, and Cathry Fu reminded me that I needed to control for other factors. Overall, Cathery was a great help with that experiment.", "content");

    
    buildNavButton("Back To Experiment List", presentation4);
}

async function typeSentence(sentence, eleRef, delay = 1) { // 60ms
    typingFlag = true;
    textArea = document.getElementById(eleRef);
    textel = document.createElement("text");
    textArea.appendChild(textel);
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      textel.innerHTML += letters[i];
      i++
    }
    textArea.appendChild(document.createElement("br"));
    typingFlag = false;
    return;
  }

  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }



  function buildNavButton(text, callBackFunction) {
    const button = document.createElement("button");
    button.innerHTML = "<strong>"+text+"</strong>";
    button.onclick = function() {
        if (typingFlag) {
            return;
        }
        contentArea.innerHTML = "";
        callBackFunction();
    }
    contentArea.appendChild(button);
  }

loadUpStartPage();