import React from "react"
import styled from "styled-components"

const base =  {
    locationCityId: "locationCity",
    locationAddressId: "locationAddress",
    formClass : "locationForm"
}

const FormWrapper = styled.section`
    background: linear-gradient(180deg, #FFF9F4 1.12%, #B0CAC7 100%);
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25), -4px -8px 2px rgba(248, 239, 239, 0.25);
    width: 528px;
    height: 701px;
    left: 74px;
    top: 133px;
    display: flex ;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-weight: bold;
    flex-direction: column;
`
const NextButton = styled.button`
    background: #001244;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25), -2px -4px 2px rgba(243, 240, 240, 0.4);
    width: 155px;
    height: 43px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    line-height: 24px;
    text-align: center;
    color: #FFF9F4;
    margin: 24px;
    border-radius: 40px;
`

export default function LocationForm () {
    
    const handleSubmit = event => {
        event.preventDefault()
    }

    return(
        <FormWrapper>
            <h1>Now lets talk about where it is:</h1>
        <form className = {base.formClass} onSubmit = {handleSubmit}>
                <label htmlFor ={base.locationCityId}>in which city is your space located</label>
                <br></br>
                <input 
                    id = {base.locationCityId}
                    name = {base.locationCityId}
                    type = "text"
                ></input>
                <br></br>

                <label htmlFor ={base.locationAddressId}>and the address</label>
                <br></br>
                <input  
                    id = {base.locationAddressId}
                    name = {base.locationAddressId}
                    type = "text"
                ></input>
                <br></br>
                <NextButton type="submit" id={base.submitId} value="submit">next</NextButton>
            </form>
        </FormWrapper>
    )
}