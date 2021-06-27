import React, { useState, useEffect } from 'react';
import '../css/Profiles.css';
import Swal from 'sweetalert2'
// import { getProfiles } from '../services/profile.service';
import { createProfile, updateProfile, deleteProfile, getProfiles } from '../services/profile.service';

export default function Profiles() {

  /* enums */
  const GITHUB_PROVIDER =    1;
  const DEVPOST_PROVIDER =  2;
  const GITHUBSTATS_PROVIDER = 3;
  const LINKEDIN_PROVIDER =  4;

  const [formState, setState] = useState(0);
  // New form - 0
  const [typeSelected, setType] = useState(GITHUB_PROVIDER);
  const [name, setName] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [link, setLink] = useState('github.com/');
  const [infoVal, setInfoVal] = useState('');

  const [profiles, setProfiles] = useState([
    // { title: 'My Exs' , type: 'Github', url: 'zhehaizhang@gmail.com', id: 1},
    // { title: 'Archnemesis', type: 'Instagram', url: 'zhehai@zhang.com', id: 2},
    // { title: 'Me', type: 'Facebook', url: 'zhehaizhang.com', id: 3}
  ]);

  // Update existing profiles - 1
  const [currentProfile, setCurrentProfile] = useState(-1)

  useEffect(() => {

    async function fetchData() {
      /* query for profiles */
      const response = await getProfiles(); 
      setProfiles(response.data.providers);
    }
    fetchData()
  }, []);

  const types = [
    {type: GITHUB_PROVIDER, name: "GitHub", link: "github.com/"},
    {type: DEVPOST_PROVIDER, name: "Devpost", link: "devpost.com/"},
    {type: GITHUBSTATS_PROVIDER, name: "Github", link: "github.com/"},
    {type: LINKEDIN_PROVIDER, name: "LinkedIn", link: "linkedin.com/in/"}
  ];

  const changeTypeLink = (type) => {
    setType(type)
    for (var prop in types) {
      if (parseInt(types[prop].type) === parseInt(type)){
        setLink(types[prop].link)
      }
    }
  }

  const editProfile = (index)  => {
    // Update all the values, and then switch the variable as well as index
    setCurrentProfile(index);
    setName(profiles[index].name);
    setFirst(profiles[index].first);
    setLast(profiles[index].last);
    setInfoVal(profiles[index].info);
    setType(parseInt(profiles[index].provider));
    setState(1);
  }

  const newProfile = (e) => {
    e.preventDefault();

    setName('');
    setFirst('');
    setLast('');
    setInfoVal('');
    setType(GITHUB_PROVIDER);
    setState(0);
  }

  const submitProfile = async (e) => {
    e.preventDefault();

    // 0 - new form
    if (!checkProfile()) {
      // send alert
      Swal.fire({
        title: 'Error!',
        text: 'Fields are empty!',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      return;
    }
    else if (formState === 0) {
      const newProvider = {
        provider: parseInt(typeSelected),
        name: name,
        info: infoVal
      }
      const response = await createProfile(newProvider);
      const newId = response.data.id; // server returns us id of newly created provider

      setProfiles([...profiles, {...newProvider, id: newId}])

    } else {

      const updateProvider = {
        id: profiles[currentProfile].id,
        provider: parseInt(typeSelected),
        name: name,
        info: infoVal
      }

      const response = await updateProfile(updateProvider);
      setProfiles([...profiles.filter(profile => profile.id !== updateProvider.id), updateProvider])

    }
  }

  const removeProfile = async (e) => {
    e.preventDefault();

    const response = await deleteProfile(profiles[currentProfile].id);
    setProfiles(profiles.filter(profile => profile.id !== profiles[currentProfile].id))
  }

  const checkProfile =  () => {
    console.log(name)
    console.log(infoVal)
    if (name === "") {
      return false
    }
    else if (infoVal === "") {
      return false
    }
    return true;

  }

  return(
    <div className="content grid grid-cols-2 gap-4 justify-items-center">

      <div className="w-full max-w-lg">
        <div className="selector bg-white shadow-xl rounded-lg mx-3 mt-6">
          <ul className="divide-y divide-gray-300">
            {profiles.map(function(profile, i) {
              return (
                <li key={i} className="p-4 hover:bg-gray-50 cursor-pointer" onClick={() => editProfile(i)}>
                  {profile.name}
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div>
        <div className="editor grid bg-white shadow-xl rounded-lg mt-6 place-items-center">
          <form className="w-full max-w-md p-6">
            <p className="text-4xl">Profile</p>

            <div className="flex flex-wrap -mx-3 mb-6 mt-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                  Title
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-title" type="string" placeholder="Enter the title of your profile"
                onChange={e => setName(e.target.value)} value={name}/>
                <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                  Display Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                id="grid-first-name" type="text" placeholder="fairnightzz"
                onChange={e => setFirst(e.target.value)} value={first}/>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                  Type
                </label>
                <div className="relative">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                  value={typeSelected} onChange={e => (
                    changeTypeLink(e.target.value)
                    )} >
                    {types.map(function(type, i) {
                      return <option key={i} value={type.type}>{type.name}</option>
                    })}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                  Start:
                </label>
                  <p className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{link}</p>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    Link
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                id="grid-link" type="text" placeholder="To Profile"
                onChange={e => setInfoVal(e.target.value)} value={infoVal}/>
              </div>
            </div>

            <button onClick={submitProfile} className="mx-2 bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                <span className="mr-2">{formState ? <p>Update</p> : <p>Add</p>}</span>
            </button>

            <button onClick={newProfile} className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                <span className="mr-2">Close</span>
            </button>

            <button onClick={removeProfile} className="mx-2 bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                <span className="mr-2">Delete</span>
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}