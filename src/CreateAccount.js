import "./App.css";
import {useState} from 'react';
import Form from 'react-bootstrap/Form';

const createAccount = () => {
    return (
        <div className="createform">
            <div>
                <h2 className="text-center">Create Accounts</h2>
            </div>
            <div>
                <label> Employee Type: </label>
                <Form.Select aria-label="Default Select">
                    <option value="worker">Worker</option>
                    <option value="manager">Manager</option>
                </Form.Select>

                <label> Employee ID: </label>
                <TextField name="userid" floatingLabelText="type user ID" value={user.userid} onChange={onChange} errorText={errors.userid}/>

                <label> Employee Name: </label>
                <TextField name="empname" floatingLabelText="type employee name" value={user.empname} onChange={onChange} errorText={errors.empname}/>

                <label> NIC Number: </label>
                <input type="Number" name="nic" floatingLabelText="Type NIC Number" value={user.nic} onChange={onChange} errorText={errors.nic}/>

                <label> Phone Number: </label>
                <input type="Number" name="phone" floatingLabelText="Type Phone Number" value={user.phone} onChange={onChange} errorText={errors.phone}/>

                <label> Email: </label>
                <input type="email" name="nic" floatingLabelText="Type NIC Number" value={user.nic} onChange={onChange} errorText={errors.nic}/>

                <label> Password: </label>
                <TextField
                    type={type}
                    name="password"
                    floatingLabelText="password"
                    value={user.password}
                    onChange={onPwChange}
                    errorText={errors.password}
                />

                <div className="pwStrRow">
                    {score >= 1 && (
                        <div>
                            <PasswordStr score={score} /> 
                            <FlatButton 
                                className="pwShowHideBtn" 
                                label={btnTxt} onClick={pwMask} 
                                style={{position: 'relative', left: '50%', transform: 'translateX(-50%)'}} 
                            />
                        </div>
                        )} 
            </div>
                <TextField
                    type={type}
                    name="pwconfirm"
                    floatingLabelText="confirm password"
                    value={user.pwconfirm}
                    onChange={onChange}
                    errorText={errors.pwconfirm}
                />
                <br />

                <button> Create Account </button>
            </div>
        </div>
    )
}

export default createAccount