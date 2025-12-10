function StudentList(){
    let students = [
'Poornima M',
'Lakshaya .R',
'SANJAIRAM T J',
'Visvesvaran G',
'RIYAS BASHA A',
'Brammanayagan S',
'jegadeeshwaran m',
'Naveen E',
'RAMESH M',
'RAJ BHARATH R',
'Nithyasri B',
'Gowsalya P',
'NIRMAL',
'Durga Pandi',
'Senthilkumar',
]
    return(
        <div className="StudentLIST">
<ol>
{
    students.map((student,index)=>(
<li key={index}>{student}</li>
    )
)
}
</ol>

        </div>
        
    )
}

export default StudentList;