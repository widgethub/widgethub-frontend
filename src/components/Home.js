import React, { useState, useEffect } from 'react';
import '../css/Home.css';

import { getProfiles, setProfiles } from '../services/profile.service';


export default function Home() {
    const [bgtype, setBGType] = useState(0);

    // Colors
    const [bg1color, setBG1Color] = useState(0);
    const [bg2color, setBG2Color] = useState(0);
    const [titlecolor, setTitleColor] = useState(0);
    const [titlecolorhover, setTitleColorHover] = useState(0);
    const [textcolor, setTextColor] = useState(0);

    // Shades
    const [bg1shade, setBG1Shade] = useState(0);
    const [bg2shade, setBG2Shade] = useState(0);
    const [titleshade, setTitleShade] = useState(0);
    const [titleshadehover, setTitleShadeHover] = useState(0);
    const [textshade, setTextShade] = useState(0);

    const GITHUB_PROVIDER =    1;
    const FACEBOOK_PROVIDER =  2;
    const INSTAGRAM_PROVIDER = 3;
    const LINKEDIN_PROVIDER =  4;

    const [typeSelected, setType] = useState(GITHUB_PROVIDER);
    const [name, setName] = useState('');
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [link, setLink] = useState('github.com/');
    const [infoVal, setInfoVal] = useState('');
    
    const background = [
        {name: "Gradient", value: "github.com/"},
        {name: "Solid", value: "facebook.com/"}
    ];

    const types = [
        {type: "Gray", link: "github.com/"},
        {type: "Red", link: "facebook.com/"},
        {type: "Yellow", link: "instagram.com/"},
        {type: "Green", link: "instagram.com/"},
        {type: "Blue", link: "instagram.com/"},
        {type: "Indigo", link: "instagram.com/"},
        {type: "Purple", link: "linkedin.com/in/"},
        {type: "Pink", link: "linkedin.com/in/"}
    ];

    const changeTypeLink = (type) => {
    setType(type)
    for (var prop in types) {
            if (types[prop].type === type){
            setLink(types[prop].link)
            }
        }
    }

    function decrement(get, set) {
        if(get == 100 || get == 50) set(get - 50);
        else if(get != 0) set(get - 100);
    }

    function increment(get, set) {
        if(get == 0 || get == 50) set(get + 50);
        else if(get != 900) set(get + 100);
    }

    const decrementButtons = document.querySelectorAll(
    `button[data-action="decrement"]`
    );

    const incrementButtons = document.querySelectorAll(
    `button[data-action="increment"]`
    );

    decrementButtons.forEach(btn => {
    btn.addEventListener("click", decrement);
    });

    incrementButtons.forEach(btn => {
    btn.addEventListener("click", increment);
    });

    return(
        <div className="content grid grid-cols-2 justify-items-center"> 
            <div className="leftbox box">
                <div className="editor mx-5 lg:w-6/12 bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
                    <div id="header-buttons" className="py-3 px-4 flex">
                        <button className="px-5 py-1 rounded-xl text-sm font-medium text-indigo-600 bg-white outline-none focus:outline-none m-1 hover:m-0 focus:m-0 border border-indigo-600 hover:border-4 focus:border-4 transition-all">
                            Copy Code
                        </button>
                    </div>
                    <div id="code-area" className="py-4 px-4 mt-1 text-white text-xl">
                        <div className="mb-2">
                            <span className="text-yellow-300">const</span> <span className="text-blue-400">pluckDeep</span> <span className="text-green-400">=</span> <span className="text-blue-400">key</span> <span className="text-green-400">=&gt;</span> <span className="text-blue-400">obj</span> <span className="text-green-400">=&gt;</span> <span className="text-purple-600">key</span>.<span className="text-purple-600">split</span>(<span className="text-blue-400">'.'</span>).<span className="text-purple-600">reduce</span>((<span className="text-blue-400">accum</span>, <span className="text-blue-400">key</span>) <span className="text-green-400">=&gt;</span> <span className="text-purple-600">accum</span>[<span className="text-purple-600">key</span>], <span className="text-purple-600">obj</span>)
                        </div>

                        <div className="mb-2">
                            <span className="text-yellow-300">const</span> <span className="text-blue-400">compose</span> <span className="text-green-400">=</span> (<span className="cm-meta">...</span><span className="text-blue-400">fns</span>) <span className="text-green-400">=&gt;</span> <span className="text-blue-400">res</span> <span className="text-green-400">=&gt;</span> <span className="text-purple-600">fns</span>.<span className="text-purple-600">reduce</span>((<span className="text-blue-400">accum</span>, <span className="text-blue-400">next</span>) <span className="text-green-400">=&gt;</span> <span className="text-purple-600">next</span>(<span className="text-purple-600">accum</span>), <span className="text-purple-600">res</span>)
                        </div>

                        <div className="mb-2">
                            <div className="sub-line">
                                <span className="text-yellow-300">const</span> <span className="text-blue-400">unfold</span> <span className="text-green-400">=</span> (<span className="text-blue-400">f</span>, <span className="text-blue-400">seed</span>) <span className="text-green-400">=&gt;</span>
                            </div>
                            <div className="sub-line ml-8">
                                <span className="text-yellow-300">const</span> <span className="text-blue-400">go</span> <span className="text-green-400">=</span> (<span className="text-blue-400">f</span>, <span className="text-blue-400">seed</span>, <span className="text-blue-400">acc</span>) <span className="text-green-400">=&gt;</span>
                            </div>
                            <div className="sub-line ml-16">
                                <span className="text-yellow-300">const</span> <span className="text-blue-400">res</span> <span className="text-green-400">=</span> <span className="text-purple-600">f</span>(<span className="text-purple-600">seed</span>)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="configurator grid bg-white shadow-xl rounded-lg mt-6 place-items-center">
                    <form className="w-full max-w-md p-6">
                        <p className="text-4xl">Configure</p>
                        <div className="flex flex-wrap -mx-3 mb-6 mt-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Profile
                                </label>
                                
                                <div className="relative">
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    id="grid-type" onChange={e => (changeTypeLink(e.target.value))} value={typeSelected}>
                                    {types.map(function(type, i) {
                                        return <option key={i}>{type.type}</option>
                                    })}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6 mt-6">
                            <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                Background
                            </label>
                            
                            <div className="relative">
                                <select className="block h-12 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    id="grid-type" onChange={(e) => {e.preventDefault(); setBGType(e.target.value)}} value={bgtype}>
                                    {background.map(function(name, i) {
                                        return <option key={i}>{name.name}</option>
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
                                    Background 1 Color
                                </label>
                                <div className="relative">
                                    <select className="block h-12 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    id="grid-type" onChange={(e) => {e.preventDefault(); setBG1Color(e.target.value)}} value={bg1color}>
                                    {types.map(function(type, i) {
                                        return <option key={i}>{type.type}</option>
                                    })}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Background 1 Shade
                                </label>
                                <div className="flex flex-row h-12 w-full rounded-lg relative bg-transparent mt-1">
                                    <button onClick={(e) => {e.preventDefault(); decrement(bg1shade, setBG1Shade)}} className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span className="m-auto text-2xl font-thin">−</span>
                                    </button>
                                    <input type="number" value={bg1shade} className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number"></input>
                                    <button onClick={(e) => {e.preventDefault(); increment(bg1shade, setBG1Shade)}} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span className="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Background 2 Color
                                </label>
                                <div className="relative">
                                    <select className="block h-12 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    id="grid-type" onChange={(e) => {e.preventDefault(); setBG2Color(e.target.value)}} value={bg2color}>
                                    {types.map(function(type, i) {
                                        return <option key={i}>{type.type}</option>
                                    })}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Background 2 Shade
                                </label>
                                <div className="flex flex-row h-12 w-full rounded-lg relative bg-transparent mt-1">
                                    <button onClick={(e) => {e.preventDefault(); decrement(bg2shade, setBG2Shade)}} className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span className="m-auto text-2xl font-thin">−</span>
                                    </button>
                                    <input type="number" value={bg2shade} className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number"></input>
                                    <button onClick={(e) => {e.preventDefault(); increment(bg2shade, setBG2Shade)}} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span className="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Title Color
                                </label>
                                <div className="relative">
                                    <select className="block h-12 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    id="grid-type" onChange={(e) => {e.preventDefault(); setTitleColor(e.target.value)}} value={titlecolor}>
                                    {types.map(function(type, i) {
                                        return <option key={i}>{type.type}</option>
                                    })}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Title Shade
                                </label>
                                <div className="flex flex-row h-12 w-full rounded-lg relative bg-transparent mt-1">
                                    <button onClick={(e) => {e.preventDefault(); decrement(titleshade, setTitleShade)}} className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span className="m-auto text-2xl font-thin">−</span>
                                    </button>
                                    <input type="number" value={titleshade} className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number"></input>
                                    <button onClick={(e) => {e.preventDefault(); increment(titleshade, setTitleShade)}} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span className="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Title Color (Hover)
                                </label>
                                <div className="relative">
                                    <select className="block h-12 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    id="grid-type" onChange={(e) => {e.preventDefault(); setTitleColorHover(e.target.value)}} value={titlecolorhover}>
                                    {types.map(function(type, i) {
                                        return <option key={i}>{type.type}</option>
                                    })}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Title Shade (Hover)
                                </label>
                                <div className="flex flex-row h-12 w-full rounded-lg relative bg-transparent mt-1">
                                    <button onClick={(e) => {e.preventDefault(); decrement(titleshadehover, setTitleShadeHover)}} className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span className="m-auto text-2xl font-thin">−</span>
                                    </button>
                                    <input type="number" value={titleshadehover} className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number"></input>
                                    <button onClick={(e) => {e.preventDefault(); increment(titleshadehover, setTitleShadeHover)}} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span className="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Text Color
                                </label>
                                <div className="relative">
                                    <select className="block h-12 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    id="grid-type" onChange={(e) => {e.preventDefault(); setTextColor(e.target.value)}} value={textcolor}>
                                    {types.map(function(type, i) {
                                        return <option key={i}>{type.type}</option>
                                    })}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Text Shade
                                </label>
                                <div className="flex flex-row h-12 w-full rounded-lg relative bg-transparent mt-1">
                                    <button onClick={(e) => {e.preventDefault(); decrement(textshade, setTextShade)}} className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span className="m-auto text-2xl font-thin">−</span>
                                    </button>
                                    <input type="number" value={textshade} className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number"></input>
                                    <button onClick={(e) => {e.preventDefault(); increment(textshade, setTextShade)}} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span className="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                   </form>
                </div>       
            </div>
        </div>
    )
}