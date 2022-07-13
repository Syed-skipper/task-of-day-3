1. JSON iterate Loops :
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
