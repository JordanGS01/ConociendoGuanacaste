import './LogIn.css'


export default function LogIn(){

    
    let navigate = useNavigate()
    // Funcion para validar si existe o no el usuario e ingresar a pagina principal
    async function iniciarSesion () {
        debugger;
        let sesionIniciada = await firebaseIniciarSesion(valorEmail, valorCon);

        if (sesionIniciada) {
            alert("exito al iniciar");
            navigate('/');
        } else {
          alert('La informacion no es correcta');
          

        }
      }

      // Funciones para obtener info de los inputs
      const [valorEmail, setValorEmail] = useState('');
    
      const onChangeEmail = function(valor) {
          setValorEmail(valor.target.value)
        }
    
        const [valorCon, setValorCon] = useState('');
      
      const onChangeCon = function(valor) {
          setValorCon(valor.target.value)
      }

    return(

        // formulario de Login 
        <div>
    <Container >
      <Form >
        <h3>Ingresar</h3>
        <Form.Group >
        <input type="email" class="form-control" placeholder="Correo Electrónico" required onChange={onChangeEmail}/>
        </Form.Group>
        <br/>
        <Form.Group >
        <input type="password" class="form-control"  placeholder="Contraseña" required onChange={onChangeCon}/>
        </Form.Group>
        <br/>
        <button type="Submit" onClick={iniciarSesion} id="BotonForm">Ingresar</button>
      </Form>
    </Container>
        </div>
    )
}