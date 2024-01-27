import "./EventCards.css"
import { Fade } from "react-awesome-reveal"
import EventC from "./EventC"

const EventCards = () => {
  return (
    <>
      <h1 className="text-7xl font-bold text-white text-center"> <span className="text-purple-700">E</span>vents</h1>
      <div className="container">
        <Fade cascade={false} triggerOnce={true} >
        <EventC title="BGMI Battle Royale" description="The BGMI College Esports offers an exhilarating battle royale experience on Erangel, with prizes for solo and squad players. Get ready for intense gaming action!" path="bgmi" />
        <EventC title="Tech-Treasure" description="This event combines problem-solving and involving participants in complex puzzles and tasks to encourage innovation and find clues to get the final treasure with exciting prizes and certificates with validation" path="techtreasure" />
        <EventC title="Web Replica Race" description="A web replication event involves recreating websites, fostering creativity, and showcasing design skills, promoting innovation and digital expertise." path="webreplicarace" />         
        </Fade>
      </div>
      <div className="container">
        <Fade cascade={false} triggerOnce={true} >
        <EventC title="Sudoku Saga" description="Sudoku event, challenges participants with numeric puzzles, testing logical reasoning and strategic thinking, promoting mental agility and fostering competitive spirit among players." path="sudokusaga" />
        <EventC title="Unscramble the Source" description="Get bored by just coding competition. Let's do something unique. We will provide you a code and you have to rectify it without adding anything.." path="unscramblethesource" />
        <EventC title="Coders Battleground" description=" challenges participants with intricate coding problems, testing problem-solving and programming skills, fostering innovation, and encouraging healthy competition." path="codersbattleground" />         
        </Fade>
      </div>
      <div className="container">
        <Fade cascade={false} triggerOnce={true} >
        <EventC title="Typing Thunder" description="Everyone is typing but let's find out who is the fastest of us and evaluating words per minute, accuracy, and efficiency, fostering fast and precise typing skills, in a competitive and engaging environment." path="typingthunder" />
        <EventC title="TERROR OF ERROR" description="In this participants to identify and fix errors in computer programs, fostering problem-solving skills, precision, and attention to detail in the field of software development." path="terroroferror" />
        <EventC title="Design showdown" description="This event invites participants to design visually appealing posters and logos, showcasing artistic talent, originality, and effective communication in graphic design." path="designshowdown" />         
        </Fade>
      </div>
      <div className="container">
        <Fade cascade={false} triggerOnce={true} >
        <EventC title="Meme Madness" description="Funny Meme event encourages creativity by challenging participants to create humorous and engaging memes, showcasing wit, humor, and artistic flair to entertain and delight audiences." path="mememadness" />
        <EventC title="Technical Presentaion" description="Technical Presentation event showcases participants' knowledge and communication skills, allowing them to present on technical topics " path="technicalpresentation" />
        <EventC title="Quiz Quest" description="Are you ready for a thrilling tech quiz with different levels  across various topics and testing their intelligence. We are excited to see you in final round of this quiz competition which will be held in a different way" path="quiz" />         
        </Fade>
      </div>
      <div className="container">
        <Fade cascade={false} triggerOnce={true} >
        <EventC title="Argument Arena" description="Argument arena features participants presenting compelling arguments, honing persuasive skills, and advocating their viewpoints in a structured manner." path="argumentarena" />
        <EventC title="Mini Project" description="An exciting project competition where participants display their talent to create software and hardware projects, unveiling innovation and creativity. " path="innovision" />
        </Fade>
      </div>
    </>

  )
}

export default EventCards