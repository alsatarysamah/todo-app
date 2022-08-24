export default function saveData(key,data) {
  let str = JSON.stringify(data);
  localStorage.setItem(key, str);
  console.log(str);
  console.log("saved");
}
export function getData(key) {

  let ret = localStorage.getItem(key);
  let arr = JSON.parse(ret);
return arr;
  // if (arr != null)
  //     for (var i = 0; i < arr.length; i++) {

  //         new Employee(arr[i].employeeID, arr[i].fullName, arr[i].department, arr[i].level, arr[i].image, arr[i].salary)
  //     }
}
