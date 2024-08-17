import { useState } from 'react';
import Input from './Input';

const Navbar = (props) => {
    // State to control the visibility of the input form
    const [info, setinfo] = useState(false);

    return (
        <div className="navbar bg-black px-[10%]">
            {/* Navbar start section with logo and title */}
            <div className="navbar-start">
                {/* Logo image */}
                <img 
                    src={require('../image/abs-help.png')} 
                    alt="image not found" 
                    className='h-[45px] rounded-3xl' 
                />
                {/* Navbar title */}
                <p className="text-white text-xl pl-3">Abstract | Help Center</p>
            </div>
            
            {/* Navbar end section with button */}
            <div className="navbar-end">
                {/* Button to open the input form */}
                <button 
                    className="btn text-l" 
                    onClick={() => setinfo(true)}
                >
                    Submit a request
                </button>
            </div>

            {/* Conditional rendering of the Input component */}
            {info &&         
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                {/* Modal-like container for the Input component */}
                <div className="bg-white p-4 rounded">
                    <Input 
                        setinfo={setinfo} 
                        list={props.list} 
                        setreload={props.setreload} 
                        reload={props.reload}
                    />
                </div>
            </div>}
        </div>
    )
}

export default Navbar;
