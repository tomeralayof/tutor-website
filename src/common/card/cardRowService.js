const renderRow = ( showCardsSameRow,cssRow ) => {
    return (
        <div className = {cssRow} >
            {showCardsSameRow}
        </div>
    )
}

const renderSameRowCards = (startIdx,endIdx) => {
    return imageUrl.slice(startIdx,endIdx).map((imguUrl,currIdx,startIdx) =>
                                                renderCard(imguUrl,currIdx,startIdx));
}

const cardRowService = {
    renderRow,
    renderSameRowCards
}

export default cardRowService;