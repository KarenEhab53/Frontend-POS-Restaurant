
import styles from "./Register.module.css"

function Register (){
    return(
        <div className={`${styles.Register} col-12 col-lg-6`}>
                   <h3>Welcome to the system manager</h3>

            <form className={styles.Info}>
                <div className={styles.nameContainer}>
                
                <div className={styles.Name}>
                    <div className={styles.Namedata}>
                    <label htmlFor="FirstName">FirstName</label>
                    <input id="FirstName" type="text" placeholder="FirstName" required/>
                    </div>
                    
                    <div className={styles.Namedata}>
                    <label htmlFor="LastName">LastName</label>
                    <input id="LastName" type="text" placeholder="LastName" required/>
                    </div>
                   
                </div>
                
                </div>
                <label htmlFor="FirstName">FirstName</label>
                <input id="FirstName" type="text" placeholder="FirstName" required/>

                <label htmlFor="LastName">LastName</label>
                <input id="LastName" type="text" placeholder="LastName" required/>

                <label htmlFor="gmail">Email</label>
                <input id="gmail" type="email" placeholder="username@gmail.com" required/>

                <label htmlFor="password">password</label>
                <input id="password" type="password" placeholder="password" required/>

                <label htmlFor="password-again">password</label>
                <input id="password-again" type="password" placeholder="write password again" required/>

                <label htmlFor="role">user-role</label>
                <select  id="role" required>
                    <option value="cashier">Cashier</option>
                    <option value="admin">Admin</option>
                </select>

                <label htmlFor="PhoneNumber">PhoneNumber</label>
                <input id="PhoneNumber" type="tel" placeholder="phone" required/>

                <a href="">Already have account</a>
                <button type="submit">Sign UP</button>

            </form>
        </div>
    );
}

export default Register;
