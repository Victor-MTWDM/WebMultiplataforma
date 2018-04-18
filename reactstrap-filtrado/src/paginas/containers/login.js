import React,{Component} from 'react'
import {Redirect,Router,Route} from 'react-router-dom'

export default class Login extends Component{
    constructor(props){
        super(props)
    }

    render(){
        sessionStorage.setItem('session',1414)  //1414 valor cualquiera para identificar que se inicio la session
        return (<Redirect to = '/perfil'/>)
    }
}
