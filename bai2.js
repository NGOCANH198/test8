let course =[
    {
        id: 1,
        name: 'HTML',
        complete: false,
    },
    {
        id: 2,
        name: 'CSS',
        complete: false,
    },
    {
        id: 3,
        name: 'Node Package Manager',
        complete: false,
    },
    {
        id: 4,
        name: 'JavaScript ',
        complete: false,
    },
    {
        id: 5,
        name: 'Git',
        complete: false,
    },
];
 for( let i of course){
        console.log(i)
}
let command = prompt("please enter : New ,Delete,Update,Complete");
if(command === 'New'){
    let nameCourse = prompt("please enter the new course");
    let newCourse = {
        id: course.length +1,
        name: nameCourse,
        complete: false,
    };
    course.push(newCourse);
    for( let i of course){
        console.log(i)
    }
}

else if(command ==='Delete'){
   let id = prompt("please enter the id you want to delete");
   if(course.indexOf(id)){
       course.splice(id-1,1);
   } 
   for( let i of course){
    console.log(i);
   }
} 
else if(command ==='Complete'){
    let id = prompt("please enter the course are completed");
    for( let i of course){
        if(i.id === id){
            i.complete = true;
        }
       }
     for( let i of course){
        console.log(i)
       }
 } 
 else if(command ==='Update'){
    let id = prompt("enter the id you want to update");
    for( let i of course){
        if(i.id === id){
           let nameUpdate = prompt("enter the course you want to update")
           i.name = nameUpdate;
        }
       }
     for( let i of course){
        console.log(i)
       }
 } 