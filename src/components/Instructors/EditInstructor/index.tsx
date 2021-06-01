import {  useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom';
import { api } from '../../../services/api';

import { Container } from './styles'

type Instructor = {
  id: string,
  avatar_url: string,
  name: string,
  birth: string,
  gender: string,
  services: string,
  age: string,
}

export function EditInstructor() {
  const [instructor, setInstructor] = useState<Instructor>()
  const { register, handleSubmit } = useForm<Instructor | any >();
  const router = useHistory()

  const { id }: any = useParams();

  useEffect( () => {
    async function getInstructor() {
      const { data } = await api.get(`instructors/${id}`)
       setInstructor(data.instructor)
      }
      
      getInstructor()
    }, [id])
  

  const editInstructor = handleSubmit(async data => {
      await api.put('instructors', data)
      window.location.reload()
  });


  async function handleDeleteInstructor(){
  
    const config = {
      data: {
        id: id
      }
    }

    await api.delete('/instructors', config)
    router.push('/')
    // console.log(response)
  }

  return (
    <Container>
      <div className="header">
        <p>
          Instructor
          </p>
      </div>

      <section className="details">
        <div className="grid">

          <form onSubmit={editInstructor}>

            <div className="item">
              <label htmlFor="">Instructor</label>
              <input type="hidden" defaultValue={id} {...register('id')}  />
              <input type="hidden" defaultValue="nopictures" {...register('avatar_url')}  />
              <input type="text" defaultValue={instructor?.name} {...register('name')}/>
            </div>
            <div className="item">
              <label htmlFor="">Date of birth</label>
              <input type="text" {...register('birth')} defaultValue={instructor?.birth}/>
            </div>
            <div className="item" >
              <label>Gender</label>
              <span>
                <input type="radio" {...register('gender')} value="M" style={{ width: '10%' }} />
              Male
          </span>
              <span>
                <input type="radio" {...register('gender')} value="F" style={{ width: '10%' }} />
              Female
          </span>
            </div>
            <div className="item">
              <label htmlFor="">Services</label>
              <input type="text"  {...register('services')} defaultValue={instructor?.services} />
            </div>

            <div className="buttons">
              <button className="a" type="button" onClick={handleDeleteInstructor} >Delete</button>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>

      </section>
    </Container>
  )
}

