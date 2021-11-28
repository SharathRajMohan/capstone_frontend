export class Product {
    id: number;
    foodName:string;
    description:string;
    avatar:string;
    price:number;

    constructor(id,foodName,description='',price = 0,avatar = "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80") {
        this.id = id;
        this.foodName = foodName;
        this.description = description;
        this.avatar = avatar;
        this.price = price;
    }
}