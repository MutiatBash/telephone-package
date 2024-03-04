class Telephone {
	constructor() {
		this.observers = new Set();
	}

	addPhoneNumber(observer) {
		this.observers.add(observer);
	}

	removePhoneNumber(observer) {
		this.observers.delete(observer);
	}

	dialPhoneNumber(number) {
		for (let observer of this.observers) {
			observer.dial(number);
		}
	}
}

// Observer class
class Observer {
	dial(number) {
		console.log("Now Dialing...", number);
	}

	print(number) {
		console.log("Observer's Number:", number);
	}
}

// Adding new observers
const phone = new Telephone();
const observer1 = new Observer();
const observer2 = new Observer();

phone.addPhoneNumber(observer1);
phone.addPhoneNumber(observer2);
console.log(phone.observers.size);

observer1.print(2347023232);
observer2.dial(2347023232);
