import { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import { api } from '../../../services/api';
import { Container } from './styles'

type Instructor = {
  id: string,
  avatar_url: string,
  name: string,
  birth: string,
  gender: string,
  services: string, 
  total_students: number
  created_at: string,
  age: string,
}


export function ShowInstructorContent(){
  const [ instructor, setInstructor ] = useState<Instructor>()

  const {id}: any = useParams();

  useEffect(() => {
    async function getInstructor(){
      const { data } = await api.get(`instructors/${id}`)
      setInstructor(data.instructor)
    }
    getInstructor()

  })

  

  return (
    <Container>
      <div className="header">
          <p>
            Instructor
          </p>
      </div>

      <section className="details">
            
          <div className="grid">
          <div className="item">
                <div>Instructor</div>
                <div>{ instructor?.name }</div>
            </div>

            <div className="item">
                <div>Age</div>
                <div>{ instructor?.age }</div>
            </div>

            <div className="item">
                <div>Gender</div>
                <div>{ instructor?.gender === "M"? "Male": "Female" }</div>
            </div>

            <div className="item">
                <div>Jobs</div>
                <div>
                     {instructor?.services}
                </div>
            </div>

            <div className="item">
                <div>Created At</div>
                <div>{ instructor?.created_at }</div>
            </div>

            <a href={`/instructors/${instructor?.id}/edit`} className="button">Editar</a>
          </div>
            

        </section>
      

    </Container>
  )
}