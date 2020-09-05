import React, {useState} from "react"
import {Card, Button, Accordion, Badge, Form} from "react-bootstrap"
import { Pencil } from "react-bootstrap-icons"
import { Formik } from "formik"
import * as Yup from "yup";

export default function GeneralInfoAdministrator ({space}) {
    const [isUpdatingSate, setIsUpdatingState] = useState(false)
    
    const handleSubmit = values => {
        console.log(values)
        console.log("saving")
    }
    const eventKeyUpdatingState = "0"

    return (
        <Formik
        initialValues = {{...space}}
        onSubmit = {handleSubmit}
        >
        {({
        handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, setValues
        }) => (
            <Form onSubmit={handleSubmit}>
                <Card className="text-center">
                    <Card.Header>INFORMATION</Card.Header>
                    <Card.Body>
                    <Card.Title><Form.Label>SPACE DESCRIPTION</Form.Label></Card.Title>
                    <Card.Text>
                        {isUpdatingSate ? (
                        <Form.Control 
                            name="additionalInfo" 
                            type="textArea" 
                            placeholder={space.additionalInfo || "i am a testing test"}
                            value={values.additionalInfo}
                            onChange={handleChange}    
                        />
                        ) : space.additionalInfo || "I am a testing text"}
                    </Card.Text>
                    <Accordion defaultActiveKey={isUpdatingSate ? "0" : ""}>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Card.Header} variant="text" eventKey={isUpdatingSate ? eventKeyUpdatingState : "0"}>
                                <h6>DIMENSIONS</h6>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={isUpdatingSate ? eventKeyUpdatingState : "0"}>
                            <Card.Body>
                                {isUpdatingSate ? (
                                    <React.Fragment>
                                        <Form.Label>WIDTH</Form.Label>
                                        <Form.Control 
                                        name="width" 
                                        type="text" 
                                        placeholder={space.width}
                                        value={values.width}
                                        onChange={handleChange}    
                                        />
                                        <Form.Label>LENGTH</Form.Label>
                                        <Form.Control 
                                        name="length" 
                                        type="text" 
                                        placeholder={space.length}
                                        value={values.length}
                                        onChange={handleChange}    
                                        />
                                        <Form.Label>HEIGHT</Form.Label>
                                        <Form.Control 
                                        name="height" 
                                        type="text" 
                                        placeholder={space.height}
                                        value={values.height}
                                        onChange={handleChange}    
                                        />
                                    </React.Fragment>
                                ) : `width: ${space.width}mts length: ${space.length}mts height: ${space.height}mts `} 
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Card.Header} variant="text" eventKey={isUpdatingSate ? eventKeyUpdatingState : "1"}>
                                <h6>PRICES</h6>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={isUpdatingSate ? eventKeyUpdatingState : "1"}>
                            <Card.Body>
                            {isUpdatingSate ? (
                                    <React.Fragment>
                                        <Form.Label>PRICE PER DAY</Form.Label>
                                        <Form.Control 
                                        name="pricePerDay" 
                                        type="number" 
                                        placeholder={space.pricePerDay}
                                        value={values.pricePerDay}
                                        onChange={handleChange}    
                                        />
                                        <Form.Label>PRICE PER MONTH</Form.Label>
                                        <Form.Control 
                                        name="pricePermonth" 
                                        type="number" 
                                        placeholder={space.pricePermonth}
                                        value={values.pricePermonth}
                                        onChange={handleChange}    
                                        />
                                    </React.Fragment>
                                ) : `price per day: ${space.pricePerDay} price per month: ${space.pricePermonth}` }
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Card.Header} variant="text" eventKey={isUpdatingSate ? eventKeyUpdatingState : "2"}>
                                <h6>TAGS</h6>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={isUpdatingSate ? eventKeyUpdatingState : "2"}>
                            <Card.Body>
                                {space.spaceTags.map(({name}) => <Badge variant="secondary">{name}</Badge>)}
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Card.Header} variant="text" eventKey={isUpdatingSate ? eventKeyUpdatingState : "3"}>
                                <h6>LOCATION</h6>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={isUpdatingSate ? eventKeyUpdatingState : "3"}>
                            <Card.Body>
                            {isUpdatingSate ? (
                                    <React.Fragment>
                                        <Form.Label>CITY</Form.Label>
                                        <Form.Control 
                                        name="city" 
                                        type="text" 
                                        placeholder={space.city}
                                        value={values.city}
                                        onChange={handleChange}    
                                        />
                                        <Form.Label>ADDRESS</Form.Label>
                                        <Form.Control 
                                        name="address" 
                                        type="text" 
                                        placeholder={space.address}
                                        value={values.address}
                                        onChange={handleChange}    
                                        />
                                    </React.Fragment>
                                ) : `city: ${space.city} address: ${space.address}` }
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    <Button  type={isUpdatingSate ? "" : "submit"} className="mt-4" variant="primary" onClick={(e) => setIsUpdatingState(!isUpdatingSate)} >{isUpdatingSate? "save" : "edit"}<Pencil></Pencil></Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">{`created ${Date(space.createdAt)}`}</Card.Footer>
                </Card>
            </Form>
        )}
        </Formik>
    )
}