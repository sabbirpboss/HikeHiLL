import React from 'react';
import logo from '../../images/LOGO.png';

const AboutUs = () => {
    return (
        <div className='container my-5'>
            <div className='mb-5 w-50 mx-auto'>
                <img src={logo} alt="" />
            </div>
            <h2 className='text-info'>Hike Hill</h2>
            <p>Best CHoise For Hiking Gears</p>
            <p><small>The Hiking Gears is a compilation of tips and advice on trip planning, lightweight backpacking techniques, and improving your wilderness skill set. It contains detailed information for more than 200 of the world's great hikes and was put together with the mission of inspiring and enabling folks to go backpacking.</small></p>
        </div>
    );
};

export default AboutUs;