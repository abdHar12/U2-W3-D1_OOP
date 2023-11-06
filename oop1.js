class User {
  constructor(name, surname, age, location) {
    this.firstName = name;
    this.secondName = surname;
    this.age = age;
    this.location = location;
  }
  static oldestPerson(x, y) {
    if (x.age > y.age) {
      return `${x.firstName} ${x.secondName} è piu vecchio di ${y.firstName} ${y.secondName}`;
    } else if (x.age === y.age) {
      return `${x.firstName} ${x.secondName} e ${y.firstName} ${y.secondName} hanno la stessa età`;
    } else {
      return `${y.firstName} ${y.secondName} è piu vecchio di ${x.firstName} ${x.secondName}`;
    }
  }
}

const stUser = new User("Abderrahmane", "Harouane", 25, "Vicenza");
const ndUser = new User("Denis", "Sonmez", 24, "Vicenza");
const rdUser = new User("Mario", "Rossi", 25, "Vicenza");

console.log(User.oldestPerson(stUser, rdUser));
