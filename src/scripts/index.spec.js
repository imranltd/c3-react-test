import React from "react";

import { deleteUser, appendData, removeDuplicates} from "./";


const initialData2 = [
	{
	  id: 4,
	  first_name: "Eve",
	  last_name: "Holt",
	  avatar:
	    "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
	},
  {
    id: 5,
    first_name: "Charles",
    last_name: "Morris",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
  },
  {
    id: 6,
    first_name: "Tracey",
    last_name: "Ramos",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
  }
]

const finalData = {
  users: [
    {
      id: 4,
      first_name: "Eve",
      last_name: "Holt",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
    },
    {
      id: 6,
      first_name: "Tracey",
      last_name: "Ramos",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
    }
  ]
};

const data = {
	users:[
		{'id':1, first_name: 'first'}
	]
}

const data2 = {
	users:[
		{'id':2, first_name: 'second'}
	]
}

const dataAppended = {
	users:[
		{'id':1, first_name: 'first'},
		{'id':2, first_name: 'second'},
	]
}

const dataDuplicate = {
	users:[
		{'id':1, first_name: 'first'},
		{'id':2, first_name: 'second'},
		{'id':2, first_name: 'second'},
	]
}

const dataDuplicate2 = [
	{'id':1, first_name: 'first'},
	{'id':2, first_name: 'second'},
]

describe("Scripts", () => {
	
  it("deletes user on index 1", () => {
	  expect( deleteUser(initialData2, 1) ).toEqual(finalData);
	})

  it("remove duplicates", () => {
	 expect( removeDuplicates(dataDuplicate) ).toEqual(dataDuplicate2);
	})

	it("appends data", () => {
		expect( appendData(data.users, data2.users.map( d => d) ) )
		.toEqual(dataAppended);
	})
})