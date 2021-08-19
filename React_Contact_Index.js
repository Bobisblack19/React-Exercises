import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function AddPersonForm(props) {
  const [ person, setPerson ] = useState('');
  const [ address, setAddress] = useState('');
  const [ phone, setPhone] = useState('');
    
  function handleChange(e) {
    setPerson(e.target.value);
  }
  
  function handleAddChange(e) {
    setAddress(e.target.value);
  }
  
  function handlePnumChange(e) {
    setPhone(e.target.value);
  }

  function addPerson() {
    props.addPerson(person)
  }

  function addAddress() {
    props.addAddress(address)
  }

  function addNumber() {
    props.addNumber(phone)
  }

  function handleSubmit(e) {
    setPerson('');
    setAddress('');
    setPhone('');
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="Name" 
        onChange={handleChange} 
        value={person} />
      <button type="submit" onClick={addPerson}>Add</button>
      <input type="text" 
        placeholder="Address" 
        onChange={handleAddChange} 
        value={address} />
      <button type="submit" onClick={addAddress}>Add</button>
      <input type="text" 
        placeholder="Phone" 
        onChange={handlePnumChange} 
        value={phone} />
      <button type="submit" onClick={addNumber}>Add</button>
    </form>
  );
}

function PeopleList(props) {
  const arr = props.names;
  const arr2 = props.address;
  const arr3 = props.phone;
  const Names = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  const Address = arr2.map((val, index) =>
  <li key={index}>{val}</li>)
  const Phone = arr3.map((val, index) =>
  <li key={index}> {val}</li>)
  return <div className="mytable">
    <h2>Name</h2>
    <ul className="cells">{Names}</ul>
    <h2>Address</h2> 
    <ul className="row">{Address}</ul>
    <h2>Phone Number</h2>
    <ul className="row">{Phone}</ul>
  </div>;
}

function ContactManager(props) {
  const [names, setNames] = useState(props.name);
  const [address, setAdd] = useState(props.add);
  const [numbers, setPhone] = useState(props.pnum)

  function addPerson(name){
    setNames([...names, name])
  }

  function addAddress(add){
    setAdd([...address, add])
  }

  function addNumber(pnum){
    setPhone([...numbers, pnum])
  }
  return (
    <div>
      <AddPersonForm addPerson={addPerson} addAddress={addAddress} addNumber={addNumber}/> 
      <PeopleList names={names} address={address} phone={numbers} />
    </div>
  );
}
const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];
const address = ["24 Garvston Road", "321 Maravichko Place", "One Wayne Manor"];
const numbers = [2073457682, 3460902432, 4398099786];

ReactDOM.render(
  <ContactManager name={contacts} add={address} pnum={numbers} />, 
  document.getElementById('root')
);
