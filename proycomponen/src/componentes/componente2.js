import React from 'react';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Container,Badge} from 'reactstrap';


class Componente2 extends React.Component
{
    render(){
        return(
            <div>
                <Container fluid>
                    <div className='bg-secondary p-3 text-white'>
                        <h2>Programacion en PHP con Laravel</h2>
                        <h6>Por Victor Lozano</h6><span></span>
                        <h6><Badge color ='primary'>PHP</Badge><Badge color ='warning'>Web</Badge></h6>
                        <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis exercitationem maxime quam possimus distinctio harum? Possimus, a et, numquam impedit culpa sapiente vitae cumque assumenda ipsum voluptate cupiditate similique aliquam! </h6>
                    </div>
                </Container>
            </div>
        );
    }
}
export default Componente2;