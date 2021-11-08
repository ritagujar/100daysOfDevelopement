var videoName = "Intro to JS";
var fileFormat = "mp4";
var duration = "2.48";
var owner = "John";

function getVideoName() {
  return videoName;
}

function getFileFormat() {
  return fileFormat;
}

function getDuration() {
  return duration;
}

function getOwner() {
  return owner;
}

var video = {
  videoName: "Intro to JS",
  fileFormat: "mp4",
  duration: "2.48",
  owner: "John",
  getVideoName: function () {
    return this.videoName;
  },

  getFileFormat: function () {
    return this.fileFormat;
  },

  getDuration: function () {
    return this.getDuration;
  },

  getOwner: function () {
    return this.owner;
  },
};

console.log(video.getVideoName());

// This Keyword

var firstName = "Mark";
var person = {
  firstName: "Jack",
  yearOfBirth: 1990,
  job: "Pilot",
  getName: function () {
    console.log(this.firstName); // This will refere to the local varible name of person object  o/p - Jack
    console.log(firstName); //this will refere to the globel variable name   o/p - Mark
  },

  parents: {
    firstName: "Ryan",
    yearOfBirth: 1985,
    job: "Pilot",
    getName: function () {
      console.log(this.firstName);
    },
  },
};

person.getName();
person.parents.getName();
