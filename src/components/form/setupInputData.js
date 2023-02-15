const initInputObj = (data,idx) => {
    return {
      value : "",
      name1 : data.name,
      placeholder : data.placeholder,
      divClass : `input-section ${ data.name }-section ${idx !== 0 ? "folded" : "" }`
    }
}

export const InitFildes = () => {

    let result = [];
  
    const input = [
      {name : "email" , placeholder : "הכנס את שמך"},
      {name : "emal" , placeholder : "הכנס הודעה"},
      {name : "email" ,  placeholder : "הכנס מייל"}
    ]
    
    input.map((elem,idx) => result.push(initInputObj(elem,idx)));
  
    return result;
  }