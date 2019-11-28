import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CounterService{

    activeCounter = 0;
    inactiveCounter = 0;

    constructor(private loggingService: LoggingService){}

    incrementActiveCounter(){
        this.loggingService.logStausChangeCounts("active ", ++this.activeCounter);
        return this.activeCounter;
    }
    incrementInactiveCounter(){
        this.loggingService.logStausChangeCounts("Inactive ", ++this.inactiveCounter);
        return this.activeCounter;
    }
    
}