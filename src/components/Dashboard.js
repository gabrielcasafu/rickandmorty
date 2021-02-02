import React, { Component, Fragment } from 'react';
import { CardBody, Col, Table, Card, CardHeader, Input, Row, Alert, CardFooter, Label } from 'reactstrap';
import { apiService } from '../services/api.service';
import VerDetalle from './VerDetalle';

class Dashboard extends Component {

    constructor(props) {
    
        super(props); 
    
        this.state = {
            personasList: [],
            currentPersona: '',
            currentStatus: '',
        };

        this.ConsultarPersonas = this.ConsultarPersonas.bind(this);
    
      }
    
    componentDidMount() {

        this.ConsultarPersonas();

    }

    changePersona = e => {

        this.setState({
            currentPersona: e.target.value,
        }, () => {
            this.ConsultarPersonas();
        })
    
    }

    changeStatus = e => {

        this.setState({
            currentStatus: e.target.value,
        }, () => {
            this.ConsultarPersonas();
        })
    
      }
    

    ConsultarPersonas() {
        apiService.getAll(this.state.currentPersona, this.state.currentStatus )

        .then(personasList => {

            this.setState(() => ({ 
                personasList: personasList.results && personasList.results ,
            }));
            
        });

    } 
   
        
    render() {
       

        const { 
            personasList,
            currentPersona,
            currentStatus,
  
         } = this.state;
                
      return (
        <div className="animated fadeIn">
            <br></br>
             <Row>
            <Col>
                <Card>
                    <CardHeader>
                        Filtrar por
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col>
                                <Label>Estado</Label>
                                <Input
                                    type="select"
                                    className="form-control"
                                    onChange={this.changeStatus}
                                    value={currentStatus}
                                >
                                    <option value=''>Todos</option>
                                    
                                    <option value="alive">Alive</option>
                                    <option value="dead">Dead</option>
                                    <option value="unknown">Unknown</option>
                                    
                                </Input>
                            </Col>

                            <Col>
                                <Label>Persona</Label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    onChange={this.changePersona}
                                    value={currentPersona}
                                    placeholder="Ingrese persona"
                                >
                                </Input>
                            </Col>
 

                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <br></br>
            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader className="d-flex justify-content-between align-items-center">
                            <div><i className="fa fa-align-justify"></i> Listado de personas </div>
                        </CardHeader>
                        <CardBody>
                        {
                            personasList.length > 0 ?     
                            <Table hover responsive >
                                <thead>
                                <tr>
                                    <th>Personaje</th>
                                    <th>Nombre</th>
                                    <th>Estado</th>
                                    <th>Genero</th>
                                    <th>Origen</th>
                                    <th>Acciones</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    personasList.map( (personas, index) => {
                                         
                                    return (
                                        <tr key={index}>
                                            
                                            <td>
                                            <img src={personas.image} alt={personas.name} width="80px" height="80px" />
                                            </td>
                                            <td>{personas.name}</td>
                                            <td>{personas.status}</td>
                                            <td>{personas.gender}</td>
                                            <td>{personas.origin.name}</td>
                                            <td className="flex-row">
                                                { 
                                                    <Fragment>
 
                                                        <VerDetalle
                                                            personas={personas}
                                                        />
                                                    </Fragment>
                                                    
                                                }
                                            </td>
                                        </tr>
                                    );
                                        
                                    })

                                }
                                </tbody>
                            </Table>
                            :
                            <Row className="justify-content-center">
                              <Col md="4" >
                                <Alert color="info" className="text-center">
                                  No se han encontrado personas
                                </Alert>
                              </Col>
                            </Row>
                        }
                        </CardBody>
                        <CardFooter>
                        <>
                            <div className="pagination">
                                <button onClick="">Previous</button> 
                                <button onClick="">Next</button>
                            </div>
                        </>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>

        </div>
    );
  }

}

export default Dashboard;