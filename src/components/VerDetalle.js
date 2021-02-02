import React, { Component, Fragment } from 'react';
import { Modal, ModalBody, ModalHeader, Button, CardBody, ModalFooter } from 'reactstrap';

class VerDetalle extends Component {
    
    constructor(props) {

        super(props);

        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);

    }

    toggle() {
        this.setState({
            modal: !this.state.modal,
        });
    }
  
  render() {

    const { 
      personas
     } = this.props;

    return (
      <Fragment>
        <Button
            color="secondary"
            size="sm"
            onClick={this.toggle}
        >
          VER DETALLE 
        </Button>  
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={'modal-lg' + this.props.className}>
          <ModalHeader toggle={this.toggle}>Informacion adicional</ModalHeader>
          <ModalBody>
            <CardBody>

              {
                //Se puede consultar la siguiente api para mostrar data segun id
                //https://rickandmortyapi.com/api/character/2
              }
              <div className="detail text-center">
                  <div className="detail-view">
                    <div className="image">
                    <img src={personas.image} alt={personas.name} width="100px" height="100px" />
                    </div>
                    <div className="data">
                        <h2>{personas.name.split(" ").map((l) => l.charAt(0).toUpperCase() + l.substring(1)).join(" ")}</h2>
                    </div>
                    <div className="property">
                      <div className="left">Estado</div>
                      <div className="right">{personas.status}</div>
                    </div>
                    <div className="property">
                      <div className="left">Especie</div>
                      <div className="right">{personas.species }</div>
                    </div>
                    <div className="property">
                      <div className="left">Genero</div>
                      <div className="right">{personas.gender } </div>
                    </div>
                    <div className="property">
                      <div className="left">Origen</div>
                      <div className="right">{personas.origin.name } </div>
                    </div>
                    <div className="property">
                      <div className="left">Última ubicación conocida:</div>
                      <div className="right">{personas.location.name } </div>
                    </div>
                    <div className="property">
                      <div className="left">Fecha de creacion</div>
                      <div className="right">{personas.created } </div>
                    </div>
 
                  </div>
              </div>  
            </CardBody>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cerrar</Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default VerDetalle;