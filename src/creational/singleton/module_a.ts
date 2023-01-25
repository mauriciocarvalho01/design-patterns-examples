import { MyDatabaseClassic } from "./db/my-database-classic";

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({
  email: "developer.mauricio1@gmail.com",
  password: "developer0101",
});
myDatabaseClassic.add({
  email: "developer2.mauricio1@gmail.com",
  password: "developer0102",
});
myDatabaseClassic.add({
  email: "developer3.mauricio1@gmail.com",
  password: "developer0103",
});

myDatabaseClassic.show();

export { myDatabaseClassic };
