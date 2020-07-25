$("#members-link").on("click", function () {
  $("#results").html("Loading...");

  let promise = $.ajax({
    type: "GET",
    url: "https://api.github.com/orgs/emberjs/members",
  });

  promise.then((members) => {
    let fragment = document.createDocumentFragment();

    members.forEach((member) => {
      let img = document.createElement("img");
      img.src = member.avatar_url;
      img.width = 150;
      img.alt = `image of ${member.login}`;
      fragment.append(img);
    });

    $("#results").html(fragment);
  });
});
