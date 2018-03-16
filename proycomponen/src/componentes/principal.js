import React,{Component} from 'react';
import Componente1 from './componente1';
import Componente2 from './componente2';
import Componente3 from './componente3';
import Componente4 from './componente4';
import Footer from './footer';

var fecha= new Date();
const sfecha = <span>{fecha.toLocaleDateString()}</span>

var year =(new Date()).getFullYear();

class Principal extends Component{
    render(){
        return(
            <div>
                <Componente1/>
                <Componente2/>
                <Componente3 fecha={sfecha}/>
                <Componente4 fecha={sfecha}/>
                <Footer anio={year}/>
            </div>
        );
    }
}
export default Principal;