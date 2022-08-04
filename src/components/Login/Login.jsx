import logo from '../../../assets/logo.png';
import './Login.css'

const Login = () => {
    return (
        <div className="row g-0 app-auth-wrapper">
            <div className="col-12 col-md-12 col-lg-12 auth-main-col text-center p-5">
                <div className="d-flex flex-column align-content-end">
                    <div className="app-auth-body mx-auto">
                        <div className='border-around'>
                            <div className="app-auth-branding"><a className="app-logo" href="index.html"><img
                                className="logo-icon me-2" src={logo} alt="logo"/></a></div>
                            <h1 className="auth-welcome text-center"><span className='theme-color'>Welcome</span> Back!</h1>
                            <h2 className="auth-heading text-center continue">Login to Continue</h2>
                            <div className="auth-form-container text-start">
                                <form className="auth-form login-form">
                                    <div className="email mb-3">
                                        <label className="sr-only" htmlFor="signin-email">Email</label>
                                        <input id="signin-email" name="signin-email" type="email"
                                               className="form-control signin-email login-field" placeholder="Username or Email"
                                               required="required"/>
                                    </div>
                                    <div className="password mb-3">
                                        <label className="sr-only" htmlFor="signin-password">Password</label>
                                        <input id="signin-password" name="signin-password" type="password"
                                               className="form-control signin-password login-field" placeholder="Password"
                                               required="required"/>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className=" btn app-btn-primary w-100 theme-btn mx-auto login-field">Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login