
export const getDaysArray = ( starting, ending ) => {
    
    for (var a = [], d = new Date(starting);  d <= new Date(ending);  d.setDate(d.getDate() + 1)) {
        var i = 0
        a.push(new Date(d).getDate() + '/' + Number(new Date(d).getMonth() + 1))
    }
    return a;
}