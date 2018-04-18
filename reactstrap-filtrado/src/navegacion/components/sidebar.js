import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Nav, NavItem} from 'reactstrap';

class Sidebar extends Component {
	constructor (props){
        super(props);
        //this.props.pagina
    }
    
    activeLink =(pagina) =>{
        return "nav-link " + ((this.props.pagina)==pagina ? 'active' : '');
    }

   render(){
        let session = sessionStorage.getItem('session')
        var navPerfil =  <NavItem>
                            <Link className={this.activeLink('perfil')} to = '/perfil'>Perfil</Link>
                        </NavItem>
        var navCerrar = <NavItem>
                            <Link className={this.activeLink('cerrar')} to = '/cerrar'>Cerrar Sesion</Link>
                        </NavItem>
        var navLogin = <NavItem>
                            <Link className={this.activeLink('login')} to = '/login'>Iniciar Sesion</Link>
                        </NavItem>
        return(
            <div>
                <Nav vertical pills>
                    <h4>Tu blog </h4>
					<NavItem>
					   <Link className={this.activeLink('home1')} to ='/home'> Home </Link>  
					</NavItem>
					<NavItem>		    
					       <Link className={this.activeLink('contacto1')} to ='/Contacto'> Contacto </Link>
					</NavItem>
                    {session>0?navPerfil:''}
                    {session>0?navCerrar:navLogin}
                    
                 </Nav>
            </div>
        );
    }
}

export default Sidebar;