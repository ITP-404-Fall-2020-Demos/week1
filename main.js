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

$("#repos-link").on("click", function () {
  $("#results").html("Loading...");

  let promise = $.ajax({
    type: "GET",
    url: "https://api.github.com/orgs/emberjs/repos",
  });

  promise.then((repos) => {
    let fragment = document.createDocumentFragment();

    repos.forEach((repo) => {
      let div = document.createElement("div");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");

      h3.textContent = repo.name;
      p.textContent = repo.description;

      div.append(h3);
      div.append(p);
      fragment.append(div);
    });

    $("#results").html(fragment);
  });
});
