import React from 'react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Panel from 'muicss/lib/react/panel';
import Filters from '../containers/Filters';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import SmartSummaryFooter from '../containers/SummaryFooter';

const App = () => (
  <Row className="mui--text-center">
   <br />
   <Col md="10" md-offset="1">
    <Panel style={{ backgroundColor: '#3F51B5' }}>
      <h1 style={{ color: '#FFFFFF' }}> React/Redux Todo App </h1>
      <div>
        <AddTodo />
        <Filters />
        <VisibleTodoList />
        <SmartSummaryFooter />
      </div>
    </Panel>
    </Col>
  </Row>
);

export default App;
