export class LoggingService{

    logNewAccountAdded(account: {name: string, status: string}){
        console.log("New Account is added - "+ account.name + " : " + account.status);
    }

    logStatusChange(newStatus: string){
        console.log("A server status changed, new status - " + newStatus)
    } 
}