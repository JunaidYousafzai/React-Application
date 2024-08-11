import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://media.npr.org/assets/img/2018/12/31/rdr2_screenshot-014_wide-71d02434782cc887366ba9767260080bb73fa207.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Rdr 2 Take Over Game Industry in 2020
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption
                        </p>
                        <p className="mt-4 text-gray-600">
                        The game's development lasted over eight years, beginning soon after Red Dead Redemption's release, and it became one of the most expensive video games ever made. Rockstar co-opted all of its studios into one large team to facilitate development. They drew influence from real locations as opposed to film or art, focused on creating an accurate reflection of the time with the game's characters and world. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}