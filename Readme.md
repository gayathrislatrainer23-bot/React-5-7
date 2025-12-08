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



8/12/2025

virtual dom - light weight copy of real dom
reconcilation -
hooks - special fun in react
day-3

State : spacial memory inside comp that hold data which can change over time
hooks: special fun:s used to state management ,life cycle metnods and  side effect

useState : hook used to manage state.
const [state, setState] = useState(0)


<!-- events:action performed by user
synthetic events : react wrap html events.

object destructuring
const student = {
  name: "Gayathri",
  age: 22,
  course: "MERN",
  city: "Chennai"
};
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
