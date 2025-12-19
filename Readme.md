day-1
4/12/2025
1. Bom
   dom
2. React
3. Library
4. Npm
5. node 
6. node installation
7. create react app /vite
8. Babel -- compailer/ transpailer -convert jsx to pure js
9. statc and dynamic website

day-2

4/12/2025
1. file structucture

 work flow and folder structure of react
project/
node-module -- store dependencies
index.html -- entry html file -- Single page
src-- dynamic folder -- changes occurs
main.jsx -- app entry point
App.jsx -- main react component -- parsel casing <!-- LoginForm -->
package.json -- keep meta data of dependencies
live -- npm run dev

day-3
5/12/2025
2. comp  --  1. class
              2. fun comp
3. fun comp : js fun returns jsx element
4. jsx  - js xml
          html like syntax
5.  jsx rules
        1.retrun only one parent element
        2. embaded js using {}
        3.inline styles -- {{}}
        4. className intea of class
6. create a comp folder and file      import it in app
7. props : data passing from parent comp to child comp


day-4
8/12/2025

virtual dom - light weight copy of real dom
reconcilation - 
hooks - special fun in react
day-3

State : spacial memory inside comp that hold data which can change over time
hooks: special fun:s used to state management ,life cycle metnods and  side effect

useState : hook used to manage state.
const [state, setState] = useState(0)

day-5
9/12/2025
<!-- state task --> 
1.change background color when button click
  comp : Background changer
2. task
3.Show and Hide Button
a. Create a component with content that can be toggled visible or hidden.
b. Use a button to show or hide the content dynamically.

ternary opertor  login and $$ operator  || operator
 events:action performed by user
synthetic events : react wrap html events. 
onclick - onClick
onchange -onChange

day-6
10/12/2025
list and key
class task: 1. list some list of fruits in array(for of loop)
         2. list of vagitable and price  object 

<!-- list 
vegetables =[
  {
    name: "carrot",
    color:"orange",
    price: 30
  },
  {
   name: "potato",
   color: "brown",
   price: 20
  }
] -->


1. weather app ==> temp : 30 hot else cold
 1. need input filed 
 2. temp enter (0-55)
 3. temp bellow + image  --> && 
 

object destructuring

const student = {
  name: "Gayathri",
  age: 22,
  course: "MERN",
  city: "Chennai"
};
  const {  name,age.course,city} = student
props ={
  userName : "Malu"
  object:{
    pototype
  }
}
const {userName } = props

// Split (extract) some properties
const { name, age } = student;

console.log(name); // Gayathri
console.log(age);  // 22
task : 
Show each student’s name (from props) with a Present/Absent button.
Use state to toggle and display the attendance status.
 -->
 Router Library
 -->it helps to build single page app --
 -->used to navigate , diff pages without reloading

npm i react-router-dom


16/12/2025
useEffect --> hook handle sideeffect of the comp

sEffect -- > hook in react -- handling side effect 


 login --> post ---> api
navigate to dashboard
--> render --> side effect  --> products api -->

useEffect ??
syntax:



useEffect(()=>{
  <!-- side effect code -->
})

case: 1 --> run after all renders
useEffect(()=>{
  <!-- side effect code -->
})

case: 2 --> run after initial render

useEffect(()=>{
  <!-- side effect code -->
},[])
dependancy - array - second argument in useEffect

case: 3 --> run after state change  render

const [name, setNAme] =useState("")

useEffect(()=>{
  <!-- side effect code -->
},[name,age])

 console : 1.you are logged in  all
 alert : 2. the page is loaded   []
 alert : 3.you are loggedin / you are not loggedin  [state]


 Fragments

 <>
  <>
 </>
 </>
