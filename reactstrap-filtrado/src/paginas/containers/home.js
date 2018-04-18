import React , {Component} from 'react';
import TemplateLayout from '../components/template-layout';
import LateralContent from '../components/laterla-content';
import MainContent from '../components/main-content';
import Populares from '../../articulos/components/populares';
import Sidebar from '../../navegacion/components/sidebar';
import { Container, Button, Form, FormGroup, Label, Input, Jumbotron} from 'reactstrap';
import SERVICE from '../../constantes';

export default class Home extends Component{

    constructor(props){
        super(props);

        this.state ={
          data: {
             articulos:[]
          },
          misarticulos:[],
          st_articulo:''
         }
    };



    //componentWillMount(){
     //este se ejecuta primero 
    //}

 

   componentDidMount(){
    fetch('http://programacion.xyz/mtw/204/react/index.php/api/sitio/populares')

    .then(result =>{
        return result.json();
    })
    .then( (json) =>{
       this.setState({data:json});

    this.setState({
      misarticulos: this.state.data.articulos
    });

    });

   }





    DarClick2=(event)=>{
        if(this.state.mensaje!='')
        {
            this.setState({
                misarticulos:this.state.misarticulos.filter(number => (number.nombre.toUpperCase().match(this.state.mensaje.toUpperCase()) || number.descripcion.toUpperCase().match(this.state.mensaje.toUpperCase())))
            });
            console.log(this.state.misarticulos);
        }
        else
        {
            this.setState({
            misarticulos: this.state.data.articulos
            });
        }

    }

 
    onChangeMensaje(e){
         this.setState({
             mensaje:e.target.value
         });
		   this.setState({
            misarticulos: this.state.data.articulos
          });
		 // misarticulos:this.state.misarticulos.filter(number => (number.nombre.match(this.state.mensaje) || number.descripcion.match(this.state.mensaje)))
    }

 
    render(){
        return(
            <TemplateLayout>
                <LateralContent>
                  <Sidebar pagina={'home1'}/>
                </LateralContent>
                <MainContent>
                     <Input onChange={this.onChangeMensaje.bind(this)}  type="textArea" name = "mensaje" id="mensaje" placeholder="Indique lo que quiere buscar"/>
                     <button onClick={this.DarClick2}>Buscar</button>
                     <Populares articulos={this.state.misarticulos}/>
                </MainContent> 
            </TemplateLayout>
        );
    }
}