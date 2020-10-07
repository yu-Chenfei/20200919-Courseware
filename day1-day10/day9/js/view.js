// view  视图层
// 在外调用
function createView(model) {
  var view = null;
  if (model.type == "shareLink") {
    view = setViewWithLink(model);
  } else if (model.type == "ad") {
    view = setViewWithAd(model);
  } else {
    view = setViewWithInfo(model);
  }
  return view;
}

function setViewWithLink(model) {
  var str = `
        <img src="${model.head}" alt="" />
        <div class="right">
            <p class="name">${model.name}</p>
            <p class="content">${model.content}</p>
            <a href="${model.articleUrl}" class="link">
                <img src="${model.articleImg}" alt="" />
                <p>${model.articleTitle}</p>
            </a>
            <p class="time">${model.time}</p>
        </div>
    `;
  var li = document.createElement("li");
  li.innerHTML = str;
  return li;
}

function setViewWithAd(model) {
  var str = `
          <img src="${model.head}" alt="" />
          <div class="right">
              <p class="name">${model.name}</p>
              <p class="content">${model.content}</p>
              <div class="showImg" style="background-image: url(${model.adImg})"></div>
              <p>
                  <a href="#">了解更多</a>
              </p>
          </div>
    `;
  var li = document.createElement("li");
  li.innerHTML = str;
  return li;
}

function setViewWithInfo(model) {
  var str = `
        <img src="${model.head}" alt="" />
        <div class="right">
            <p class="name">${model.name}</p>
            <p class="content">${model.content}</p>
            <div class="imgs">
            </div>
            <p class="time">${model.time}</p>
        </div>
    `;
  var li = document.createElement("li");
  li.innerHTML = str;
  var divImgs = li.querySelector(".imgs");
  model.imgs.forEach(function (url) {
    var str = `
            <div style="background-image:url(${url})"></div>
        `;
    divImgs.innerHTML += str;
  })
  return li;
}