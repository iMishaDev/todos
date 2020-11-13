import React from 'react';
import { Todos } from '../components';

const MainPage = (props) => {
 const initialList = [
        {title: 'workout', accomplished: false},
        {title: 'dance', accomplished: false}]
  return (
      <div>
       <Todos initialList={initialList} />
      </div>
  );
};

export default MainPage;
