import React from 'react';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Jumbotron,Container,Badge} from 'reactstrap';

class Componente4 extends React.Component
{
    render(){
        return(
            <div>
                <Container fluid>
                    <div className='bg-default p-3 text-black'>
                        <h2>Programacion en php y mysql</h2>
                        <h6>Por Victor Manuel Lozano <span>{this.props.fecha}</span></h6>
                        <h6><Badge color ='danger'>PHP</Badge><Badge color ='primary'>MySql</Badge></h6>
                        <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis exercitationem maxime quam possimus distinctio harum? Possimus, a et, numquam impedit culpa sapiente vitae cumque assumenda ipsum voluptate cupiditate similique aliquam! </h6>
                    </div>
                </Container>
            </div>
        );
    }
}
export default Componente4;