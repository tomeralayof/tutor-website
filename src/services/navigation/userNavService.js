const ASCHII_KEY_LEFT = 37;

const handleUserNavigationLeft = ( currSectionId,setNewSection ) => {
    
    document.addEventListener("keydown", 
                            (e) => _handleLeftRequest(e,currSectionId,setNewSection));
    return () => {
        document.removeEventListener("keydown", (e) => 
                                    _handleLeftRequest(e,currSectionId,setNewSection));
    }
}

const _setNewSection = (currSectionId) => {
    let lastChar = currSectionId.charAt(currSectionId.length - 1);
    lastChar = parseInt(lastChar) - 1;
    return currSectionId.slice(0,-1) + lastChar;
}

const _handleLeftRequest = (event, currSectionId,setNewSection ) => {
    if(event.keyCode === ASCHII_KEY_LEFT) {
        const newSection = _setNewSection(currSectionId);
        setNewSection(newSection);
    }
}

const userNavService = {
    handleUserNavigationLeft
}

export default userNavService;