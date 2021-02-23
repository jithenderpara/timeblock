export default class Utils {
    static weeks() { return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]}
    static months() { return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]}
    static hours() { 
        const hours=24;
        var times: any[] = [];
        for(var i = 0; i <= hours ; i++) {
            if (i < 10) {
                times.push(`0${i}`);
            }else
            times.push(i);
    } 
    return times;
}
static minutes () { 
        const minutes=59;
        var times: any[] = [];
        for(var i = 0; i <= minutes; i++) {
            if (i < 10) {
                times.push(`0${i}`);
            }else
            times.push(i);
    } 
    return times;
}
static years (min, max) { 
        var years: any[] = [];
        for(var i = min; i <= max; i++) {
            years.push(i);
    } 
    return years;
}
    static doSomethingElse(val: string) { return val; }
}