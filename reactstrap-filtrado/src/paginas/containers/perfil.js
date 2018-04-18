import React, {Component} from 'react'
import TemplateLayout from '../components/template-layout'
import MainContent from '../components/main-content'
import LateralContent from '../components/laterla-content'
import Sidebar from '../../navegacion/components/sidebar'
import {Redirect,Rouster,Route} from 'react-router-dom'
import FormPerfil from '../../formularios/components/form-perfil'

export default class Perfil extends Component{
    constructor(props){
        super(props)
    }
    render(){

        let session = sessionStorage.getItem('session')
        
        if(!session)
            return(<Redirect to = '/home'/>)

        return(
            <TemplateLayout>
                <LateralContent>
                    <Sidebar pagina={'perfil'}/>
                </LateralContent>
                <MainContent>
                    <FormPerfil/>
                </MainContent>
            </TemplateLayout> 
        );
    }
}