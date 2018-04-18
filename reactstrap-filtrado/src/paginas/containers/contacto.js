import React, {Component} from 'react';
import TemplateLayout from '../components/template-layout';
import MainContent from '../components/main-content';
import LateralContent from '../components/laterla-content';
import Sidebar from '../../navegacion/components/sidebar';
import FormContacto from '../../formularios/components/form-contacto';
import SERVICE from '../../constantes';


class Contacto extends Component{
	constructor(props){
		super(props);
		this.state = { key : 0 };
	}

guardarComentario =(e,correo,mensaje) =>{
	//alert(correo);
	//alert(mensaje);
	fetch(SERVICE.CONTROLLER_SITIO_COMENTARIO,{
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type':'application/json',
		},
		body: JSON.stringify({
			id:0,
			correo: correo,
			mensaje: mensaje,
		})
	});
	alert('El mensaje ha sido enviado');
	//let x = Math.random();
	//alert(x);
	//this.setState({ key : x});
	this.setState({ key : Math.random()});
}



	render(){

		    return(
	            <TemplateLayout>
	                <LateralContent>
	                    <Sidebar pagina={'contacto1'}/>
	                </LateralContent>

	                <MainContent>
	                  <FormContacto key={this.state.key} enviarFormulario={this.guardarComentario}/>
	                </MainContent>
	            </TemplateLayout>
	        );
	}


}

export default Contacto;