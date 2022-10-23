// Code your solution here

const findMatching = (array,string) => array.filter(val => val.toLowerCase() === string.toLowerCase());

const fuzzyMatch = (array,string) => array.filter(val => val.toLowerCase().startsWith(string.toLowerCase()));

const matchName = (drivers,name) => drivers.filter(val => val.name === name);