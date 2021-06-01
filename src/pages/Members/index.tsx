

import { Header } from '../../components/Header';
import { InstructorsTable } from '../../components/Instructors/InstructorsTable';
import { SideBar } from '../../components/SideBar';





export default function Members() {
  return (
    <>
        <Header/>
          <div style={{display: 'flex', width: '90%', margin: '0 auto'}}>
            <SideBar />

           <InstructorsTable />
        </div>
      </>

  );
}