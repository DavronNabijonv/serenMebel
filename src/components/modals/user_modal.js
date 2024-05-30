import React, { useEffect, useState } from 'react'

export default function User_modal() {
    const [userInfo,setUserInfo] = useState({
        name:String,
        last_name:String,
        phone_num:Number,
    })

    const handleChange = (e) =>{
        const {name , value} = e.target;
        setUserInfo(prevInfo => ({
            ...prevInfo,
            [name]:value
        }))
    }

  return (
    <div className='user_modal'>
        <div className='for_card'>
            <div className='form_part'>
                <label>Ismingizni kiriting:</label>
                <input type='text' placeholder={'enter your name'} name='name' value={userInfo.name} onChange={handleChange} />
            </div>
            <div className='form_part'>
                <label>Familyangizni kiriting:</label>
                <input type='text' placeholder={'enter your last name'} name='last' value={userInfo.name} onChange={handleChange} />
            </div>
            <div className='form_part'>
                <label>Ismingizni kiriting:</label>
                <input type='text' placeholder={'enter your name'} name='name' value={userInfo.name} onChange={handleChange} />
            </div>
        </div>
    </div>
  )
}