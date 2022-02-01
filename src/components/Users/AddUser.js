import React, {useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

   const addUserHandler = (event) =>{
       event.preventDefault();
       
       // used for validation, trim() cleaned white spaces from string values 
       if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
       {
         return;
       }

       // age is string but we validate with number, + forced value for typecasting 
       if(+enteredAge < 1)
       {
         return;
       }
       console.log(enteredUsername, enteredAge);
       setEnteredUsername('');
       setEnteredAge('');
   };

   const usernameChangeHandler = (event) => {
    //(event.target.value) fetched value from username input    
       setEnteredUsername(event.target.value);
   };

   const ageChangeHandler = (event) => {
       setEnteredAge(event.target.value);
   };

   return (
     <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type="number" value={enteredAge} onChange={ageChangeHandler}></input> 
        <Button type='submit'>Add User</Button>
    </form>
    </Card>
  );
};

export default AddUser; 
