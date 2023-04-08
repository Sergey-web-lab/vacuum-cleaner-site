$(document).ready(function () {
  let token = '02142b0a1563ca36d6d1e7601196ee1b2a9d4ad0';

  $("#inputAddress").suggestions({
    token: token,
    type: "ADDRESS",

    onSelect: function (suggestion) {
      console.log(suggestion);
    }
  });

  $("#inputNameAndSurname").suggestions({
    token: token,
    type: "NAME",

    onSelect: function (suggestion) {
      console.log(suggestion.value);
    }
  });
});

