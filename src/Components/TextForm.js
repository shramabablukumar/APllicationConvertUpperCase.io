// any new short cut form using rfc 
import React,{useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upper Case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
      // console.log("Upper Case was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
  }
  const handleclearClick = ()=>{
    // console.log("Upper Case was clicked" + text);
    let newText = ' '
    setText(newText);
  }
  const handleSentenceCaseClick = () => {
    const result =
      text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(result);
  };

  const handleDownloadClick = ()=>{
    const blob = new Blob([text],{type: 'text/plain'});
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.href= url;
    link.download = 'text.txt';
    link.click();
    URL.revokeObjectURL(url);


  };
  const handleColorChange = () => {
    setColor((prevColor) => (prevColor === 'black' ? 'red' : '#042743'));
  };
  const handleCopyText = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Text copied to clipboard!');
    });
  };

  const handleRemoveSpaces = () => {
    setText(text.replace(/\s+/g, ''));
  };

    const handleOnChange = (event)=>{
        // console.log("onChange");
        setText(event.target.value);

    }


    const [text, setText] = useState('Enter the text here ?');
    const [color, setColor] = useState('black');

    
  return (
    <>
    <div className='Container'style={{color:props.mode=== 'dark'? 'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
  {/* <label for="myBox" class="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange}style={{backgroundColor:props.mode=== 'dark'? 'grey':'white', color:props.mode=== 'dark'? 'white':'#042743'}}id="myBox" rows="13"></textarea>
</div>
<button className='btn btn-primary mx-2'onClick={handleUpClick}>Convert to UpperCase</button>
<button className='btn btn-primary mx-2'onClick={handleLoClick}>Convert to LowerCase</button>
<button className='btn btn-primary mx-2'onClick={handleclearClick}>Clear Text</button>
<button className="btn btn-primary mx-2"onClick={handleSentenceCaseClick}>SentenceCase</button>
<button className="btn btn-success mx-2"onClick={handleDownloadClick}>Download Text</button>
<button className="btn btn-info mx-2"style={{ color: color }}onClick={handleColorChange} >Change Color</button>
<button className="btn btn-info mx-2"style={{ color: color }}onClick={handleCopyText} >Copy Text</button>
<button className="btn btn-info mx-2"style={{ color: color }}onClick={handleRemoveSpaces} >Remove Space</button>
<p style={{ color: color }}>
        The current color is: <strong>{color}</strong>
      </p>
      
    </div>
    <div className='Container my-3'style={{color:props.mode=== 'dark'? 'white':'#042743'}}>
      <h2>your text Summary</h2>
      <p>{text.split(" ").length} wrods and {text.length}characters</p>
      <p>{0.008*text.split(" ").length } Minutes read  and {text.length}characters</p>
      <h3>Preview</h3>
      <p>{text.length>0 ? text:"Enter something in the textbox above to preview it here "}</p>

    </div>



    
    </>
    
  )
}
