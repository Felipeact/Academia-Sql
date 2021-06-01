

import { Header } from '../../../components/Header';
import { EditInstructor } from '../../../components/Instructors/EditInstructor';
import { SideBar } from '../../../components/SideBar';





export default function EditInstructors() {
  return (
    <>
        <Header/>
          <div style={{display: 'flex', width: '90%', margin: '0 auto'}}>
            <SideBar />

           <EditInstructor />
        </div>
      </>

  );
}