import React from 'react';

  const listcourse = [
{
title: 'art1',
article : 'a 1',
},
{
title : 'art2',
article : 'a 2',
},
{
  title : 'art3',
  article : 'a 3',
},

]
function course () {
return (
  <ul>{
    course.map(function afficheMalist(course){
   return(
    <li key={course.objectId}>
      <span>
        {course.title}
      </span>
      <span>{course.article}</span>
    </li>
   );

    })}

  </ul>

)

}

export default App;
