import React, { useState, useEffect } from 'react';


export const Form = () => {
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
        firstName: 'Can not be empty',
        lastName: 'Can not be empty',
        streetAdr: 'Can not be empty',
        streetAdr2: 'Can not be empty',
        city: 'Can not be empty',
        state: 'Can not be empty',
        postal: 'Can not be empty',
        phone: 'Can not be empty',
        mail: 'Can not be empty',
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
            setInputError({ ...inputError, [name]: 'Can not be empty' });
        } else {
            setInputError({ ...inputError, [name]: '' });
        }       
        if (name === 'phone' && !/\(\d{3}\)\d{3}-\d{2}-\d{2}/.test(String(value))) {
            setInputError({ ...inputError, [name]: 'Enter correct phone' });
        }
        if (name === 'mail' && !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(String(value).toLowerCase())) {
            setInputError({ ...inputError, [name]: 'Enter correct mail' });
        }
    };
    
    // const emptyCheck = (event) => {
    //     const { name, value } = event.target;       
    //     if (value === '') {
    //         setInputError({ ...inputError, [name]: 'Can not be empty' });
    //     } else {
    //         setInputError({ ...inputError, [name]: '' });
    //     }
    // }

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
                    {(inputDirty.firstName && inputError.firstName) && <div style={{color: 'red'}}>{inputError.firstName}</div>}
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
                    {(inputDirty.lastName && inputError.lastName) && <div style={{color: 'red'}}>{inputError.lastName}</div>}   
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
                    {(inputDirty.streetAdr && inputError.streetAdr) && <div style={{color: 'red'}}>{inputError.streetAdr}</div>}
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
                    {(inputDirty.streetAdr2 && inputError.streetAdr2) && <div style={{color: 'red'}}>{inputError.streetAdr2}</div>}
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
                    {(inputDirty.city && inputError.city) && <div style={{color: 'red'}}>{inputError.city}</div>}
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
                    {(inputDirty.state && inputError.state) && <div style={{color: 'red'}}>{inputError.state}</div>}
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
                    {(inputDirty.postal && inputError.postal) && <div style={{color: 'red'}}>{inputError.postal}</div>}
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
                    {(inputDirty.phone && inputError.phone) && <div style={{color: 'red'}}>{inputError.phone}</div>}
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
                    {(inputDirty.mail && inputError.mail) && <div style={{color: 'red'}}>{inputError.mail}</div>}
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