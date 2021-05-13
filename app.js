/*1st Attempt-array list of objects...*/

//let resume = [
//     {
//         name: "Daesy"
//     },
//     {
//         career: "Creative / Student"
//     },
//     {
//         description: "I like pickles(:"
//     },
//     {
//         interests =["Art", "Cooking", "Space", "Mother Earth"],
//     },
//     {
//         positions =[]
//     }
// ];

// console.log(resume.name);

/*2nd Attempt-object containing items and arrays?...*/

// let resume = {
//     name: "Daesy",
//     career: "Creative / Student",
//     description: "I like pickles(:",
//     interests: ["Art", "Cooking", "Space", "Mother Earth"],
//     positions: [
//        "Agent Assist at WellsFargo - Assisted with special projects and offered credible alternative options regarding process initiation, work structuring, utilization of resources to new hires ",
//        "Claims Specialist at WellsFargo - Handled and resolved cardholder inquiries about fraud or merchant disputes in a friendly and courteous manner ",
//        "Partner Support at Insight - Worked direclty with partners via chat, phone, and email to ensure high quality customer service for cardholders "
//     ],
//     skills: ["Bilingual", "Strong Work Ethic", "Swift", "Creative", "Quick Learner", "First Aid", "Certified Exorcist"]
// };

// // console.log(resume); <--prints out as full object!

// console.log("Name: " + resume.name);
// console.log("Career: " + resume.career);
// console.log("Description: " + resume.description);
// console.log("Interests: " + resume.interests);
// console.log("Positions: " + resume.positions);
// console.log("Skills: " + resume.skills);

// let myName = resume.name;
// let allCaps = myName.toUpperCase;

// console.log("Name: " + allCaps)

/************************************************************************************/
//***INSTRUCTIONS***/
// Your "resume" will simply be a series of console.log statements to print the resume data to the console.
// When you open index.html in the browser, it will be a blank page. That's okay. Your resume will be in the console. (command + option + I, or F12)
// Your resume should display the following information:
// Your name
// Your career/field
// A short description of yourself
// A list of your interests
// A list of your past positions that includes company/place name, title, short description of what you did
// A list of your skills
// You can make up information if you'd like
// In your skill list, skills that are "cool" should begin with BAM:
// Your name should print in all capital letters, but you must not type it as all capitalized in your code (i.e. you will need to use JavaScript to capitalize it)
// You must have a function called displayPosition that takes parameters for company name, job title, and description. The function should console.log those three items in a format similar to the entries in the "My Previous Experience" section of the example below. You will call displayPosition several times with different data to create each entry for the "My Previous Experience" section.
// You must have a function called displaySkill that takes parameters for skill name and a boolean value for whether the skill is cool (true/false). Inside the function, you should print BAM: in front of the skill name only if the skill is cool. If you don't have any cool skills, make some up. Use this function to display each entry in the "My Skills" section.
/***********************************************************************************/

/*3rd Attempt*/

let name = "Daesy";
let allCapsName = name.toUpperCase();
console.log("Name: " + allCapsName);

let career = "Creative / Photographer / Student";
console.log("Career: " + career);

let description = "I like pickels(:";
console.log("Description: " + description);

let interests = ["Art", "Cooking", "Space", "Mother Earth", "Physics"];
//console.log("My Interests: " + interests);
console.log("\nMy Interests:");
//console.log(interests);

function displayInterests(str) {
    console.log("* " + str);
}
displayInterests("Art");
displayInterests("Cooking");
displayInterests("Space");
displayInterests("Mother Earth");
displayInterests("Physics");

let positions = [
    "Agent Assist at WellsFargo - Assisted with special projects and offered credible alternative options regarding process initiation, work structuring, utilization of resources to new hires ",
    "Claims Specialist at WellsFargo - Handled and resolved cardholder inquiries about fraud or merchant disputes in a friendly and courteous manner ",
    "Partner Support at Insight - Worked directly with partners via chat, phone, and email to ensure high quality customer service for cardholders "
];
//console.log("My Previous Experience: " + positions);
console.log("\nMy Previous Experience: ");
//console.log(positions);

function displayPosition(companyName, jobTitle, jobDescription) {
    console.log("* " + jobTitle + " at " + companyName + " - " + jobDescription);
}

displayPosition("WellsFargo", "Agent Assist", "Assisted with special projects and offered credible alternative options regarding process initiation, work structuring, utilization of resources to new hires");
displayPosition("WellsFargo", "Claims Specialist", "Handled and resolved cardholder inquiries about fraud or merchant disputes in a friendly and courteous manner");
displayPosition("Insight", "Partner Support", "Worked directly with partners via chat, phone, and email to ensure high quality customer service for cardholders");


let skills = ["Bilingual", "Strong Work Ethic", "Swift", "Creative", "Quick Learner", "First Aid", "Certified Foodie"];
//console.log("My Skills: " + skills);
console.log("\nMy Skills: ");
//console.log(skills);


// function displaySkill(skillName, skills = cool){

function displaySkill(mySkill, bam) {
    if (bam == true) { //If (bam) true prints BAM: and 'mySkill'.
        console.log("*  BAM: " + mySkill);
    } else if (bam == false) {
        console.log("*  " + mySkill); //Else If (bam) false prints just 'mySkill'.
    };
};

displaySkill("Bilingual", true);
displaySkill("Strong Work Ethic", false);
displaySkill("Swift", true);
displaySkill("Creative", true);
displaySkill("Quick Learner", false);
displaySkill("First Aid", false);
displaySkill("Certified Foodie", true);
