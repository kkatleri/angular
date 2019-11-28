export class LoggingService{

    logStausChangeCounts(status: string, counter: number){
        console.log(status + "counter - "+ counter);
    }
}