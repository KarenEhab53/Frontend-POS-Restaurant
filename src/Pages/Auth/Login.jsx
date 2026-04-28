import styles from "./Login.module.css"
function Login (){
    return( 
        <div className={`${styles.login} col-12 col-lg-6`}>
            <h3>Welcome to the system manager</h3>

            <form className={styles.TheForm}>
                <label htmlFor="gmail">Email</label>
                <input id="gmail" type="email" placeholder="username@gmail.com" required/>

                <label htmlFor="password">password</label>
                <input id="password" type="password" placeholder="password" required/>


                <a href="">forget password</a>
                <button type="submit">Sign In</button>
            </form>

        </div>
        


    );
}

export default Login ;