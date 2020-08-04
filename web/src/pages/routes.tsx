import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import TeachersList from './TeachersList';
import TeacherForm from './TeacherForm';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeachersList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;
