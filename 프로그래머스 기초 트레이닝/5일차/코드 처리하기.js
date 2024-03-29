function solution(code) {
    let mode = 0;
    let ret = "";
    for(let idx=0; idx<code.length; idx++){
        if(code[idx] === "1") mode === 0 ? mode = 1 : mode = 0;
        if(mode === 0)
            (code[idx] !== "1") && ((idx % 2 === 0) && (ret += code[idx]));
        else
            (code[idx] !== "1") && ((idx % 2 !== 0) && (ret += code[idx]));
    }
     return ret === "" ? "EMPTY" : ret;
}