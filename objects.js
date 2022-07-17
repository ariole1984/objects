
let person = {
   name: "ariole",
   lastName: "Dieujuste",
   age: 48,
   inClass: true,
   classesTaught: ['Javascript','arrays']
}
    console.log(person.name)
    console.log(person["name"])
    console.log(person["classesTaught"][0])


    let person = {
        name: "ariole",
        lastName: "Dieujuste",
        age: 48,
        inClass: true,
        classesTaught: ['Javascript','arrays']
       
     }
     
    
    
    let {name, age} = person
       console.log(name)
       console.log(age)
         
       person.name ="ariole" //edit
       person.hasGlasses = true // add new property
       console.log(person);

       person.Age = 21 // mistyped age.
       console.log(person)

    const allProps = Object.keys(person)
    console.log(allProps)
    const hasAge = allProps.indexOf("age") != -1
    console.log(hasAge)

    




    let person = {
        name: "Dragana",
        lastName: "Simonovska",
        age: 31,
        inClass: true,
        
     }

console.log(person)
//change age to 2
person.age = 23
console.log(person)




let teacher = {
    name:"Darie",
    classes:[],
    currentlyTeaching: true,
    hairStyle: null,
 }
     
    Teacher.Classes.push("array")
    teacher.classes.push("objects")
    cconsole.log("Teacher's name,Teachers. )
    console.log(classes)
    console.log(teacher)







let TeacherAssistant = {
  name: "Juice",
  inClass: true,
  

}

  console.log(TeacherAssistant)
  TeacherAssistant.Classes = []
  TeacherAssistant.Classes.push("array")
  console.log(TeacherAssistant)

let TeacherAssistants []

let TeacherAssistants = {
Name; "Matt",
inClass: false,

}

    TeacherAssistant.push(TeacherAssistans)
    console.log(TeacherAssistants)

TeacherAssistant.Name="Manny"
    TeacherAssistants.push(TeacherAssistant)
    console.log(TeacherAssistants)





