

import { Header } from '../../../components/Header';
import { ShowInstructorContent } from '../../../components/Instructors/ShowInstructorContent';
import { SideBar } from '../../../components/SideBar';





export default function ShowInstructor() {
  return (
    <>
        <Header/>
          <div style={{display: 'flex', width: '90%', margin: '0 auto'}}>
            <SideBar />

           <ShowInstructorContent />
        </div>
      </>

  );
}