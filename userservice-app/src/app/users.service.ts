export class UsersService{

    users = [
        {
            name: "Optimus",
            status: "Active"
        },
        {
            name: "BumbleBee",
            status: "Active"
        },
        {
            name: "Megatron",
            status: "Inactive"
        },
        {
            name: "WindBlade",
            status: "Inactive"
        }
    ]

    updateUserStatus(id: number, newStatus: string){
        this.users[id].status = newStatus;
    }
}