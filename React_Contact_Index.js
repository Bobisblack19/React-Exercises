import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

//we load the Hook tool using useState so we can use the state tool outside of classes, then we create an function that allows us to add people to the list and serves as the source of our list

function AddPersonForm(props) { 
  const [ person, setPerson ] = useState('');
    
  function handleChange(e) {
    setPerson(e.target.value);
  }
  
  // the value here will be taken from the input in the return section

  function handleSubmit(e) {
    if(person !== '') {
      props.handleSubmit(person);
      setPerson('');
    }
    e.preventDefault();
  }

  // this acts as a check to ensure that no blank submissions are accepted
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="Add new contact" 
        onChange={handleChange} 
        value={person} />
      <button type="submit">Add</button>
    </form>
  );
}

function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

// To accomplish adding a new contact to our PeopleList when the form is submitted,  we need to share the state between the components. 
// We can do that by lifting the state up to a parent component. This means that the parent component will hold the data that needs to be shared between the components. 
// The ContactManager component receives the initial contacts list using props, saves it in its state. Then it passes down the contacts list to its child component.

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  // like we passed down data using props, React allows us to pass down function references allowing us to access the earlier functions and alter them. Using that we create an addPerson() function to our ContactManager component to add a new person to our contacts state array

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  //Similar to passing the contacts list to our PeopleList component, we passed down the addPerson() function to our AddPersonForm using a prop called handleSubmit.

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}
const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

ReactDOM.render(
  <ContactManager data={contacts} />, 
  document.getElementById('root')
);
