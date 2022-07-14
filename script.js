//1. JSON iterate Loops :
// example of for loop
var arr=[
    {
     "name": "jhon",
     "age": "23",
    },
    {
     "name": "syed",
     "age": "24",
    },
    {
     "name": "sulthan",
     "age": "25",
    },
    {
     "name": "sam",
     "age": "26",
     }];

for(i=0; i<arr.length; i++)
{
    console.log(arr[i].name+" "+arr[i].age);
}

// example of for-in-loop
var arr=[
    {
     "name": "jhon",
     "age": "23",
    },
    {
     "name": "syed",
     "age": "24",
    },
    {
     "name": "sulthan",
     "age": "25",
    },
    {
     "name": "sam",
     "age": "26",
     }];


for(var i in arr){
    console.log(i,arr[i]);
    }

    //2. Resume Data On JSON :

    var resume=[{"basics":[
                {"name":"Syed Sulthan A", 
                 "Address":"Muslim South Street Natham",
                 "Email":"syedsulthan868@gmail.com",
                 "Mobile Number":"9597203734",
                }],
                
      "Carrier Objective":[{ "1.":"To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills.Secure a responsible        career opportunity to fully utilize my training and skills, while making a significant contribution to the success of the company." }],         
                
      "Educational Qualification":[
                                    {"qualification":"B.Sc computer science",
                                     "institution":"MK University",
                                     "Year of Passing":"2021",
                                     "percentage":"70",        
                                    },
                                    {"qualification":"12th",
                                     "institution":"De Nobili School",
                                     "Year of Passing":"2018",
                                     "percentage":"64",
                                    },
                                    {"qualification":"10th",
                                     "institution":"R.c matric school",
                                     "Year of Passing":"2016",
                                     "percentage":"84.8",
                                     }],
                "other":[{
                 "Skills":"1. basics of html and css, 2. ms word & excel, 3.fast learner",
                 "conclusion":"i do hereby declare the above furnished information is true to my knowledge and belief",
                 "place":"maduai",
                 "date":"13-07-2022"
                       }],
                
       }]
            
    console.log(resume);





































