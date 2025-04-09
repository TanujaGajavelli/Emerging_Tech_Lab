import React, { useState } from 'react';
const Password = () => {
    const [password,setPassword]=useState('');
    const [visible,setVisible]=useState(false);
    return (
        <div className='d-flex justify-content-center'>
            <input type={visible?'text':'password'}
                placeholder='Enter your password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
            />
            <div className='ps-1 pe-1' onClick={() => setVisible(!visible)} style={{border:"1px solid black"}}>
                {visible?"Hide":"Show"}
            </div>
        </div>
    );
};

export default Password;
