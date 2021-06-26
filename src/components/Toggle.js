import React from 'react';

export function ToggleHome(){
    return(
        <div class="headelement modetoggle bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex">
            <button class="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-4 py-2 active" id="grid">
            <span>Home</span>
            </button>
            <button class="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full px-4 py-2" id="list">
            <span>Profiles</span>
            </button>
        </div>
    )
}

export function ToggleProfiles(){
    return(
        <div class="headelement modetoggle bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex">
            <button class="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-4 py-2" id="grid">
            <span>Home</span>
            </button>
            <button class="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full px-4 py-2 active" id="list">
            <span>Profiles</span>
            </button>
        </div>
    )
}