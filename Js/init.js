//Get Json Data
const myFetch = async () => {
  return await fetch(
    "https://raw.githubusercontent.com/GilBrou/PICme/master/FishEyeData.json"
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });
};
