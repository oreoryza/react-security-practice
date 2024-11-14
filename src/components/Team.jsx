import React, {useState} from 'react';
import larry from '../assets/larry.png';
import meghan from '../assets/meghan.png';
import yvonne from '../assets/yvonne.png';
import diana from '../assets/diana.png';

const Team = ({data=8, shadow="shadow-md", rounded}) => {
  // DATA TEAM MEMBER
  const [teamMembers] = useState([
    {
      name: 'Larry F. Burnett',
      position: 'CEO',
      image: larry,
    },
    {
      name: 'Meghan M. Johnson',
      position: 'CFO',
      image: meghan,
    },
    {
      name: 'Yvonne L. Johnson',
      position: 'CMO',
      image: yvonne,
    },
    {
      name: 'Diana L. Johnson',
      position: 'COO',
      image: diana,
    },
    {
      name: 'Larry F. Burnett',
      position: 'CEO',
      image: larry,
    },
    {
      name: 'Meghan M. Johnson',
      position: 'CFO',
      image: meghan,
    },
    {
      name: 'Yvonne L. Johnson',
      position: 'CMO',
      image: yvonne,
    },
    {
      name: 'Diana L. Johnson',
      position: 'COO',
      image: diana,
    },
  ]);

  const members = teamMembers.slice(0, data);

  return (
    <div className='md:px-32 px-10 pt-24 font-raleway'>
        <h2 className="font-bold text-2xl text-peachred text-center">\ Team \</h2>
        <h1 className="font-bold text-4xl text-darkblue text-center">Our Leaders</h1>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8'>
          {/* LOOPING SHOW MEMBER */}
          {members.map((member, index) => (
            <div key={index} className={`group flex flex-col justify-center items-center ${shadow} rounded-lg overflow-hidden`}>
              <div className={`overflow-hidden ${rounded}`}>
                <img className='scale-105 group-hover:scale-110 tarnsition-transform duration-300' src={member.image} alt="" />
              </div>
              <div className='text-center py-4'>
                <h1 className='font-bold text-xl text-peachred'>{member.name}</h1>
                <p className='font-medium mt-2'>{member.position}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Team