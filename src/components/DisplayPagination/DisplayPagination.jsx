import './DisplayPagination.css'

import Pagination from 'react-bootstrap/Pagination'

/*Recibe un arreglo con los elementos a mostrar en cada página divididos en arreglos.
Tambien debe enviarse la funcion setPagina que será utilizada para indicar la página en que
se encuentre.*/
export default function DisplayPagination(props){

    function handleOnClick(e){
      props.setPagina(e.target.id-1)
    }

    let active = props.activePage
    let items = []
    for (let number = 1; number <= props.arr.length; number++) {
        items.push(
        
          <Pagination.Item key={number} active={number === active} id={number} onClick={handleOnClick}>
            {number}
          </Pagination.Item>,
        );
      }

      return(
        <nav>
          <Pagination className='DisplayPagination-Pagination'>{items}</Pagination>
        </nav>
      )
}