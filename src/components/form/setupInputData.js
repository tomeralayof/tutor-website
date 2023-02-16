const initInputObj = (data,idx) => {
    return {
      filedName : data.filedName,
      placeholder : data.placeholder,
      isValid : false,
      divClass : `input-section ${ data.name }-section ${idx !== 0 ? "folded" : "" }`
    }
}

export const InitFildes = () => {
  
    let result = [];
  
    const input = [
      {filedName : process.env.REACT_APP_INPUT_NAME , placeholder : "הכנס את שמך"},
      {filedName : process.env.REACT_APP_INPUT_MESSAGE , placeholder : "מה תרצה ללמוד"},
      {filedName : process.env.REACT_APP_INPUT_PHONE ,  placeholder : "השאר מספר טלפון"}
    ]
    
    input.map((elem,idx) => result.push(initInputObj(elem,idx)));
  
    return result;
  }