


import { BrowserRouter, Switch, Route } from 'react-router-dom';

import EditInstructors from '../pages/Instructors/EditInstructors';
import Instructors from '../pages/Instructors';
import  ShowInstructor from '../pages/Instructors/ShowInstructor';


import GlobalStyles from '../styles/GlobalStyles'




export function Routes() {


  return (
      <BrowserRouter>
          <Switch>
           <Route path="/" exact component={Instructors} />
           <Route path="/instructors/:id" exact component={ShowInstructor} />
           <Route path="/instructors/:id/edit"  component={EditInstructors} />
          </Switch>
        <GlobalStyles />
      </BrowserRouter>

  );
}