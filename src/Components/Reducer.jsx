import AddStudent from './AddStudent';
import Edit from './Edit';
import Students from './Students';




const Reducer = (state="",action) =>{
    switch(action){
     case AddStudent : return <AddStudent/>
     case Edit : return <Edit/>
     default : return <Students/>
    }
}

export default Reducer;