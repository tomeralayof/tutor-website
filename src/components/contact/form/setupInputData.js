import { inputData } from "../../../config/contact/inputData";

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

    inputData.map((elem,idx) => result.push(initInputObj(elem,idx)));
  
    return result;
  }