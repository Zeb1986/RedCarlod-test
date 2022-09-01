import React, { useState} from 'react';


export const Form = () => {
    const [inputValues, setInputValues] = useState({ 
        firstname: '',
        lastname: '',
        streetAdr: '',
        streetAdr2: '',
        city: '',
        state: '',
        postal: '',
        phone: '',
        mail: '',
      });

    const handleOnChange = event => {
    const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };
    
    const handleSubmit = event => {
        console.log(inputValues)
        event.preventDefault();
    }


   

    return (
        <div className="container">
            <img src={require('../assets/RedCarlos.png')} alt="Red Carlos"></img>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>
                    Full Name&nbsp;&nbsp;<span>*</span>           
                </legend>
                <p>
                    <input type="text" name='firstname' className='inputShort firstShort' value={inputValues.firstname} onChange={handleOnChange} />                    
                    <label htmlFor="firstname">First Name</label>
                </p>
                <p>
                    <input type="text" name='lastname' className='inputShort' value={inputValues.lastname} onChange={handleOnChange} />                    
                    <label htmlFor="lastname">Last Name</label>
                </p>
            </fieldset>          
            <fieldset>
                <legend>
                    Adress&nbsp;&nbsp;<span>*</span>           
                </legend>
                <p>
                    <input type="text" name='streetAdr' className='inputLong' value={inputValues.streetAdr} onChange={handleOnChange} />
                    <label htmlFor="streetAdr">Street Adress</label>
                </p>
                <p>
                    <input type="text" name='streetAdr2' className='inputLong' value={inputValues.streetAdr2} onChange={handleOnChange} />
                    <label htmlFor="streetAdr2">Street Adress Line 2</label>
                </p>
                <p>
                    <input type="text" name='city' className='inputShort firstShort' value={inputValues.city} onChange={handleOnChange} />
                    <label htmlFor="city">City</label>
                </p>
                <p>
                    <input type="text" name='state' className='inputShort' value={inputValues.state} onChange={handleOnChange} />
                    <label htmlFor="state">State / Province</label>
                </p>
                <p>
                    <input type="text" name='postal' className='inputLong' value={inputValues.postal} onChange={handleOnChange} />
                    <label htmlFor="postal">Postal/Zip Code</label>
                </p>
            </fieldset>
            <fieldset>
                <legend>
                    Phone Numner&nbsp;&nbsp;<span>*</span>           
                </legend>
                <p>
                    <input type="tel" name='phone' className='inputShort' placeholder='(000)000-0000' value={inputValues.phone} onChange={handleOnChange} />
                </p>
            </fieldset>
            <fieldset>
                <legend>
                    E-mail&nbsp;&nbsp;<span>*</span>           
                </legend>
                <p>
                    <input type="email" name='mail' className='inputShort' placeholder='ex: email@yahoo.com' value={inputValues.mail} onChange={handleOnChange} />
                    <label htmlFor="mail">exemple@exemple.com</label>
                </p>
            </fieldset>                   
          <hr/>
          <input type="submit" value="Submit" className='submit'/>
        </form>
        </div>
      );
}