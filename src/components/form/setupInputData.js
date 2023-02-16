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
      {name : "name" , placeholder : "הכנס את שמך"},
      {name : "message" , placeholder : "מה תרצה ללמוד"},
      {name : "phone" ,  placeholder : "השאר מספר טלפון"}
    ]
    
    input.map((elem,idx) => result.push(initInputObj(elem,idx)));
  
    return result;
  }