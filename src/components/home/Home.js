import React from 'react';
import '../home/home.css';
import Ring from '../ring/Ring';

function Home() {
    return (
        <div className="home">
            <div className="home-block1">
              <h1 className="home-header">The all–new online learning experience for designing beautiful and functional interfaces.</h1>
            </div>
            <div className="home-block2">
               <div className="flex">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJ2R9O5THIdzGHJl3RjnK2Bxzj20iYSsMQA&usqp=CAU" alt=""
                        className="home-left"></img>
                   <p className="mt-2 underline">by MDS</p>
               </div>
               <div className="multi-rings">
                    <div className="inner-wrapper">
                    <Ring src="https://shiftnudge.com/_assets/img/students/jonah.jpg" />
                            <Ring src="https://shiftnudge.com/_assets/img/students/yannik.jpg" />
                            <Ring src="https://shiftnudge.com/_assets/img/students/stephen.jpg" />
                            <Ring src="https://shiftnudge.com/_assets/img/students/chibuzor.jpg" />
                            <Ring src="https://shiftnudge.com/_assets/img/students/caden.jpg" />
                            <Ring src="https://shiftnudge.com/_assets/img/students/davida.jpg" />
                            <Ring src="https://shiftnudge.com/_assets/img/students/jonah.jpg" />
                            <Ring src="https://shiftnudge.com/_assets/img/students/yannik.jpg" />
                            <Ring src="https://shiftnudge.com/_assets/img/students/stephen.jpg" />
                            <Ring src="https://shiftnudge.com/_assets/img/students/chibuzor.jpg" />
                            <Ring src="https://shiftnudge.com/_assets/img/students/caden.jpg" />
                            <Ring src="https://shiftnudge.com/_assets/img/students/davida.jpg" />
                            <Ring src="https://shiftnudge.com/_assets/img/students/jonah.jpg" />
                            <Ring src="https://shiftnudge.com/_assets/img/students/yannik.jpg" />
                            <Ring src="https://shiftnudge.com/_assets/img/students/stephen.jpg" />
                            <Ring src="https://shiftnudge.com/_assets/img/students/chibuzor.jpg" />
                            <Ring src="https://shiftnudge.com/_assets/img/students/caden.jpg" />
                            <Ring src="https://shiftnudge.com/_assets/img/students/davida.jpg" />
                    </div>        
               </div>
            </div>
        </div>
    )
}

export default Home