

import { useState } from 'react';
import { Pagination} from '../../Pagination'
import { useInstructor } from '../../../services/hook/useInstructor';
import { ActionsModalInstructor } from '../ActionsModalInstructor'


import { Container } from './styles'


export function InstructorsTable(){
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);
  const [ page, setPage ] = useState(1);

  //Get Instructors 
  const { data } = useInstructor(page)
  

  //Modal
  function handleOpen(){
    setIsActionModalOpen(true)
  }

  function handleClose() {
    setIsActionModalOpen(false)
  }

  return (
    <Container>
      <div className="header">
        <header>Instructors</header>

          <button onClick={handleOpen}>
            New Instructor
          </button>
          <ActionsModalInstructor isOpen={isActionModalOpen} onRequestClose={handleClose}/>
      </div>

      <div className="content">
      <table>
            <thead>
              <tr>
                <th>
                Instructors
                </th>
                <th>
                Attendance
                </th>
                 <th>
                 Students
                </th>
                <th>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.instructors.map( instructor => (
                <tr key={instructor.id}>
                <td >
                  {instructor.name} 
                </td>
                <td>
                  {instructor.services}
                </td>
                <td>
                  {instructor.total_students}
                </td>
                <td>
                    <a href={`/instructors/${instructor.id}`}>view</a>          
                </td>
              </tr>
              ))}
              
             
            
            </tbody>
          </table>

          <Pagination totalCountOfRegisters={data?.totalCount} currentPage={page} onPageChange={setPage} />
      </div>
    </Container>
  )
}