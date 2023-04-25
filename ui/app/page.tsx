import { Inter } from "next/font/google";
import axios from "axios";

export default async function Home() {
  const data = await getData();

  return <main>Home ABC</main>;
}

async function getData() {
  //const res = await fetch('http://localhost:8080/user-create');
  // const res = await fetch('http://127.0.0.1:8080');
  // const res = await fetch('http://nodejs:8080/users');
  //const res = await fetch('http://nodejs:8080/users');
  return axios.get("http://nodejs:8080/users").then((res) => {
    console.log("534534", res.data);
    return res.data;
  });
  // console.log('1234565', res)

  // const response = await fetch("http://nodejs:8080", {
  //   method: "GET", // *GET, POST, PUT, DELETE, etc.
  //   mode: "no-cors", // no-cors, *cors, same-origin
  //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //   credentials: "same-origin", // include, *same-origin, omit
  //   headers: {
  //     "Content-Type": "application/json",
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   redirect: "follow", // manual, *follow, error
  //   referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //   //body: JSON.stringify(data), // body data type must match "Content-Type" header
  // });

  // console.log('response', response)

  //   axios.get("http://localhost:8080/api/getData")
  // .then(function (response) {

  // }).catch(function (error) {
  // console.log(error)
  // });

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data');
  // }
}
