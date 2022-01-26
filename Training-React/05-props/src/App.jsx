import React from 'react';
import User from './components/User';
import Submit from './components/Submit';

const user = {
  name: 'pepito',
  age: 18,
  comment: {
    lastComment: 'Hoe gaat het me je',
  },
};

const users = [
  {
    id: 1,
    name: 'PH',
    age: 17,
    job: 'Etudiant',
    comment: {
      lastComment: "j'adore les sushis",
    },
  },
  {
    id: 2,
    name: 'jerome',
    age: 27,
    job: 'Chomeur',
    comment: {
      lastComment: "j'adore les fruits",
    },
  },
  {
    id: 3,
    name: 'Seb',
    age: 37,
    job: 'Dev',
    comment: {
      lastComment: "j'adore la DNB",
    },
  },
];

const launchtheRocket = () => {
  console.log('Get ready for the rocket');
  let cpt = 10;

  const timer = setInterval(() => {
    console.log(cpt);
    cpt -=1;
    if(cpt === 0 ){
      clearInterval(timer);
      console.log('Launch the rocket');
    }
  },1000);
};

const App = () => (
  <div className="py-10 max-w-7xl mx-auto">
    <header>
      <div>
        <img src="/img/logo.png" alt="logo app" className="w-36 mx-auto" />
      </div>
    </header>
    <main>
      <div className="sm:px-6 lg:px-8">
        <div className="px-4 py-8 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg min-h-96">
          <Submit actionOnClick={launchtheRocket} />
            <User name={user.name} age={user.age} comment={user.comment.lastComment} />
            {users.map((u) => (
              <User
                key={u.id}
                name={u.name}
                age={u.age}
                job={u.job}
                comment={u.comment.lastComment}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default App;

