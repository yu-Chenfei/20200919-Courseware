// model层  数据源及数据操作

function Model(obj) {
  this.type = obj.type;
  this.head = obj.headImg;
  this.content = obj.content;
  this.time = obj.time;
}

function AdModel(obj) {
  Model.call(this, obj);
  this.adImg = obj.adImg;
}

function LinkModel(obj) {
  Model.call(this, obj);
  this.articleUrl = obj.articleUrl;
  this.articleImg = obj.articleImg;
  this.articleTitle = obj.articleTitle;
}

function InfoModel(obj) {
  Model.call(this, obj);
  this.imgs = obj.imgs;
}

//在外调用
function createModel(obj) {
  var model = null;
  if (obj.type == "shareLink") {
    model = new LinkModel(obj);
  } else if (obj.type == "ad") {
    model = new AdModel(obj);
  } else {
    model = new InfoModel(obj);
  }
  return model;
}