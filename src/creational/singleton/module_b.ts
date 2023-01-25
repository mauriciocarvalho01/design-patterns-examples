import { MyDatabaseClassic } from "./db/my-database-classic";
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from "./module_a";

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({
  email: "teste.mauricio1@gmail.com",
  password: "developer0101",
});
myDatabaseClassic.add({
  email: "teste.mauricio1@gmail.com",
  password: "developer0102",
});
myDatabaseClassic.add({
  email: "teste.mauricio1@gmail.com",
  password: "developer0103",
});

myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
