
export class Country {
    name:string;
    id:number=0;

    copy():Country{
        let obj=new Country();
        obj.name=this.name;
        obj.id=this.id;
        return obj;
    }
    clear(){
        this.name="";
        this.id=0;
    }
}
