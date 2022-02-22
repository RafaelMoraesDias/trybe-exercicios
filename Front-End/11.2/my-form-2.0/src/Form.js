import React from 'react';
import Combobox from "react-widgets/Combobox";
import 'react-widgets/styles.css';

class Form extends React.Component {
    constructor() {
        super()

        this.state = {
            nome: '',
            email: '',
            cpf: '',
            endereco: '',
            cidade: '',
            estado: '',
            tipo: '',
            curriculo: '',
            cargo: '',
            descricao: ''

        }
    }

    handleForm = ({target}) => {
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState ({[target.name]: value})

      
} 
    

    render() { 
        return (
      <form> 
        <fieldset>
            <label htmlFor='nome'> NOME:
                <input  onChange= {this.handleForm} maxlength='40' name='nome' required/>
             </label>
            <label htmlFor='nome'> EMAIL:
                <input  onChange= {this.handleForm} maxlength='50' name='email'  required/>
            </label>
            <label htmlFor='nome'> CPF:
                <input onChange= {this.handleForm} maxlength='11' name='cpf' required />
            </label>
            <label htmlFor='nome'> ENDEREÇO:
                <input onChange= {this.handleForm} maxlength='200' name='endereco' required/>
            </label>
            <label htmlFor='nome'> CIDADE:
                <input onChange= {this.handleForm} maxlength='28' name='cidade' required/>
            </label> 
            <label htmlFor='estado'> ESTADOS:
                <Combobox onChange= {this.handleForm} name='estado' data={['SP','MG']}required />
            </label> 
            <label htmlFor='tipo'> TIPO:
                <input onChange= {this.handleForm} name='tipo'type='radio' required/> CASA
                <input onChange= {this.handleForm} name='tipo' type='radio' required/> APARTAMENTO
            </label> 


        </fieldset>


        <fieldset>

            <label htmlFor='curriculo'> RESUMA SEU CURRICULO:
                <textarea onChange= {this.handleForm} maxlength='1000' name='curriculo' required />
            </label> 
            <label htmlFor='cargo'> CARGO:
                <textarea onChange= {this.handleForm} name='cargo' maxlength='40' required />
            </label> 
            <label htmlFor='descricao'> DESCREVA SEU CARGO:
                <input onClick= {this.handleForm} maxlength='500' name='descricao'  required/>
            </label>

        </fieldset>

        <button type='submit'>ENVIAR</button>
        <button type='reset'>LIMPAR</button>


      </form> 
     ) 
    }
}
 
export default Form;