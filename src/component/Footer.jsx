import React from 'react'

function Footer() {
  return (
   <>
   <div className='container-fluid footback bg-black'>
                <h1 className='Fheading' style={{color:'white', fontSize:50}}>The easiest way to grow your <br />restaurant online.</h1>
                <button className='btn btn-lg btn-dark '>Get a Free Demo</button>
                <footer>
                    <div className="container-fluid foot">
                        <div className="row">
                            <div className='col-md-2'>
                                <img src="https://fleksa.com/wp-content/uploads/2023/01/4-3.png" alt="" className='img12 footimg' />
                                <br /><br />
                                <h4>Fleksa, Inc.</h4>
                                <p>10900 Research Blvd 160c 1059
                                    Austin, TX 78759, USA
                                    +1 512-777-0405</p>
                                <h4>Fleksa GmbH</h4>
                                <p>Friesstraße 20
                                    60388 Frankfurt
                                    Germany
                                    +49 69 96759490</p>

                            </div>
                            <div className='col-md-2'>
                                <h4>MENU</h4>
                                <p>Home</p>
                                <p>Blogs</p>
                                <p>Contact</p>
                                <p>Fleksa Delivery</p>
                                <p>Tap to Pay on Android</p>
                                <p>Tap to Pay on iPhone</p>
                                <p>Restaurant Hub</p>

                            </div>
                            <div className='col-md-2'>
                                <h4>FOR PARTNERS</h4>
                                <p>Partner Login</p>
                                <p>Eatarian</p>
                                <p>Referral</p>
                                <p>Downloads</p>

                            </div>
                            <div className='col-md-2'>
                                <h4>RESTAURANT TYPES</h4>
                                <p>Nightclub & Bar</p>
                                <p>Cafe & Bakery</p>
                                <p>Quick Service Restaurant</p>
                                <p>Fine Dining Restaurant</p>

                            </div>
                            <div className='col-md-2'>
                                <h4>INTEGRATION</h4>
                                <p>Order With Google</p>
                                <p>Reserve With Google</p>
                                <p>Lieferando</p>
                                <p>Uber Eats</p>
                                <p>Wolt</p>

                            </div>
                            <div className='col-md-2'>
                                <h4>REFERENCE</h4>
                                <p>Terms & Conditions</p>
                                <p>Privacy Policy</p>
                                <p>Imprint</p>

                            </div>
                        </div>
                        <br /><br />
                        <div className='row'>
                            <div className='col-md-6'>
                                <p>Support Your Local Powered by Fleksa</p>
                            </div>
                            <div className='col-md-6' style={{ textAlign: "end" }}>
                                <p>© All rights reserved by Fleksa</p>
                            </div>
                        </div>

                    </div>
                </footer>
            </div>
   </>
  )
}

export default Footer
