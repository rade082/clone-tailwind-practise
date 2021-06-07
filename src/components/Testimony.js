import React from 'react'
import Testimonies from './Testimonies'

function Testimony() {
    return (
        <div className=" ml-40 mr-28 mt-40">
            <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-24">
               <div>
                 <Testimonies 
                  id = "1001"
                  title="I often refer young and aspiring designers to Shift Nudge as it has the foundation you need to kickstart a 
                  career or fine-tune the craft of product design."
                  highlight="MDS has put together the most valuable program you can find out there."
                  textColor="bg-pink-500"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20XYLGADeZ6bFu7HH1rErG-8Sj9PBFhzA7w&usqp=CAU"
                  name="LILIIA MANDRINO"
                  company="DIRECTOR OF UX • EA"
                 />
               </div>
               <div>
                 <Testimonies 
                  id = "1002"
                  title="This is the most impactful design course I've ever taken. I especially love the tasks for 
                  each lesson and personal feedback from MDS."
                  highlight="the most comprehensive, well explained, well structured, and most actionable resource in design I've ever taken."
                  textColor="bg-yellow-500"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20XYLGADeZ6bFu7HH1rErG-8Sj9PBFhzA7w&usqp=CAU"
                  name="RAMON GILABERT"
                  company="Microsoft"
                 />
               </div>
               <div>
               <Testimonies 
                  id = "1003"
                  title="I've taken many courses—recently a masters in interaction design—and I've read every book, but your course is by far"
                  highlight="It's all been incredibly worthwhile! "
                  textColor="bg-red-500"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20XYLGADeZ6bFu7HH1rErG-8Sj9PBFhzA7w&usqp=CAU"
                  name="BOMA JOSIA"
                  company="PRODUCT DESIGNER"
                 />
               </div>
               <div>
               <Testimonies 
                  id = "1004"
                  title="I would've paid 4x more for this course—Matt is an incredible teacher!"
                  textColor="bg-purple-500"
                  highlight="This was exactly what I needed to take my designs to the next level. "
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20XYLGADeZ6bFu7HH1rErG-8Sj9PBFhzA7w&usqp=CAU"
                  name="JENNY VOGEL"
                  company="GROWFLOW"
                 />
               </div>
               <div>
               <Testimonies 
                  id = "1005"
                  title="Shift Nudge has fundamentally changed the way I design for the web."
                  highlight="Not gonna lie... this is the best design course I've ever taken. "
                  textColor="bg-blue-500"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20XYLGADeZ6bFu7HH1rErG-8Sj9PBFhzA7w&usqp=CAU"
                  name=" BOMA JOSIA"
                  company="PRODUCT DESIGNER"
                 />
               </div>
               <div>
               <Testimonies 
                  id = "1005"
                  title="This is the most impactful design course I've ever taken. I especially love the tasks for 
                  each lesson and personal feedback from MDS."
                  highlight="It's all been incredibly worthwhile!"
                  textColor="bg-green-500"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20XYLGADeZ6bFu7HH1rErG-8Sj9PBFhzA7w&usqp=CAU"
                  name=" BOMA JOSIA"
                  company="PRODUCT DESIGNER"
                 />
               </div>
            </div>
            
        </div>
    )
}

export default Testimony
