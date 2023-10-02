//always auto-validate
import Address from "./address";

class Customer {
    _id: string;
    _name: string = "";
    _address!: Address;
    _active: boolean = true;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    //auto-validade
    validate() {
        if (this._name.length === 0) throw new Error("Name is required");
        if (this._id.length === 0) throw new Error("Id is required");
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    activate() {
        if (this._address === undefined) {
            throw new Error("Address is mandatory to activa a customer");
        }
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }

    set Address(address: Address) {
        this._address = address;
    }
}