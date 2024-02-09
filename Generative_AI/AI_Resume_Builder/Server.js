// Modules:
const { getResponse } = require('./openai');
const path = require('path');
const express = require("express");
const app = express();
    
/*
    Test URLS:
        1. http://127.0.0.1:3000/Build_Resume?prompt=tell me about gpt&
        2. http://127.0.0.1:3000/Build_Resume/?name=Shivram&age=18&gender=3%2F3+B6+east+first+street+pasuvanthanai+road+kovilpatti%2C+tamilnadu%2C+india.&mail=shivramudkmr%40gmail.com&pn=9361258685&objective=to+become+a+software+engineer&school=kamaraj+matriculation+school%2C+kovilpatti.&h_school=98&hs_school=96&c_loc=National+Engineering+College+kovilpatti.&c_grade=8.5&add=completed+6+nptel+courses&exp=fresher&skills=java%2C+c%2C+c%2B%2B%2C+python%2C+data+analytics%2C+communication%2C+web+development%2C+jsp%2C+advanced+java%2C+databases%2C+nodejs%2C+programming.&achievement=nptel+topper+1%25+and+2%25+in+two+courses.&p_name=Face+attendance+system&p_des=The+project+is+concerned+with+using+cctv+video+feed+systems+in+instituitions+to+tract+the+activity+and+mark+the+organisations+attendance+without+separate+system+for+attendacne+inferencing+of+staffs+using+face+recognition+mechanism.&p_link=http%3A%2F%2Fgithub.com%2FFace_Attendance_System&lp=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F&gp=https%3A%2F%2Fgithub.com%2FShivram-U&op=https%3A%2F%2Fgithub.com%2FShivram-U
*/
// In http post method the form data are not sent through url, instead they are sent through the http body.
app.get('/Build_Resume/', async (req, res) => {
    console.log(req.query);
    data = req.query;
    prompt = "Generate a resume with this data "
    prompt+="\n Name : "+data.name+"\n";
    prompt+="\n Age : "+data.age+"\n";
    prompt+="\n gender : "+data.gender+"\n";
    prompt+="\n mail : "+data.mail+"\n";
    prompt+="\n pn : "+data.pn+"\n";
    prompt+="\n Objective : "+data.objective+"\n";
    prompt+="\n school : "+data.school+"\n";
    prompt+="\n High Secondary Percentage/Grade : "+data.h_school+"\n";
    prompt+="\n SSLC Percentage/Grade : "+data.hs_school+"\n";
    prompt+="\n College name with Location : "+data.c_loc+"\n";
    prompt+="\n college grade/CGPA : "+data.c_grade+"\n";
    prompt+="\n Additional Educational Details : "+data.add+"\n";
    prompt+="\n Experience : "+data.exp+"\n";
    prompt+="\n Skills : "+data.skills+"\n";
    prompt+="\n Achievements : "+data.achievement+"\n";
    prompt+="\n Project name : "+data.p_name+"\n";
    prompt+="\n Project description : "+data.p_des+"\n";
    prompt+="\n Project source link : "+data.p_link+"\n";
    prompt+="\n Linked profile : "+data.lp+"\n";
    prompt+="\n Github profile : "+data.gp+"\n";
    prompt+="\n Other profiles : "+data.op+"\n\n";
    prompt+="the resume has to be created creatively with better formatting and  required emphasis for important data.\n"
    prompt+="The resume is should be of clear and professional format of data representation with all the fields included and it has to be built in web presentable using html and css in a professional design as a static portfolio website and include good css styles.\n"
    prompt+="please handle any grammatical errors in the data provided for resume and try to expand abbreviations provided, and ensure that the resume is hallucination proof .\n"
    console.log(prompt);
    try {
        var cont = await getResponse(prompt);
        console.log(cont);
        res.status(200).send(cont);
    } catch (error) {
        res.status(500).send("Error occurred: " + error.message);
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});