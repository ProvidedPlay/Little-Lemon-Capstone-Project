const getFutureDayMonth = (daysAfterToday) => {
    const targetDate = new Date()
    if(0 <= daysAfterToday <= 9){
        const currentTargetDate = targetDate.getDate()
        targetDate.setDate(currentTargetDate + daysAfterToday)
    }
    //console.log("outside" + targetDate)
    return(
        [`${targetDate.toLocaleString('default', {month:'long'})} ${targetDate.getDate().toLocaleString()}`,targetDate]
    )
}

export default getFutureDayMonth;