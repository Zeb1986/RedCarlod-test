import React, { useState, useEffect } from 'react';


export const Form = () => {
    const emptyInput = 'Can not be empty';
    const [inputValues, setInputValues] = useState({ 
        firstName: '',
        lastName: '',
        streetAdr: '',
        streetAdr2: '',
        city: '',
        state: '',
        postal: '',
        phone: '',
        mail: '',
      });
      const [inputDirty, setInputDirty] = useState({ 
        firstName: false,
        lastName: false,
        streetAdr: false,
        streetAdr2: false,
        city: false,
        state: false,
        postal: false,
        phone: false,
        mail: false,
      });
      const [inputError, setInputError] = useState({ 
        firstName: emptyInput,
        lastName: emptyInput,
        streetAdr: emptyInput,
        streetAdr2: emptyInput,
        city: emptyInput,
        state: emptyInput,
        postal: emptyInput,
        phone: emptyInput,
        mail: emptyInput,
      });
      const [formValid, setFormValid] = useState(false)

      
      useEffect(()=>{
        for (let key in inputError) {
            if (inputError[key] !== '') {
                setFormValid(false)
                break;
            }
            if (inputError[key] === '') {
                setFormValid(true)
            }
        }
      }, [inputError])

    const handleOnChange = event => {
    const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
        if (value === '') {
            setInputError({ ...inputError, [name]: emptyInput });
        } else {
            setInputError({ ...inputError, [name]: '' });
        }       
        if (name === 'phone' && !/\d{10}/.test(String(value))) {
            setInputError({ ...inputError, [name]: 'Enter correct phone' });
        }
        if (name === 'mail' && !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(String(value).toLowerCase())) {
            setInputError({ ...inputError, [name]: 'Enter correct mail' });
        }
    };
    


    const handleSubmit = event => {
        console.log(inputValues)
        event.preventDefault();
    }

    const blurHandler = (event) => {
        const { name } = event.target;
        setInputDirty({ ...inputDirty, [name]: true });
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
                    {(inputDirty.firstName && inputError.firstName) && <span style={{color: 'red'}}>{inputError.firstName}</span>}
                    <input type="text" 
                    name='firstName' 
                    className='inputShort firstShort' 
                    value={inputValues.firstName} 
                    onChange={handleOnChange}                    
                    onBlur={blurHandler}
                    />                    
                    <label htmlFor="firstName">First Name</label>                 
                </p>
                <p>
                    {(inputDirty.lastName && inputError.lastName) && <span style={{color: 'red'}}>{inputError.lastName}</span>}   
                    <input type="text" 
                    name='lastName' 
                    className='inputShort' 
                    value={inputValues.lastName} 
                    onChange={handleOnChange} 
                    onBlur={blurHandler}
                    />                    
                    <label htmlFor="lastName">Last Name</label>
                </p>
            </fieldset>          
            <fieldset>
                <legend>
                    Address&nbsp;&nbsp;<span>*</span>           
                </legend>
                <p>
                    {(inputDirty.streetAdr && inputError.streetAdr) && <span style={{color: 'red'}}>{inputError.streetAdr}</span>}
                    <input type="text" 
                    name='streetAdr' 
                    className='inputLong' 
                    value={inputValues.streetAdr} 
                    onChange={handleOnChange} 
                    onBlur={blurHandler}
                    />
                    <label htmlFor="streetAdr">Street Adress</label>
                </p>
                <p>
                    {(inputDirty.streetAdr2 && inputError.streetAdr2) && <span style={{color: 'red'}}>{inputError.streetAdr2}</span>}
                    <input type="text" 
                    name='streetAdr2' 
                    className='inputLong' 
                    value={inputValues.streetAdr2} 
                    onChange={handleOnChange} 
                    onBlur={blurHandler}
                    />
                    <label htmlFor="streetAdr2">Street Adress Line 2</label>
                </p>
                <p>
                    {(inputDirty.city && inputError.city) && <span style={{color: 'red'}}>{inputError.city}</span>}
                    <input type="text" 
                    name='city' 
                    className='inputShort firstShort' 
                    value={inputValues.city} 
                    onChange={handleOnChange} 
                    onBlur={blurHandler}
                    />
                    <label htmlFor="city">City</label>
                </p>
                <p>
                    {(inputDirty.state && inputError.state) && <span style={{color: 'red'}}>{inputError.state}</span>}
                    <input type="text" 
                    name='state' 
                    className='inputShort' 
                    value={inputValues.state} 
                    onChange={handleOnChange} 
                    onBlur={blurHandler}
                    />
                    <label htmlFor="state">State / Province</label>
                </p>
                <p>
                    {(inputDirty.postal && inputError.postal) && <span style={{color: 'red'}}>{inputError.postal}</span>}
                    <input type="text" 
                    name='postal' 
                    className='inputLong' 
                    value={inputValues.postal} 
                    onChange={handleOnChange} 
                    onBlur={blurHandler}
                    />
                    <label htmlFor="postal">Postal/Zip Code</label>
                </p>
            </fieldset>
            <fieldset>
                <legend>
                    Phone Numner&nbsp;&nbsp;<span>*</span>           
                </legend>
                <p>
                    {(inputDirty.phone && inputError.phone) && <span style={{color: 'red'}}>{inputError.phone}</span>}
                    <input type="tel" 
                    name='phone' 
                    className='inputShort' 
                    placeholder='(000)&nbsp;000-0000' 
                    value={inputValues.phone} 
                    onChange={handleOnChange}
                    onBlur={blurHandler} 
                    />
                </p>
            </fieldset>
            <fieldset>
                <legend>
                    E-mail&nbsp;&nbsp;<span>*</span>           
                </legend>
                <p>
                    {(inputDirty.mail && inputError.mail) && <span style={{color: 'red'}}>{inputError.mail}</span>}
                    <input type="email" 
                    name='mail' 
                    className='inputShort' 
                    placeholder='ex: email@yahoo.com' 
                    value={inputValues.mail} 
                    onChange={handleOnChange} 
                    onBlur={blurHandler}
                    />
                    <label htmlFor="mail">exemple@exemple.com</label>
                </p>
            </fieldset>                   
          <hr/>
          <input disabled={!formValid} type="submit" value="Submit" className='submit'/>
        </form>
        </div>
      );
}