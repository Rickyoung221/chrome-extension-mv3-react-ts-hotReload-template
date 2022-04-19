/**
 * Reference:https://blog.logrocket.com/creating-chrome-extension-react-typescript/
 */
import { DOMMessage, DOMMessageResponse } from './types';
import ReactDOM from 'react-dom';
//import { createRoot } from 'react-dom/client';
import CustomButtonDemo from '../components/CustomButtonDemo';

console.log('[TRACE] Content Script is Running');

 //Listern Funciton for React app (popup).
 const messagesFromReactAppListener = (
     msg: DOMMessage, 
     sender: chrome.runtime.MessageSender, 
     sendResponse: (response: DOMMessageResponse) => void
   ) => {
 
     console.log('[content.js]. Message received', msg);
     const response: DOMMessageResponse = {
       title: document.title,
       headlines: Array.from(document.getElementsByTagName<"h1">("h1")).map(h1 => h1.innerText)
     };
 
     console.log('[content.js]. Message response', response);
 
     sendResponse(response)
   }
 
 /**
  * Fired when a message is sent from either an extension process or a content script.
  */
 chrome.runtime.onMessage.addListener(messagesFromReactAppListener);


 function Content() {
  return (
    <div className='CRA-container'>
      <div className='content'>
        <CustomButtonDemo
                border={''} 
                color={'blue'} 
                height={'100px'} 
                onClick={() => console.log("You clicked on the pink circle!")}
                radius={'50%'} 
                width={'100px'} 
                children = 'Button in Content Script'
        />
      </div>
    </div>
  );
}

//Inject the react function component into DOM
// Do not driectly inject into DOM.
const app = document.createElement('div');
app.id = 'CRA-container';
document.body.appendChild(app);
ReactDOM.render(<Content />, app); 

/* For React 18 but does not work. 
const container = document.getElementById('CRA-container') as HTMLDivElement;
const app = createRoot(container!);
app.render(<Content />);
*/ 



export default Content;
