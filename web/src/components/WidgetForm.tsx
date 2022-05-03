import { CloseButton } from "./CloseButton";
import bugImageUrl from "../assets/bug.svg"
import ideaImageUrl from "../assets/idea.svg"
import thoughtImageUrl from "../assets/thought.svg"


const feedbackTypes = {
    BUG:{
    title:"Problem",
    image:{
        source:bugImageUrl,
        alt:"bug image"
    }
    },

    IDEA:{
        title:"Idea",
        image:{
            source:ideaImageUrl,
            alt:"lamp image"
        }
    },

    OTHER:{
        title:"Other",
        image:{
            source:thoughtImageUrl,
            alt:"thought ballon image"
        }
    }
}

export function WidgetForm(){
return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
       <header>
            <span className = "text-xl leading-6">Send your feedback</span>
            <CloseButton/>
       </header>

        <div className = "flex py-8 gap-2 w-full">
            {Object.entries(feedbackTypes).map(([key, value]) =>{ return "s"})}
        </div>

        <footer className="text-xs text-neutral-400">
            Made with ❤️ from <a className="underline underline-offset-1" href="https://www.linkedin.com/in/gabrielguinterherter/">Gabriel Guinter Herter</a>
        </footer>
    </div>
)
}