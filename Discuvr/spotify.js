
//This function (search) will change the src of the spotify player
//iframe to the url/songID
function search(term) {
  document.getElementById('player').src = "https://open.spotify.com/embed/track/" + term;
}

//array to store song IDs
var items = [
"116H0KvKr2Zl4RPuVBruDO", "2dpaYNEQHiRxtZbfNsse99",
"7dt6x5M1jzdTEt8oCbisTK", "2iUXsYOEPhVqEBwsqP70rE",
"0e7ipj03S05BNilyu5bRzt", "1rqqCSm0Qe4I9rUvWncaom",
"4w8niZpiMy6qz1mntFA5uM", "0lTYnxJdC68v0oXd5xolxY",
"0pQoNBSZeRFuhLVH8gCVDT", "6PZraXLVqn18HrwCf9fdzH",
"0qpFruHkIqilJMyVwUDo5x", "6jybmGLqTZMaXLzg1MGQyD",
"6NMRWLKSXABykkj58dVW9c", "0CcQNd8CINkwQfe1RDtGV6",
"2i1AVZAYLhrQTvzr1hu7Jt", "4ywvnllm7kpaXDsa1VNNpY",
"0sooJd5WbNnnz5k6yO7FIQ", "6RjKVXi31fui9m4dbiGRrL",
"5edBgVtRD0fvWk140Sl21T", "1T7Htpf1kEvU9Adf8J0ekk",
"6Ep6BzIOB9tz3P4sWqiiAB", "2GgxS8bUT5G25QJTsfSv0R",
"6g1NlCpW7fgqDnWbCCDrHl", "1XGmzt0PVuFgQYYnV2It7A",
"20I6sIOMTCkB6w7ryavxtO", "1wAXODAAL6hY64ZdhrnjBO",
"5w6TVvv71F8px5cObg2xnx", "1mea3bSkSGXuIRvnydlB5b",
"2fTsFCKRFQ5M0igJgabnLA", "7BqBn9nzAq8spo5e7cZ0dJ",
"5x9uAWpQ0qj8V61xckw6TV", "6PCUP3dWmTjcTtXY02oFdT",
"1CQ2cMfrmFM1YdfmjENKVE", "5MFzQMkrl1FOOng9tq6R9r",
"4VrWlk8IQxevMvERoX08iC", "03UrZgTINDqvnUMbbIMhql"];









//this code randomizes the chosen song
var item = items[Math.floor(Math.random()*items.length)];
//prints out chosen song id to console for debugging
console.log(item);
//this executes the search function and replaces the src of the iframe
//with the chosen song
search(item);
