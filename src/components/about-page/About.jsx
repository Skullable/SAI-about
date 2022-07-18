import "./about.scss"

export default function About() {
  return (
    <div className="about">
        <div className="mid">
            <div className="textcontain">
             <h1>About</h1>
             <ul>
                <div className="Item"><span className="house">HOME</span></div>
                <div className="Item"><li>ABOUT</li></div>
             </ul>
             <span>“We aspire to help build a reliable and consistent lead generation system. Functioning as your virtual sales department we deliver results by employing unique tools and strategies, and a very passionate team.”</span>
            </div>
            <img src="Images/mid.jpeg" alt="" />
        </div>
        <div className="projects">
            <div className="container">
            <div className="left">
                <h4>Launch Digital Projects to Propel Your Mission</h4>
                <p>Your next great business venture should never be held back by lacking technical execution. Let us handle the technical side of things while you focus on expanding your impact and realizing your mission in the digital space. we’ll be your technical co-founders, a natural extension of your team learning your operation inside and out. Using that understanding, we’ll tailor-make digital products that will drive success in your market.</p>
            </div>
            <div className="right">
            <img src="Images/Digital-Marketing-Projects-Page.png" alt="" />
            </div>
            </div>
        </div>
        <div className="mobileapp"></div>
        <div className="knowhow"></div>
    </div>
  )
}
