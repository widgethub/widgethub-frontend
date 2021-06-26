import React, { useState } from 'react';
import '../css/Profiles.css';

import Login from './Login/Login';
import useToken from './Login/useToken';

export default function Profiles() {
  const { token, setToken } = useToken();
  const [typeSelected, setType] = useState('Github');
  const [title, setTitle] = useState();
  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [link, setLink] = useState('github.com/');

  if (!token) {
    return <Login setToken={setToken} />
  }
  const profiles = [
    { name: 'My Exs' , type: 'Github', url: 'zhehaizhang@gmail.com'},
    { name: 'Archnemesis', type: 'Instagram', url: 'zhehai@zhang.com'},
    { name: 'Me', type: 'Personal website', url: 'zhehaizhang.com'}
  ];

  const types = [
    {type: "Github", link: "github.com/"},
    {type: "Facebook", link: "facebook.com/"},
    {type: "Instagram", link: "instagram.com/"},
    {type: "Linkedin", link: "linkedin.com/in/"}
  ];

  const changeTypeLink = (type) => {
    setType(type)
    for (var prop in types) {
          if (types[prop].type === type){
            setLink(types[prop].link)
          }
      }
  }



  return(
    <div class="grid grid-cols-2 gap-4 justify-items-center">
      <div>
        {profiles.map(person => (
          <div>
           <p>{person.name}</p> 
           <p>{person.type}</p> 
           <p>{person.url}</p> 
          
          </div>
        ))}
      </div>
      <div>

      <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-title">
              Title
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
             id="grid-title" type="string" placeholder="Enter the title of your profile"
             onChange={e => setTitle(e.target.value)}/>
            <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              First
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
            id="grid-first-name" type="text" placeholder="Jane"
            onChange={e => setFirst(e.target.value)}/>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Last Name
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="grid-last-name" type="text" placeholder="Doe"
            onChange={e => setLast(e.target.value)}/>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-type">
              Type
            </label>
            <div class="relative">
              <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="grid-type" onChange={e => (
                changeTypeLink(e.target.value)
                )}>
                {types.map(type => (
                  <option>{type.type}</option>
                ))}
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
              Link
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-link" type="text" placeholder="To Profile"/>
          </div>
 
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
              Start:
            </label>
              <p class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{link}</p>
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                Link
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-link" type="text" placeholder="To Profile"/>
          </div>
 
        </div>
 
      </form>
      </div>
    </div>
  )
}