import style from "./Auth.module.css" 
import Login from "./Login";
import Register from "./Register";

function Auth (){
    return (
    <div className={style.parent}>
     <Login/>
    <Register/>
   
    </div>
    )
}
export default Auth;