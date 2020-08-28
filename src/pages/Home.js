import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Form, Col, Button, Container } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { useSelector } from "react-redux"
import Spaces from '../components/viewSpaces/Spaces';
import queryString from 'query-string';
import SearchForm from './SearchForm';

let spaces = [
  {
    id: 1,
    name: "Parqueadero",
    images : ["https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80","https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80","https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"],
    area : 50,
    width: 10,
    length: 5,
    height: 5,
    city: "Barranquilla",
    address: "Calle 79#59-43",
    spaceTags: ["Primero","Segundo","Tercero"]
  },{
    id: 2,
    name: "Parqueadero 2 ",
    images : ["https://images.unsplash.com/photo-1563986768817-257bf91c5753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=785&q=80","https://images.unsplash.com/photo-1588091209794-8aa1768e2937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=348&q=80","https://images.unsplash.com/photo-1585144860131-245d551c77f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=521&q=80"],
    area : 100,
    width: 20,
    length: 10,
    height: 10,
    city: "Bogotá",
    address: "Calle 51#29-43",
    spaceTags: ["Cuarto","Quinto","Sexto"]
  }
]

const Home = () => {
  const area = useSelector(state => state.searchFormReducer.area)
  const location = useSelector(state => state.searchFormReducer.location)
  const initialDate = useSelector(state => state.searchFormReducer.initialDate)
  const finalDate = useSelector(state => state.searchFormReducer.finalDate)


  let range = 15

  const history = useHistory();  
  let queryStr = "";  

  const handleSubmit = (event) => {
    event.preventDefault();
    let qs = {}
    qs.area =  `${area}-${parseInt(area) + range}`
    qs.location = location.toUpperCase()
    qs.inDate = initialDate
    qs.finDate = finalDate 

    queryStr= queryString.stringify(qs)
    history.push("/viewSpaces?"+queryStr)
  }

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit} />
      
    <h3>Best Rated Locations</h3>
    <Spaces spaces={spaces}  />
    
    </Container>
      
  );
};

export default Home;