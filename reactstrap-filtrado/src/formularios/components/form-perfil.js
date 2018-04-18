import React,{Component} from 'react'
import {Container,Button,Form,FormGroup,Label,Input} from 'reactstrap'

export default class FormPerfil extends Component{
    constructor(props){
        super(props)
        this.state = {
            nombre: '',
            correo: ''
        }
    }

    onChangeCorreo(e){
        this.setState({
            correo: e.target.value
        })
    }

    onChangeNombre(e){
        this.setState({
            nombre: e.target.value
        })
    }

    componentDidMount(){
        const storage = localStorage.getItem('perfil');
        if(storage){
            var perfil = JSON.parse(storage)
            this.setState({
                nombre: perfil.nombre,
                correo: perfil.correo
            })
        }
    }

    save(event){
        //lo vamos a guardar en la clave perfil
        localStorage.setItem('perfil',JSON.stringify({
            nombre: this.state.nombre,
            correo: this.state.correo
        }))
    }

    render(){
        return(
            <Container>
                <br/>
                <br/>
                <FormGroup>
                    <Label>Nombre</Label>
                    <Input type="text" name="nombreUsuario" id="nombreUsuario" placeholder="Tu Nombre" onChange={this.onChangeNombre.bind(this)} value={this.state.nombre}/>
                </FormGroup>
                <FormGroup>
                    <Label>Correo</Label>
                    <Input type="text" name="correoUsuario" id="correoUsuario" placeholder="Tu correo" onChange={this.onChangeCorreo.bind(this)} value={this.state.correo}/>
                </FormGroup>
                <FormGroup>
                    <Button onClick={this.save.bind(this)}>Guardar perfil</Button>
                </FormGroup>
            </Container>
        )
    }
}