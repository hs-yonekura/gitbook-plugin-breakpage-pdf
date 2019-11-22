module.exports = {
  hooks: {
    'page': function(page){
      page.content = page.content.replace(/<p>&lt;&lt;&lt;<\/p>/g, '<div style="page-break-before:always"></div>');
      return page;
    }
  }
}
