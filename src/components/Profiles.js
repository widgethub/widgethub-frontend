import React, { useState } from 'react';
import '../css/Profiles.css';

import Login from './Login/Login';
import useToken from './Login/useToken';

export default function Profiles() {
  const { token, setToken } = useToken();

  const [formState, setState] = useState(0);
  // New form - 0
  const [typeSelected, setType] = useState('Github');
  const [title, setTitle] = useState();
  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [link, setLink] = useState('github.com/');
  const [linkVal, setLinkVal] = useState();

  const [profiles, setProfiles] = useState([
    { name: 'My Exs' , type: 'Github', url: 'zhehaizhang@gmail.com'},
    { name: 'Archnemesis', type: 'Instagram', url: 'zhehai@zhang.com'},
    { name: 'Me', type: 'Personal website', url: 'zhehaizhang.com'}
  ])

  // Update existing profiles - 1
  const [currentProfile, setCurrent] = useState(0)

  const updateType = (prop) => {
    if (currentProfile === 0) {
      setType(prop)
    }
    else{

    }
  }
  const updateTitle = (prop) => {
    if (currentProfile === 0) {
      setTitle(prop)
    }
  }
  const updateFirst = (prop) => {
    if (currentProfile === 0) {
      setFirst(prop)
    }
  }
  const updateLast = (prop) => {
    if (currentProfile === 0) {
      setLast(prop)
    }
  }
  const updateLink = (prop) => {
    if (currentProfile === 0) {
      setLink(prop)
    }
  }


  if (!token) {
    return <Login setToken={setToken} />
  }

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
      <div class="w-full max-w-lg mt-6">
        <p class="text-4xl">Profiles</p>
            <div class="bg-white shadow-xl rounded-lg mx-3 mt-6">
                <ul class="divide-y divide-gray-300">
                  {profiles.map(person => (
                        <li class="p-4 hover:bg-gray-50 cursor-pointer">{person.name}</li>
                    
                  ))}
          
                </ul>
            </div>
     </div>
      <div>

      <div class="grid bg-white shadow-xl rounded-lg mt-6 place-items-center">

        <form class="w-5/6 max-w-md p-6">
          <p class="text-4xl">Profile</p>
          <div class="flex flex-wrap -mx-3 mb-6 mt-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-title">
                Title
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-title" type="string" placeholder="Enter the title of your profile"
              onChange={e => setTitle(e.target.value)} value={title}/>
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
              onChange={e => setFirst(e.target.value)} value={first}/>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Last Name
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="grid-last-name" type="text" placeholder="Doe"
              onChange={e => setLast(e.target.value)} value={last}/>
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
                  )} value={typeSelected}>
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
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="grid-link" type="text" placeholder="To Profile"
              onChange={e => setLinkVal(e.target.value)} value={linkVal}/>
            </div>
  
          </div>
          <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span class="mr-2">{formState ? <p>Update</p> : <p>Add</p>}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
            </svg>
          </button> 
        </form>
        </div>
      </div>
    </div>
  )
}