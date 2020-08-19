window.addEventListener("hashchange", () => {
  render();
});

render();

function render() {
  const hash = window.location.hash;

  if (hash === "#members") {
    renderMembers();
  } else if (hash === "#repos") {
    renderRepos();
  }
}

function renderMembers() {
  $("#results").html("Loading...");

  const promise = $.ajax({
    type: "GET",
    url: "https://api.github.com/orgs/emberjs/members",
  });

  const fragment = document.createDocumentFragment();

  promise.then(
    (members) => {
      // 2xx
      console.log(members);

      members.forEach((member) => {
        const img = document.createElement("img");
        img.src = member.avatar_url;
        img.width = 150;
        img.alt = member.login;

        fragment.append(img);
      });

      $("#results").html(fragment);
    },
    (error) => {
      // HTTP status code = 4xx, 5xx
      console.error("There was an error", error);
      $("#results").html("Sorry, there was an error.");
    }
  );
}

function renderRepos() {
  $("#results").html("Loading...");

  const promise = $.ajax({
    type: "GET",
    url: "https://api.github.com/orgs/emberjs/repos",
  });

  const fragment = document.createDocumentFragment();

  promise.then((repos) => {
    repos.forEach((repo) => {
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      const p = document.createElement("p");

      h3.textContent = repo.name;
      p.textContent = repo.description;

      div.append(h3);
      div.append(p);
      fragment.append(div);
    });

    $("#results").html(fragment);
  });
}

// $("#members-link").on("click", function () {
//   $("#results").html("Loading...");

//   const promise = $.ajax({
//     type: "GET",
//     url: "https://api.github.com/orgs/emberjs/members",
//   });

//   let html = "";

//   promise.then(
//     (members) => {
//       // 2xx
//       console.log(members);

//       members.forEach((member) => {
//         html += `
//           <img
//             src="${member.avatar_url}"
//             alt="${member.login}"
//             width="150"
//           />
//         `;
//       });

//       const sanitizedHtml = DOMPurify.sanitize(html);
//       $("#results").html(sanitizedHtml);
//     },
//     (error) => {
//       // HTTP status code = 4xx, 5xx
//       console.error("There was an error", error);
//       $("#results").html("Sorry, there was an error.");
//     }
//   );
// });
