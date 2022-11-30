import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const BookingModal = ({phone,setPhone}) => {
    const{name,resale_price,picture}=phone;
    const{user}=useContext(AuthContext);
    const handleBooking =event =>{
        event.preventDefault();
        const form =event.target;
        const location =form.location.value;
        const number =form.number.value;
        const booking ={
            Name:`${user.displayName}`,
            email:`${user.email}`,
            location,
            number,
            picture:`${picture}`,
            product:`${name}`,
            price:`${resale_price}`
        }
        console.log(location,number);
        console.log(booking);
        fetch('https://b612-used-products-resale-server-side-inky.vercel.app/bookings',{
        method: 'POST',
        headers:{
            'content-type' :'application/json'
        },
        body: JSON.stringify(booking)
        })
      .then(res=>res.json())
      .then(data=>{console.log(data);
        if(data.acknowledged){
            setPhone(null);
        toast.success('booking confirmed')
        }
        else{toast.error(data.message)}
    })

    }
    return (
        <>
          <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    
    <form onSubmit={handleBooking}>
    <input type="text" disabled defaultValue={name} className="input my-5 input-bordered w-full max-w-xs " />
    <input type="text" disabled defaultValue={user?.displayName} className="input my-5 input-bordered w-full max-w-xs " />
    <input type="text" disabled defaultValue={user?.email} className="input my-5 input-bordered w-full max-w-xs" />
    <input type="text" disabled defaultValue={resale_price} className="input my-5 input-bordered w-full max-w-xs " />
    <input type="text" name='location'placeholder=" Meeting Location" className="input my-5 input-bordered w-full max-w-xs" required />
    <input type="text" name='number' placeholder="phone number" className="input my-5 input-bordered w-full max-w-xs" required />
    <input className='w-full max-w-xs btn btn-primary' type='submit' value='submit'></input>
    <Toaster></Toaster>
    </form>
  </div>
</div>  
        </>
    );
};

export default BookingModal;