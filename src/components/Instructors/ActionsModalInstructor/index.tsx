import Modal from 'react-modal'
import { SubmitHandler, useForm } from 'react-hook-form'
import { api } from '../../../services/api'
import { useHistory } from 'react-router-dom'

import closeImg from "../../../assets/close.svg";

import { Container } from './styles'

interface ActionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  
}

interface CreateInstructor {
  nome: string;
  date: string;
  gender: string;
  services: string;
}

Modal.setAppElement("#root");

export function ActionsModalInstructor({isOpen, onRequestClose}: ActionsModalProps ){  

  const { register, handleSubmit, formState } = useForm()
  const router = useHistory()

  const { errors } = formState  
  
  const handleCreateInstructor: SubmitHandler<CreateInstructor>  = async (data ) => {

   await api.post('instructors', data) 
   window.location.reload()
    router.push(`/`)
  }

  
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content" 
        
>
        <Container>
        
        <section>
          <div className="header">
            <h3>New Instructor</h3>
            <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="Close modal" />
        </button>
          </div>

    <form onSubmit={handleSubmit(handleCreateInstructor)}>

        <div className="content">
          <label htmlFor="">Instructor</label>
          <input type="text" placeholder="Name" {...register('name')}/>
        </div>
        <div className="content">
          <label htmlFor="">Date of birth</label>
          <input type="date" {...register('birth')} {...errors.birth}/>
        </div>
        <div className="content" >
          <label>Gender</label>
                  <span>
                      <input type="radio" {...register('gender')} {...errors.gender} value="M" style={{width: '10%'}}/>
                      Male
                  </span>
                  <span>
                      <input type="radio" {...register('gender')} {...errors.gender} value="F" style={{width: '10%'}}/>
                      Female
                  </span>
        </div>
          <div className="content">
          <label htmlFor="">Services</label>
          <input type="text" {...errors.services} {...register('services')}/>
        </div>
        
        <div className="buttons">
          <a href="/">Cancel</a>
          <button type="submit">Save</button>
        </div>
    </form>
        </section>

          
        </Container>

      </Modal>
    </>
  )
}