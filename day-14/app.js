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
