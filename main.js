$("#members-link").on("click", function () {
  $("#results").html("Loading...");

  let promise = $.ajax({
    type: "GET",
    url: "https://api.github.com/orgs/emberjs/members",
  });

  promise.then((members) => {
    let html = "";

<<<<<<< HEAD
    // vulnerable to Cross-site Scripting (XSS) attacks
    members.forEach((member) => {
=======
    // Example 1: vulnerable to Cross-site Scripting (XSS) attacks
    members.forEach(function (member) {
>>>>>>> 4bda184... 1. Rendering data from an Ajax request
      html += `
        <img
          src="${member.avatar_url}"
          alt="image of ${member.login}"
          width="150">
      `;
    });

    $("#results").html(html);
  });
});
