import React from 'react'

function Login() {
    return (
        <>
             <div className='container-fluid p-3 mb-2 bg-black'>
                <div className='row'>
                    <div className='col-md-8'>
                        <img src="https://partner.fleksa.com/assets/logos/logo-dark.png" alt="" className=' La' />
                        <br /><br />
                        <h2 className='text-center ll'>All-in-one solution for Restaurants</h2>
                        <br /><br />
                        <div className='container text-center lll'>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <img src="https://partner.fleksa.com/assets/graphics/fleksa/login_support_1.jpg" alt="" />
                                    <div className='llll'>
                                        <p>One Dashboard, Total Control Manage Your Restaurant from Anywhere.</p>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <img src="https://partner.fleksa.com/assets/graphics/fleksa/login_support_2.jpg" alt="" />
                                    <div className='llll'>
                                        <p>All-in-One Restaurant POS Orders, Payments & Operations Simplified.</p>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <img src="https://partner.fleksa.com/assets/graphics/fleksa/login_support_3.jpg" alt="" />
                                    <div className='llll'>
                                        <p>Effortless Marketing. Maximum Impact. Automate Engagement & Boost Loyalty.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='col-md-4 lllll' style={{paddingTop:100}}>
                            <h2 className='text-center' style={{color:'white'}}>Welcome Back!</h2>
                        <p className='text-center'>Sign in to your account</p>
                        <form>
                            <label style={{color:'white'}}>Email</label>
                            <input type="text" className="form-control" name='a' placeholder='Email' required />
                            <br />
                            <label  style={{color:'white'}}>Password</label>
                            <input type="password" className="form-control" name='b' placeholder='Password' required />
                        </form>
                        <br /><br />
                        <button className='btn btn-warning w-100'>Sign in</button>
                        <p className='text-center'>Don't have an account? Sign Up</p>

                    </div>
                </div>
                </div>
           
           
        </>
    )
}

export default Login
