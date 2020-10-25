class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0
        this.currentWorkload = 0;
        this.pets = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.pets >= this.capacity) {
            throw new Error('Sorry, we are not able to accept more patients!')
        }
        let owner = this.clients.find(c => c.name === ownerName);
        
        
        if (pet === undefined || pet.procedures.length === 0) {
            
            if (pet === undefined) {
                pet = {
                    name: petName,
                    kind: kind.toLowerCase(),
                    owner: ownerName,
                    procedures: [],
                }
                owner.pets.push(pet);
            }
            pet.procedures = procedures;
            this.pets++;
            this.currentWorkload = (this.pets / this.capacity) * 100;
            return `Welcome ${petName}!`;
        } else {
            throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${pet.procedures.join(", ")}.`)


        }

      
        

    }
    onLeaving(ownerName, petName) {
        let client = this.clients.find(c => c.name === ownerName);
        if (client === undefined) {
            throw new Error(`Sorry,there is no such client!`)
        } else {
            let pet = client.pets.find(p => p.name === petName);
            if (pet === undefined || pet.procedures.length === 0) {
                throw new Error(`Sorry,there are no procedures for ${petName}!`);

            } else {
                this.totalProfit += (pet.procedures.length) * 500;
                pet.procedures = [];
                this.pets--;
                this.currentWorkload = (this.pets / this.capacity) * 100;
                return `Goodbye ${petName}. Stay safe!`;
            }
        }

    }
    toString() {
        let output = [
            `${this.clinicName} is ${Math.floor(this.currentWorkload)}% busy today!`,
            `Total profit: ${this.totalProfit.toFixed(2)}$`
        ]
        this.clients.sort((a, b) => a.name.localeCompare(b.name))
            .forEach(c => {
                output.push(`${c.name} with:`)
                c.pets.sort((a, b) => a.name.localeCompare(b.name)).forEach(p => {
                    output.push(`---${p.name} - a ${p.kind} that needs: ${p.procedures.join(", ")}`)
                });
            });
        return output.join("\n");
    }

}

let clinic = new VeterinaryClinic('SoftCare', 10);
clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB'])
clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']);
clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B'])
/*console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
console.log(clinic.toString());
*/
console.log(clinic.clients)