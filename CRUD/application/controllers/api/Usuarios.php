<?php
    defined('BASEPATH') OR exit('No se permite el acceso directo de scripts');
    require APPPATH . '/libraries/REST_Controller.php';

    class Usuarios extends REST_Controller{
        public function __construct() {
            parent::__construct();
            $this->load->database();
            $this->load->helper('url');
        }

        public function obtener_get( $id = 0 ){
            $usuarios = [];
            if($id > 0){
                $this->db->where('id',$id);
            }
            $usuarios = $this->db->get('usuarios')->result_array();

            if(!empty($usuarios)){
                $this->set_response(
                    [
                        'status' => TRUE,
                        'message' => '',
                        'result' => $usuarios
                    ],
                    REST_Controller::HTTP_OK); //(200) being responsive code
            }
            else{
                $this->set_response(
                    [
                        'status' => FALSE,
                        'message' => 'Usuarios no encontrados',
                        'result' => []
                    ], 
                    REST_Controller::HTTP_NOT_FOUND); //(404) being to HTTP responsive code
            }
        }

        public function eliminar_delete($id){
            //Especificamos que realizaremos la accion sobre el registro con el id especificado
            $this->db->where('id',$id);
            //Ejecutamos la accion delete sobre la tabla usuarios
            $this->db->delete('usuarios');
            $this->set_response(
                [
                    'id' => $id,
                    'message' => 'Registro eliminado',
                    'result' => []
                ], 
                REST_Controller::HTTP_NO_CONTENT);
        }

        public function insertar_post(){
            //Obtenemos la informacion provenient del cuerpo del mensaje
            $data = file_get_contents('php://input');
            //Decodificamos a formato json
            $usuario = json_decode($data);
            //Insertamos registros
            $this->db->insert('usuarios',$usuario);
            //Retornamos el registro isertado junto con su id correspondiente
            $this->set_response($usuario, REST_Controller::HTTP_CREATED);
        }

    }
?>
    