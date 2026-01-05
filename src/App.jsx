import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin( ScrollTrigger, SplitText );

function App() {
  return (
    <div className='text-6xl'>App</div>
  )
}

export default App